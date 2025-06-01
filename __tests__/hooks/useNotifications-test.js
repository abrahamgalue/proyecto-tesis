import { renderHook, act } from '@testing-library/react-native'
import { initialNotifications } from '@/lib/utils'
import useNotifications from '@/hooks/useNotifications'

jest.mock('@/lib/utils', () => ({
	initialNotifications: jest.fn()
}))

const mockInitialNotifications = initialNotifications

const initialNotificationsValue = [
	{
		type: 'waterObstruction',
		content: '60% de agua restante'
	},
	{
		type: 'temperatureSubstrate',
		content: '0.5% obstrucción'
	}
]

describe('useNotifications', () => {
	let handleNotificationPress
	let handleClearNotifications

	const renderNotifications = () => {
		return renderHook(() =>
			useNotifications({ handleNotificationPress, handleClearNotifications })
		)
	}

	beforeEach(() => {
		handleNotificationPress = jest.fn()
		handleClearNotifications = jest.fn()
	})

	afterEach(() => {
		mockInitialNotifications.mockReset()
	})

	test('initializes with default notification list', () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		const { result } = renderNotifications()

		expect(result.current.notifications).toStrictEqual(
			initialNotificationsValue
		)
	})

	test('returns correct count when notifications are under threshold', () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		const { result } = renderNotifications()

		expect(result.current.numOfNotifications).toBe(2)
	})

	test('caps notification count display above threshold', () => {
		mockInitialNotifications.mockReturnValue(
			Array(10).fill({
				type: 'waterObstruction',
				content: '60% de agua restante'
			})
		)

		const { result } = renderNotifications()

		expect(result.current.numOfNotifications).toBe('+9')
	})

	test('triggers external handler when interacting with available notifications', () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		const { result } = renderNotifications()

		act(() => {
			result.current.onPressNotification()
		})

		expect(handleNotificationPress).toHaveBeenCalledTimes(1)
	})

	test('avoids triggering interaction handler when list is empty', () => {
		mockInitialNotifications.mockReturnValue([])

		const { result } = renderNotifications()

		act(() => {
			result.current.onPressNotification()
		})

		expect(handleNotificationPress).not.toHaveBeenCalled()
	})

	test('clears list and calls cleanup handler on clear action', () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		const { result } = renderNotifications()

		act(() => {
			result.current.onPressClearNotifications()
		})

		expect(result.current.notifications).toEqual([])
		expect(handleClearNotifications).toHaveBeenCalledTimes(1)
	})
})
