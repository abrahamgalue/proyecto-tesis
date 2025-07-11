import { renderHook, act } from '@testing-library/react-native'
import useError from '@/hooks/useError'

describe('useError', () => {
	test('should initialize with error = false', () => {
		const { result } = renderHook(() => useError())

		expect(result.current.error).toBe(false)
	})

	test('should update error to true when handleError(true) is called', () => {
		const { result } = renderHook(() => useError())

		act(() => {
			result.current.handleError(true)
		})

		expect(result.current.error).toBe(true)
	})

	test('should update error back to false when handleError(false) is called', () => {
		const { result } = renderHook(() => useError())

		act(() => {
			result.current.handleError(true)
			result.current.handleError(false)
		})

		expect(result.current.error).toBe(false)
	})
})
