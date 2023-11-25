// Types
import type { FC } from 'react'

// Components
import { List } from '@/components'

import { Alert } from 'antd'

// Utils
import { useNotificationsStore } from '@/storage'
import { ENotificationVariant } from '@/storage/useNotificationsStore/types'

import classes from './AppNotifications.module.scss'

/** The component responsible for rendering notifications. */
export const AppNotifications: FC = () => {
	// Notifications.
	const notifications = useNotificationsStore(store => store.notifications)

	return (
		<div className={classes.root}>
			<List
				arr={notifications}
				callback={n => {
					if (n.variant === ENotificationVariant.message) {
						return (
							<Alert
								className={classes.alert}
								key={n.text}
								message={n.text}
								type="info"
							/>
						)
					}

					if (n.variant === ENotificationVariant.error) {
						return (
							<Alert
								className={classes.alert}
								key={n.text}
								message={n.text}
								type="error"
							/>
						)
					}
				}}
			/>
		</div>
	)
}
