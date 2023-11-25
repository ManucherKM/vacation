import { Alert, AlertProps } from 'antd'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'

import { List } from '..'
import classes from './History.module.scss'

ChartJS.register(ArcElement, Tooltip, Legend)
export const History = () => {
	const applications: {
		message: AlertProps['message']
		type: AlertProps['type']
	}[] = [
		{
			message: 'Заявка на отпуск от 1999.12.12 с 1999.08.11 по 2000.1.25',
			type: 'success',
		},
		{
			message: 'Заявка на отпуск от 1999.12.12 с 1999.08.11 по 2000.1.25',
			type: 'error',
		},
		{
			message: 'Заявка на отпуск от 1999.12.12 с 1999.08.11 по 2000.1.25',
			type: 'error',
		},
		{
			message: 'Заявка на отпуск от 1999.12.12 с 1999.08.11 по 2000.1.25',
			type: 'error',
		},
		{
			message: 'Заявка на отпуск от 1999.12.12 с 1999.08.11 по 2000.1.25',
			type: 'error',
		},
	]

	return (
		<div className={classes.root}>
			<h2>Последние заявки</h2>
			<List
				arr={applications}
				callback={(props, idx) => <Alert key={idx} {...props} />}
			/>
		</div>
	)
}
