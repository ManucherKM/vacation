// Types
import type { INotification, INotificationsStore } from './types'

// Utils
import { create } from 'zustand'
import { ENotificationVariant } from './types'

// Default storage object.
const defaultNotificationsStore = {
	notifications: [],
}

/** With this hook you can access the notification storage. */
export const useNotificationsStore = create<INotificationsStore>(
	(set, get) => ({
		...defaultNotificationsStore,
		newMessage(text) {
			// Message notification.
			const message: INotification = {
				text,
				variant: ENotificationVariant.message,
			}

			const removeNotification = get().removeNotification

			setTimeout(() => {
				removeNotification(message)
			}, 5000)

			// Add a notification to the end of the notification list.
			set(prev => ({ notifications: [...prev.notifications, message] }))
		},
		newError(text) {
			// Error notification.
			const error: INotification = {
				text,
				variant: ENotificationVariant.error,
			}

			const removeNotification = get().removeNotification

			setTimeout(() => {
				removeNotification(error)
			}, 5000)

			// Add a notification to the end of the notification list.
			set(prev => ({ notifications: [...prev.notifications, error] }))
		},
		removeNotification(notification) {
			// Get current notifications.
			const { notifications } = get()

			// Filtering notifications.
			const newNotifications = notifications.filter(
				n => n.text !== notification.text && n.variant === notification.variant,
			)

			// We change notifications to new ones.
			set({ notifications: newNotifications })
		},
		reset() {
			// Reset the storage to its original state.
			set(defaultNotificationsStore)
		},
	}),
)
