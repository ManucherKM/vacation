// Types
import type { FC } from 'react'

// Components
import { Home, Login, Registration } from '@/pages'
import { SupervisorDashboard } from '@/pages/SupervisorDashboard/SupervisorDashboard'
import { WorkerDashboard } from '@/pages/WorkerDashboard/WorkerDashboard'

/** Application Routing Interface. */
export interface IRoute {
	/** The path along which the component will be rendered. */
	path: string

	/** The component that will be rendered. */
	component: FC
}

export enum EOptionWorkerDashboard {
	calendar = 'calendar',
	history = 'history',
	apply = 'apply',
}

export enum EOptionSupervisorDashboard {
	calendar = 'calendar',
	history = 'history',
	apply = 'apply',
	subordinates = 'subordinates',
	applications = 'applications',
}

/** Enumeration of possible application routes. */
export enum ERoutes {
	/** `Home` page route. */
	home = '/',

	/** `Login` page route. */
	login = '/auth/login',

	/** `Registration` page route. */
	registration = '/auth/registration',

	workerdashboard = '/workerdashboard',

	supervisor = '/supervisor',
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
	{
		path: ERoutes.workerdashboard + '/:option',
		component: WorkerDashboard,
	},
	{
		path: ERoutes.supervisor + '/:option',
		component: SupervisorDashboard,
	},
]
