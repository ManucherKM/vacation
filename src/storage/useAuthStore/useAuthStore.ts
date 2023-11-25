// Types
import axios from '@/configuration/axios'
import {
	EAuthStoreApiRoutes,
	ERoles,
	ILoginResponse,
	type IAuthStore,
} from './types'

// Utils

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useNotificationsStore } from '../useNotificationsStore/useNotificationsStore'
import { useStore } from '../useStore/useStore'

// Default storage object.
const defaultAuthStore = {
	token: null,
	role: null,
} as IAuthStore

/** With this hook you can access the authorization storage. */
export const useAuthStore = create(
	persist<IAuthStore>(
		(set, get) => ({
			...defaultAuthStore,
			async login(loginDto) {
				try {
					await axios.post<ILoginResponse>(EAuthStoreApiRoutes.login, loginDto)
					console.log(loginDto)

					set({ token: 'asd', role: ERoles.supervisor })

					// if (!data?.token) {
					// 	return false
					// }

					// Return true.
					return true
				} catch (e) {
					// We show the error in the console.
					console.error(e)

					// Return false.
					return false
				}
			},
			async registration(registrationDto) {
				try {
					console.log(registrationDto)

					// Return true.
					return true
				} catch (e) {
					// We show the error in the console.
					console.error(e)

					// Return false.
					return false
				}
			},

			async logout() {
				get().reset()
				useNotificationsStore.getState().reset()
				useStore.getState().reset()
			},

			setToken(token) {
				// We change the token.
				set({ token })
			},
			reset() {
				// We reset the storage to its original state.
				set(defaultAuthStore)
			},
		}),
		{ name: 'auth-store' },
	),
)
