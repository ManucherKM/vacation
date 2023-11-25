import { List } from '..'
import { AlertApply } from '../AlertApply/AlertApply'
import classes from './Applications.module.scss'

export const Applications = () => {
	const items = [
		{
			name: 'Иванов Иван Иванович',
			message: 'Прошу дать мне отпускные по причине того что ...',
		},
		{
			name: 'Иванов Иван Иванович',
			message: 'Прошу дать мне отпускные по причине того что ...',
		},
		{
			name: 'Иванов Иван Иванович',
			message: 'Прошу дать мне отпускные по причине того что ...',
		},
		{
			name: 'Иванов Иван Иванович',
			message: 'Прошу дать мне отпускные по причине того что ...',
		},
	]
	return (
		<div className={classes.root}>
			<h2>Заявки для рассмотрения</h2>

			<List
				arr={items}
				callback={(props, idx) => <AlertApply key={idx} {...props} />}
			/>
		</div>
	)
}
