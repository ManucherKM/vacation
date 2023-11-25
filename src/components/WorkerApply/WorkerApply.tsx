import { Button, DatePicker } from 'antd'
import classes from './WorkerApply.module.scss'

export const WorkerApply = () => {
	return (
		<div className={classes.root}>
			<DatePicker.RangePicker style={{ width: '100%' }} />
			<Button type="primary">Отправить</Button>
		</div>
	)
}
