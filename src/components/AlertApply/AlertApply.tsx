import { Alert, Button } from 'antd'
import { FC } from 'react'
import classes from './AlertApply.module.scss'

export interface IAlertApply {
	message: string
	name: string
	onConfirm?: () => void
	onReject?: () => void
}

export const AlertApply: FC<IAlertApply> = ({
	message,
	name,
	onConfirm,
	onReject,
}) => {
	function configrmHandler() {
		if (onConfirm) {
			onConfirm()
		}
	}

	function rejectHandler() {
		if (onReject) {
			onReject()
		}
	}

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
						<Button onClick={configrmHandler}>Принять</Button>
						<Button onClick={rejectHandler}>Отказать</Button>
					</div>
				</div>
			}
		/>
	)
}
