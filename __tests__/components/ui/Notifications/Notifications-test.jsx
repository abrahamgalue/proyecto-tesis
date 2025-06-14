import {
	render,
	screen,
	waitFor,
	userEvent
} from '@testing-library/react-native'
import Notifications from '@/components/ui/Notifications/Notifications'
import { INITIAL_NOTIFICATIONS } from '@/constants/data'

jest.mock('@/lib/useColorScheme', () => ({
	useColorScheme: () => ({ isDarkColorScheme: true })
}))

jest.mock('@/constants/data', () => ({
	INITIAL_NOTIFICATIONS: jest.fn()
}))

const mockInitialNotifications = INITIAL_NOTIFICATIONS

jest.mock('@/components/ui/Icons/IconSymbol', () => ({
	IconSymbol: jest.fn(() => <></>)
}))

jest.mock('@/components/ui/Icons/Icons', () => ({
	WaterObstructionIcon: jest.fn(() => <></>),
	TemperatureSubstrateIcon: jest.fn(() => <></>)
}))

const mockHandleNotificationPress = jest.fn()
const mockHandleClearNotifications = jest.fn()

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

describe('<Notifications />', () => {
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

	test('should render notification button', () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		render(
			<Notifications
				showNotifications={false}
				handleNotificationPress={mockHandleNotificationPress}
				handleClearNotifications={mockHandleClearNotifications}
			/>
		)

		expect(screen.getByRole('button')).toBeOnTheScreen()
	})

	test('should show notification count badge when there are notifications', () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		render(
			<Notifications
				showNotifications={false}
				handleNotificationPress={mockHandleNotificationPress}
				handleClearNotifications={mockHandleClearNotifications}
			/>
		)

		expect(
			screen.getByText(initialNotificationsValue.length.toString())
		).toBeOnTheScreen()
	})

	test('does not show notification count when there are no notifications', () => {
		mockInitialNotifications.mockReturnValue([])

		render(
			<Notifications
				showNotifications={false}
				handleNotificationPress={mockHandleNotificationPress}
				handleClearNotifications={mockHandleClearNotifications}
			/>
		)

		expect(
			screen.queryByText(initialNotificationsValue.length.toString())
		).not.toBeOnTheScreen()
	})

	test.each(initialNotificationsValue)(
		'should display $content when showNotifications is true',
		({ content }) => {
			mockInitialNotifications.mockReturnValue(initialNotificationsValue)

			render(
				<Notifications
					showNotifications={true}
					handleNotificationPress={mockHandleNotificationPress}
					handleClearNotifications={mockHandleClearNotifications}
				/>
			)

			expect(screen.getByRole('text', { name: content })).toBeOnTheScreen()
		}
	)

	test('should render clear notifications button when showNotifications is true', () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		render(
			<Notifications
				showNotifications={true}
				handleNotificationPress={mockHandleNotificationPress}
				handleClearNotifications={mockHandleClearNotifications}
			/>
		)

		const clearBtn = screen.getByText('Limpiar todo')

		expect(clearBtn).toBeOnTheScreen()
		expect(clearBtn).toHaveStyle({ color: 'white' })
		expect(clearBtn.props).toHaveProperty('className', 'font-bold')
	})

	test('should call handleNotificationPress when button is pressed', async () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		const user = userEvent.setup()

		render(
			<Notifications
				showNotifications={false}
				handleNotificationPress={mockHandleNotificationPress}
				handleClearNotifications={mockHandleClearNotifications}
			/>
		)

		await user.press(screen.getByRole('button'))

		await waitFor(() => {
			expect(mockHandleNotificationPress).toHaveBeenCalled()
		})
	})

	test('does not call handleNotificationPress when there are no notifications', async () => {
		mockInitialNotifications.mockReturnValue([])

		const user = userEvent.setup()

		render(
			<Notifications
				showNotifications={false}
				handleNotificationPress={mockHandleNotificationPress}
				handleClearNotifications={mockHandleClearNotifications}
			/>
		)

		await user.press(screen.getByRole('button'))

		await waitFor(() => {
			expect(mockHandleNotificationPress).not.toHaveBeenCalled()
		})
	})

	test('should call handleClearNotifications when clear button is pressed', async () => {
		mockInitialNotifications.mockReturnValue(initialNotificationsValue)

		const user = userEvent.setup()

		render(
			<Notifications
				showNotifications={true}
				handleNotificationPress={mockHandleNotificationPress}
				handleClearNotifications={mockHandleClearNotifications}
			/>
		)

		const clearBtn = screen.getByText('Limpiar todo')

		expect(clearBtn).toBeOnTheScreen()
		expect(clearBtn).toHaveStyle({ color: 'white' })
		expect(clearBtn.props).toHaveProperty('className', 'font-bold')

		await user.press(clearBtn)

		await waitFor(() => {
			expect(mockHandleClearNotifications).toHaveBeenCalled()
		})
	})

	test('should display "+9" badge when there are 10 or more notifications', () => {
		mockInitialNotifications.mockReturnValue(
			Array(10).fill({
				type: 'waterObstruction',
				content: '60% de agua restante'
			})
		)

		render(
			<Notifications
				showNotifications={false}
				handleNotificationPress={mockHandleNotificationPress}
				handleClearNotifications={mockHandleClearNotifications}
			/>
		)

		expect(screen.getByText('+9')).toBeOnTheScreen()
	})
})
