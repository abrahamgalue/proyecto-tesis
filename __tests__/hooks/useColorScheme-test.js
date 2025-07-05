import { renderHook } from '@testing-library/react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import * as nativewind from 'nativewind'

describe('useColorScheme', () => {
	let mockSetColorScheme
	let mockToggleColorScheme
	let spyUseNativewindColorScheme

	beforeEach(() => {
		mockSetColorScheme = jest.fn()
		mockToggleColorScheme = jest.fn()
		spyUseNativewindColorScheme = jest.spyOn(nativewind, 'useColorScheme')
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('should return dark scheme when colorScheme is undefined', () => {
		spyUseNativewindColorScheme.mockReturnValue({
			colorScheme: undefined,
			setColorScheme: mockSetColorScheme,
			toggleColorScheme: mockToggleColorScheme
		})

		const { result } = renderHook(() => useColorScheme())

		expect(result.current.colorScheme).toBe('dark')
		expect(result.current.isDarkColorScheme).toBe(true)
	})

	test('should return correct values for dark scheme', () => {
		spyUseNativewindColorScheme.mockReturnValue({
			colorScheme: 'dark',
			setColorScheme: mockSetColorScheme,
			toggleColorScheme: mockToggleColorScheme
		})

		const { result } = renderHook(() => useColorScheme())

		expect(result.current.colorScheme).toBe('dark')
		expect(result.current.isDarkColorScheme).toBe(true)
		expect(result.current.setColorScheme).toBe(mockSetColorScheme)
		expect(result.current.toggleColorScheme).toBe(mockToggleColorScheme)
	})

	test('should return correct values for light scheme', () => {
		spyUseNativewindColorScheme.mockReturnValue({
			colorScheme: 'light',
			setColorScheme: mockSetColorScheme,
			toggleColorScheme: mockToggleColorScheme
		})

		const { result } = renderHook(() => useColorScheme())

		expect(result.current.colorScheme).toBe('light')
		expect(result.current.isDarkColorScheme).toBe(false)
		expect(result.current.setColorScheme).toBe(mockSetColorScheme)
		expect(result.current.toggleColorScheme).toBe(mockToggleColorScheme)
	})
})
