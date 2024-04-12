export interface IUserData {
	email: string
	password: string
}
export interface IResponseUser {
	email: string | undefined
	password: string | undefined
	id: number | undefined
	createdAt: Date | undefined
	updatedAt: Date | undefined
}

export interface IResponseUserData {
	user: IResponseUser
	token: string | undefined
}

export interface IUser {
	id: number
	email: string
	token: string
}

