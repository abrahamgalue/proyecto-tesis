import { create } from 'zustand'
import { INITIAL_NOTIFICATIONS, INITIAL_DEVICES_DATA } from '@/constants/data'

const useNotificationsStore = create((set) => ({
	notifications: INITIAL_NOTIFICATIONS,
	showNotifications: false,
	actions: {
		clearNotifications: () => {
			console.log('[ESP32] Limpiando notificaciones en el ESP32.')
			set({ notifications: [], showNotifications: false })
		},
		handleNotificationPress: () => {
			console.log(
				'[ESP32] Cambiando visibilidad de notificaciones en el ESP32.'
			)
			set((state) => {
				if (state.notifications.length === 0) return state

				const devices = INITIAL_DEVICES_DATA
				state.notifications.forEach((n) => {
					const device = devices.find((d) => d.id === n.deviceId)
					if (device) {
						console.log(
							`[ESP32] ¡Atención! Problema detectado en el dispositivo: ${device.name} (Ubicación: ${device.location}). Notificación: ${n.content}`
						)
						console.log(
							`[ESP32] Verifique físicamente el dispositivo: ${device.name} (Ubicación: ${device.location})`
						)
					} else {
						console.log(
							`[ESP32] Notificación recibida: ${n.content} (Tipo: ${n.type})`
						)
					}
				})
				return { showNotifications: !state.showNotifications }
			})
		}
	}
}))

export const useNotifications = () =>
	useNotificationsStore((state) => state.notifications)

export const useShowNotifications = () =>
	useNotificationsStore((state) => state.showNotifications)

export const useNotificationsActions = () =>
	useNotificationsStore((state) => state.actions)
