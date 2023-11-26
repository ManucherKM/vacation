export interface IVacation {
	EventName: string
	EventSource: string
	Start: Date
	End: Date
}

export interface IResponseVacation {
	reqs_list: { end: string; start: string; name: string }[]
}

/** Shared storage. */
export interface IStore {
	/** Loading status. */
	isLoading: boolean

	vacations: IVacation[]

	getVacationList: () => Promise<boolean>

	addApplication: (target: {
		date_start: string
		date_end: string
		benefit: string
		auth_token: string
		payments: string
	}) => Promise<boolean>

	/** Function for changing the download state. */
	setLoading: (target: boolean) => void

	/** Function to reset the storage to its original state. */
	reset: () => void
}

export enum EMainRoutes {
	vacations = '/api/get_reqs',
	addApplication = '/api/make_req',
}
