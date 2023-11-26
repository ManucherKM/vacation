// Types
import { EMainRoutes, IResponseVacation, IVacation, type IStore } from './types'

// Utils
import { create } from 'zustand'

import axios from '@/configuration/axios'
import { useAuthStore } from '..'

// Default storage object.
const defaultStore = {
	isLoading: false,
	vacations: [],
}

/** With this hook you can access shared storage. */
export const useStore = create<IStore>(set => ({
	...defaultStore,
	async getVacationList() {
		try {
			const token = useAuthStore.getState().token

			const { data } = await axios.post<IResponseVacation>(
				EMainRoutes.vacations,
				{
					auth_token: token,
				},
			)

			console.log(data)

			if (!data?.reqs_list?.length) {
				return false
			}

			const formatVacations = data.reqs_list.map(
				i =>
					({
						End: new Date(i.end),
						EventName: i.name,
						EventSource: i.name,
						Start: new Date(i.start),
					}) as IVacation,
			)

			set({ vacations: formatVacations })

			return true
		} catch (e) {
			console.log(e)

			return false
		}
	},
	async addApplication(target) {
		try {
			const { status } = await axios.post(EMainRoutes.addApplication, target)

			if (status !== 200) {
				return false
			}

			return true
		} catch (e) {
			console.log(e)

			return false
		}
	},
	setLoading(target) {
		// Changing the loading state.
		set({ isLoading: target })
	},
	reset() {
		// Reset the storage to its original state.
		set(defaultStore)
	},
}))
