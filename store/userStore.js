import { create } from 'zustand'
import { supabase } from '@/config/supabase'

const useUserStore = create((set, get) => ({
	username: '',
	actions: {
		getUsername: async (userId) => {
			console.log(
				`[ESP32] Solicitando nombre de usuario para el usuario con id: ${userId}`
			)
			const { data, error } = await supabase
				.from('profiles')
				.select('username')
				.eq('id', userId)
				.single()
			if (!error && data) {
				set({ username: data.username })
				console.log(
					`[ESP32] Nombre de usuario recibido del ESP32: ${data.username}`
				)
				return data.username
			}
			console.log('[ESP32] Error al obtener el nombre de usuario del ESP32.')
			return null
		},
		changeUsername: async (userId, newUsername) => {
			console.log(
				`[ESP32] Enviando comando para cambiar el nombre de usuario a: ${newUsername} para el usuario con id: ${userId}`
			)
			const { error } = await supabase
				.from('profiles')
				.update({ username: newUsername })
				.eq('id', userId)
			if (!error) {
				set({ username: newUsername })
				console.log(
					`[ESP32] Nombre de usuario actualizado en el ESP32: ${newUsername}`
				)
				return true
			}
			console.log(
				'[ESP32] Error al actualizar el nombre de usuario en el ESP32.'
			)
			return false
		}
	}
}))

export const useUsername = () => useUserStore((state) => state.username)
export const useUserActions = () => useUserStore((state) => state.actions)
