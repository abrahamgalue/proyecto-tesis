import { create } from 'zustand'
import { INITIAL_NOTIFICATIONS } from '@/constants/data'

const useNotificationsStore = create((set) => ({
	notifications: INITIAL_NOTIFICATIONS,
	showNotifications: false,
	actions: {
		clearNotifications: () => {
			set({ notifications: [], showNotifications: false })
		},
		handleNotificationPress: () =>
			set((state) =>
				state.notifications.length === 0
					? state
					: { showNotifications: !state.showNotifications }
			)
	}
}))

export const useNotifications = () =>
	useNotificationsStore((state) => state.notifications)

export const useShowNotifications = () =>
	useNotificationsStore((state) => state.showNotifications)

export const useNotificationsActions = () =>
	useNotificationsStore((state) => state.actions)
