// Types
import axios from '@/configuration/axios'
import { EAuthStoreApiRoutes, type IAuthStore } from './types'

// Utils

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Default storage object.
const defaultAuthStore = {
	token: null,
} as IAuthStore

/** With this hook you can access the authorization storage. */
export const useAuthStore = create(
	persist<IAuthStore>(
		set => ({
			...defaultAuthStore,
			async login(loginDto) {
				try {
					console.log(loginDto)
					const { data } = await axios.post(EAuthStoreApiRoutes.login, loginDto)
					console.log(data)

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
				try {
					// Return true.
					return true
				} catch (e) {
					// We show the error in the console.
					console.error(e)
					// Return false.
					return false
				}
			},
			async getNewAccessToken() {
				try {
					// Return true.
					return true
				} catch (e) {
					// We show the error in the console.
					console.error(e)

					// Return false.
					return false
				}
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
