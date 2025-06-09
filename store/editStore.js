import { create } from 'zustand'

const useEditStore = create((set) => ({
	isEdit: false,
	actions: {
		toggleEdited: () => set((old) => ({ isEdit: !old.isEdit })),
		setEdited: (value) => set({ isEdit: value })
	}
}))

export const useEdit = () => useEditStore((state) => state.isEdit)

export const useEditActions = () => useEditStore((state) => state.actions)
