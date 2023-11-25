// Types
import type { IAuthStore } from './types'

// Utils
import axios from '@/configuration/axios'
import { env } from '@/configuration/env'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// The URL where the web application is hosted.
const CLIENT_URL = env.get('CLIENT_URL').required().asString()

// Default storage object.
const defaultAuthStore = {
	token: null,
} as IAuthStore

/** With this hook you can access the authorization storage. */
export const useAuthStore = create(
	persist<IAuthStore>(
		(set, get) => ({
			...defaultAuthStore,
			async login(loginDto) {
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
			async registration(registrationDto) {
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
