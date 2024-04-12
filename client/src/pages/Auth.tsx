import { FC, useState } from 'react'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'
import { setTokenToLocalStorage } from '../helpers/loacalStorege.helper'
import { useAppDispatch } from '../store/hooks'
import { login } from '../store/user/userSlice'
import { useNavigate } from 'react-router-dom'

const Auth: FC = () => {
	const [isLogin, setIsLogin] = useState(false)
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.registration({ email, password })
			if (data) {
				toast.success('Registration successful')
				setIsLogin(!isLogin)
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}
	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.login({ email, password })
			if (data) {
				setTokenToLocalStorage('token', data.token)
				dispatch(login(data))
				toast.success('You logged in successfully')
				navigate('/')
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	return (
		<div className="md-40 flex flex-col justify-center items-center bg-slate-900 text-white">
			<h1 className="mb-10 text-center text-xl">{!isLogin ? 'Login' : 'Registration'}</h1>
			<form className="flex w-1/3 flex-col mx-auto gap-5" onSubmit={!isLogin ? loginHandler : registrationHandler}>
				<input type="text" className="input" placeholder="Email" onChange={e => setEmail(e.target.value)} />
				<input type="password" className="input" placeholder="Password" onChange={e => setPassword(e.target.value)} />
				<button className="btn btn-green mx-auto">Submit</button>
			</form>
			<div className="flex justify-center mt-5">
				{!isLogin ? (
					<button className="text-slate-300 hover:text-white" onClick={() => setIsLogin(false)}>
						You don`t have account?
					</button>
				) : (
					<button className="text-slate-300 hover:text-white" onClick={() => setIsLogin(true)}>
						Already have an account?
					</button>
				)}
			</div>
		</div>
	)
}

export default Auth
