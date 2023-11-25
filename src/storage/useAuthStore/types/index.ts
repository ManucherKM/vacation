/** The interface of parameters that the `login` function accepts. */
export interface ILoginTarget {
	/** Email. */
	email: string

	/** Password. */
	password: string
}

/**
 * The interface of parameters returned by the server when using the `login`
 * function.
 */
export interface ILoginResponse {
	token: string
	role: `${ERoles}`
}

/** The interface of parameters that the `registration` function accepts. */
export interface IRegistrationTarget {
	/** Email. */
	email: string

	/** Password. */
	password: string
}

/**
 * The interface of parameters returned by the server when using the
 * `registration` function.
 */
export interface IRegistrationResponse {
	/** The result of the request. */
	success: boolean
}

/** Access token type. */
export type Token = string | null

export enum ERoles {
	worker = 'worker',
	supervisor = 'supervisor',
}

/** Interface to the authorization store. */
export interface IAuthStore {
	/** User access token. */
	token: Token

	/** User access token. */
	role: ERoles | null

	/**
	 * User authorization function.
	 *
	 * @param loginDto Parameters required to send a request to the API.
	 */
	login: (loginDto: ILoginTarget) => Promise<boolean>

	/**
	 * User registration function.
	 *
	 * @param registrationDto Parameters required to send a request to the API.
	 */
	registration: (registrationDto: IRegistrationTarget) => Promise<boolean>

	/**
	 * Function to change the user's access token.
	 *
	 * @param token The value to which the access token will be changed.
	 */
	setToken: (token: Token) => void

	/** Function for logging out of a user account. */
	logout: () => Promise<void>

	/** Function to reset the storage to its initial state. */
	reset: () => void
}

/** Routes for api requests to the authorization store. */
export enum EAuthStoreApiRoutes {
	/** Route for user authorization. */
	login = '/register',

	/** Route for user registration. */
	registration = '/api/auth/registration',

	/** Route to obtain a new user access token. */
	getNewAccessToken = '/api/jwt/token',

	/** Route for logging out of the user account. */
	logout = '/api/auth/logout',
}
