import {
	Applications,
	Apply,
	Calendar,
	History,
	LayoutSupervisor,
	Statistic,
	Subordinates,
} from '@/components'
import { EOptionSupervisorDashboard } from '@/configuration/routes'
import { useParams } from 'react-router'

export const SupervisorDashboard = () => {
	const { option } = useParams<{ option: EOptionSupervisorDashboard }>()

	return (
		<LayoutSupervisor>
			{option === EOptionSupervisorDashboard.calendar && <Calendar />}
			{option === EOptionSupervisorDashboard.apply && <Apply />}
			{option === EOptionSupervisorDashboard.history && <History />}
			{option === EOptionSupervisorDashboard.statistic && <Statistic />}
			{option === EOptionSupervisorDashboard.subordinates && <Subordinates />}
			{option === EOptionSupervisorDashboard.applications && <Applications />}
			{option !== EOptionSupervisorDashboard.apply &&
				option !== EOptionSupervisorDashboard.calendar &&
				option !== EOptionSupervisorDashboard.history &&
				option !== EOptionSupervisorDashboard.statistic &&
				option !== EOptionSupervisorDashboard.subordinates &&
				option !== EOptionSupervisorDashboard.applications && (
					<h2>Option not found</h2>
				)}
		</LayoutSupervisor>
	)
}
