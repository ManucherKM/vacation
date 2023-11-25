// Types
import type { FC } from 'react'

// Components
import { Home, Login, Registration } from '@/pages'

/** Application Routing Interface. */
export interface IRoute {
	/** The path along which the component will be rendered. */
	path: string

	/** The component that will be rendered. */
	component: FC
}

/** Enumeration of possible application routes. */
export enum ERoutes {
	/** `Home` page route. */
	home = '/',

	/** `Login` page route. */
	login = '/auth/login',

	/** `Registration` page route. */
	registration = '/auth/registration',
}

/** Public Routes */
export const publicRoutes: IRoute[] = [
	{
		path: ERoutes.home,
		component: Home,
	},
	{
		path: ERoutes.login,
		component: Login,
	},
	{
		path: ERoutes.registration,
		component: Registration,
	},
]

/** Private Routes */
export const privateRoutes: IRoute[] = [
	// {
	// 	path: ERoutes.storage,
	// 	component: Storage,
	// },
]
