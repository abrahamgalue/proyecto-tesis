import { create } from 'zustand'

export const useFilterStore = create((set) => ({
	filter: 'all',
	actions: {
		setFilter: (value) => {
			console.log(`[ESP32] Enviando filtro al ESP32: ${value}`)
			set({ filter: value })
		}
	}
}))

export const useFilter = () => useFilterStore((state) => state.filter)

export const useFilterActions = () => useFilterStore((state) => state.actions)
