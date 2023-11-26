import { Apply, Calendar, History } from '@/components'
import { LayoutWorker } from '@/components/LayoutWorker'
import { EOptionWorkerDashboard } from '@/configuration/routes'
import { useParams } from 'react-router'

export const WorkerDashboard = () => {
	const { option } = useParams<{ option: EOptionWorkerDashboard }>()

	return (
		<LayoutWorker>
			{option === EOptionWorkerDashboard.calendar && <Calendar />}
			{option === EOptionWorkerDashboard.apply && <Apply />}
			{option === EOptionWorkerDashboard.history && <History />}
			{option !== EOptionWorkerDashboard.apply &&
				option !== EOptionWorkerDashboard.calendar &&
				option !== EOptionWorkerDashboard.history && <h2>Option not found</h2>}
		</LayoutWorker>
	)
}
