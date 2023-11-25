import type { FC } from 'react'

import { Route, Routes } from 'react-router'

import { privateRoutes, publicRoutes } from '@/configuration/routes'
import { useAuthStore } from '@/storage'

export const AppRouter: FC = () => {
	// The state responsible for user authorization.
	const isAuth: boolean = !!useAuthStore(store => store.token)

	return (
		<Routes>
			{publicRoutes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.component />}
				/>
			))}

			{isAuth &&
				privateRoutes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}

			<Route path="/*" element={<h1>404 Page Not Found</h1>} />
		</Routes>
	)
}
