import { create } from 'zustand'
import { supabase } from '@/config/supabase'

interface AccountState {
	username: string
}

const useAccountStore = create<AccountState>()(() => ({
	username: ''
}))

const getUsername = async (userId: string) => {
	console.log(
		`[ESP32] Solicitando nombre de usuario para el usuario con id: ${userId}`
	)
	const { data, error } = await supabase
		.from('profiles')
		.select('username')
		.eq('id', userId)
		.single()
	if (!error && data) {
		console.log(
			`[ESP32] Nombre de usuario recibido del ESP32: ${data.username}`
		)
		return useAccountStore.setState({
			username: data.username
		})
	}
	console.error('[ESP32] Error al obtener el nombre de usuario del ESP32.')
	return useAccountStore.setState({
		username: 'Abraham'
	})
}

const changeUsername = async (userId: string, newUsername: string) => {
	console.log(
		`[ESP32] Enviando comando para cambiar el nombre de usuario a: ${newUsername} para el usuario con id: ${userId}`
	)
	const { error } = await supabase
		.from('profiles')
		.update({ username: newUsername })
		.eq('id', userId)

	if (error) {
		console.error(
			'[ESP32] Error al actualizar el nombre de usuario en el ESP32.'
		)
		throw new Error('No se pudo actualizar el nombre de usuario')
	}

	useAccountStore.setState({ username: newUsername })
	console.log(
		`[ESP32] Nombre de usuario actualizado en el ESP32: ${newUsername}`
	)
}

const resetAccount = () => useAccountStore.setState({ username: '' })

export const useUsername = () => useAccountStore((state) => state.username)

export const useUserActions = () => ({
	getUsername,
	changeUsername,
	resetAccount
})
