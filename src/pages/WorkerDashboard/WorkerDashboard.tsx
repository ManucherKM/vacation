import { WorkerApply, WorkerCalendar } from '@/components'
import { LayoutWorker } from '@/components/LayoutWorker'
import { EOptionWorkerDashboard } from '@/configuration/routes'
import { useParams } from 'react-router'

export const WorkerDashboard = () => {
	const { option } = useParams<{ option: EOptionWorkerDashboard }>()

	return (
		<LayoutWorker>
			{option === EOptionWorkerDashboard.calendar && <WorkerCalendar />}
			{option === EOptionWorkerDashboard.apply && <WorkerApply/>}
			{option === EOptionWorkerDashboard.history && <h1>Hstory</h1>}
			{option !== EOptionWorkerDashboard.apply &&
				option !== EOptionWorkerDashboard.calendar &&
				option !== EOptionWorkerDashboard.history && <h2>Option not found</h2>}
		</LayoutWorker>
	)
}
