import { create } from 'zustand'

interface EditState {
	isEdit: boolean
	actions: {
		toggleEdited: () => void
		setEdited: (value: boolean) => void
	}
}

const useEditStore = create<EditState>()((set) => ({
	isEdit: false,
	actions: {
		toggleEdited: () => set((old) => ({ isEdit: !old.isEdit })),
		setEdited: (value) => set({ isEdit: value })
	}
}))

export const useEdit = () => useEditStore((state) => state.isEdit)

export const useEditActions = () => useEditStore((state) => state.actions)
