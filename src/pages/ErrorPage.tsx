import { FC } from 'react'
import img from '../../public/404.png'
import { Link } from 'react-router-dom'

const ErrorPage: FC = () => {
	return (
		<div className="min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10">
			<img className="w-80" src={img} alt="404" />
			<Link className="rounded-md bg-sky-500 px-6 py-2" to="/">
				Back
			</Link>
		</div>
	)
}

export default ErrorPage
