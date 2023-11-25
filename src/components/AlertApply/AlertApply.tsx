import { Alert, Button } from 'antd'
import { FC } from 'react'
import classes from './AlertApply.module.scss'

export interface IAlertApply {
	message: string
	name: string
}

export const AlertApply: FC<IAlertApply> = ({ message, name }) => {
	return (
		<Alert
			message={
				<div className={classes.root}>
					<div>
						<span>{message}</span>
					</div>

					<div>
						<span>{name}</span>
					</div>

					<div className={classes.controls}>
						<Button>Принять</Button>
						<Button>Отказать</Button>
					</div>
				</div>
			}
		/>
	)
}
