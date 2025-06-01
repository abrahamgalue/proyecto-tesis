import { renderHook, act } from '@testing-library/react-native'
import useTime from '@/hooks/useTime'

jest.useFakeTimers()

describe('useTime', () => {
	afterEach(() => {
		jest.clearAllTimers()
	})

	test('should initialize with the current time', () => {
		const { result } = renderHook(() => useTime())
		expect(result.current.time).toBeInstanceOf(Date)
	})

	test('should update the time every second', () => {
		const { result } = renderHook(() => useTime())

		const initialTime = result.current.time

		act(() => {
			jest.advanceTimersByTime(1000)
		})

		const updatedTime = result.current.time

		expect(updatedTime.getTime()).toBeGreaterThan(initialTime.getTime())
	})
})
