import { FilterTypes } from '@/features/devices/type'
import { create } from 'zustand'

interface FilterState {
	filter: FilterTypes
	actions: {
		setFilter: (value: FilterTypes) => void
	}
}

export const useFilterStore = create<FilterState>()((set) => ({
	filter: FilterTypes.All,
	actions: {
		setFilter: (value) => {
			console.log(`[ESP32] Enviando filtro al ESP32: ${value}`)
			set({ filter: value })
		}
	}
}))

export const useFilter = () => useFilterStore((state) => state.filter)

export const useFilterActions = () => useFilterStore((state) => state.actions)
