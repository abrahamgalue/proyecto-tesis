import { renderHook, act } from '@testing-library/react-native'
import useModal from '@/hooks/useModal'

describe('useModal', () => {
	test('should initialize with visible = false', () => {
		const { result } = renderHook(() => useModal())

		expect(result.current.visible).toBe(false)
	})

	test('should set visible = true when handleShowModal is called', () => {
		const { result } = renderHook(() => useModal())

		act(() => {
			result.current.handleShowModal()
		})

		expect(result.current.visible).toBe(true)
	})

	test('should set visible = false when handleHideModal is called', () => {
		const { result } = renderHook(() => useModal())

		act(() => {
			result.current.handleShowModal()
			result.current.handleHideModal()
		})

		expect(result.current.visible).toBe(false)
	})
})
