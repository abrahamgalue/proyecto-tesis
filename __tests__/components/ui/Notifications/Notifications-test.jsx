import {
	render,
	userEvent,
	screen,
	waitFor
} from '@testing-library/react-native'
import Notifications from '@/components/ui/Notifications/Notifications'
import * as notificationsStore from '@/store/notificationsStore'

jest.mock('@/store/notificationsStore', () => ({
	useNotifications: jest.fn(),
	useShowNotifications: jest.fn(),
	useNotificationsActions: jest.fn()
}))

jest.mock('@/hooks/useColorScheme', () => ({
	useColorScheme: () => ({
		isDarkColorScheme: false
	})
}))

jest.mock('expo-font')

function setupMocks({
	notifications = [],
	showNotifications = false,
	handleNotificationPress = jest.fn(),
	clearNotifications = jest.fn()
} = {}) {
	jest
		.spyOn(notificationsStore, 'useNotifications')
		.mockReturnValue(notifications)
	jest
		.spyOn(notificationsStore, 'useShowNotifications')
		.mockReturnValue(showNotifications)
	jest.spyOn(notificationsStore, 'useNotificationsActions').mockReturnValue({
		handleNotificationPress,
		clearNotifications
	})
	return { handleNotificationPress, clearNotifications }
}

describe('<Notifications />', () => {
	const mockNotifications = [
		{ id: '1', content: 'Test 1' },
		{ id: '2', content: 'Test 2' }
	]

	/**
	 * TO-DO
	 *
	 * Warning: An update to Animated(View) inside a test was not wrapped in act(...).
	 */
	beforeAll(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {})
	})

	afterAll(() => {
		jest.restoreAllMocks()
	})

	beforeEach(() => {
		jest.clearAllMocks()
	})

	test('should disable button if no notifications', async () => {
		setupMocks({ notifications: [], showNotifications: false })

		render(<Notifications />)

		const button = screen.getByRole('button')

		expect(button).toBeDisabled()
	})

	test('should show notification badge when there are notifications', async () => {
		setupMocks({ notifications: mockNotifications, showNotifications: false })

		render(<Notifications />)

		expect(screen.getByText('2')).toBeOnTheScreen()
	})

	test('should display "+9" badge when there are 10 or more notifications', () => {
		setupMocks({
			notifications: Array(10).fill({
				type: 'waterObstruction',
				content: '60% de agua restante'
			}),
			showNotifications: false
		})

		render(<Notifications />)

		expect(screen.getByText('+9')).toBeOnTheScreen()
	})

	test('should call handleNotificationPress when pressing the button', async () => {
		const { handleNotificationPress } = setupMocks({
			notifications: mockNotifications,
			showNotifications: false
		})

		const user = userEvent.setup()

		render(<Notifications />)

		const button = screen.getByRole('button')

		await user.press(button)

		await waitFor(() => {
			expect(handleNotificationPress).toHaveBeenCalled()
		})
	})

	test('should render notifications list and clear button if showNotifications is true', async () => {
		const { clearNotifications } = setupMocks({
			notifications: mockNotifications,
			showNotifications: true
		})

		const user = userEvent.setup()

		render(<Notifications />)

		expect(screen.getByText('Test 1')).toBeOnTheScreen()
		expect(screen.getByText('Test 2')).toBeOnTheScreen()
		expect(screen.getByText('Limpiar todo')).toBeOnTheScreen()

		const clearButton = screen.getByText('Limpiar todo')

		await user.press(clearButton)

		await waitFor(() => {
			expect(clearNotifications).toHaveBeenCalled()
		})
	})
})
