export function getTokenFromLocalStorage(key: string): string {
	const data = localStorage.getItem(key)
	const token = data ? JSON.parse(data) : ''

	return token
}

export function setTokenToLocalStorage(key: string, token: string): void {
	localStorage.setItem(key, JSON.stringify(token))
}

export function removeTokenFromLocalStorage(key: string): void {
	localStorage.removeItem(key)
}
