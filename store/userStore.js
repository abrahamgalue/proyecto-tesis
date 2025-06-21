import { create } from 'zustand'
import { supabase } from '@/config/supabase'

const useUserStore = create((set, get) => ({
	username: '',
	actions: {
		getUsername: async (userId) => {
			const { data, error } = await supabase
				.from('profiles')
				.select('username')
				.eq('id', userId)
				.single()
			if (!error && data) {
				set({ username: data.username })
				return data.username
			}
			return null
		},
		changeUsername: async (userId, newUsername) => {
			const { error } = await supabase
				.from('profiles')
				.update({ username: newUsername })
				.eq('id', userId)
			if (!error) {
				set({ username: newUsername })
				return true
			}
			return false
		}
	}
}))

export const useUsername = () => useUserStore((state) => state.username)
export const useUserActions = () => useUserStore((state) => state.actions)
