import { render, screen } from '@testing-library/react-native'
import NotificationElement from '@/features/weather/components/notifications/NotificationElement'
import { useColorScheme } from '@/hooks/useColorScheme'

jest.mock('@/components/icons/WaterObstruction', () => ({
	__esModule: true,
	default: () => 'WaterObstruction'
}))

jest.mock('@/components/icons/TemperatureSubstrate', () => ({
	__esModule: true,
	default: () => 'TemperatureSubstrate'
}))

jest.mock('@/hooks/useColorScheme', () => ({
	useColorScheme: jest.fn()
}))

describe('<NotificationElement />', () => {
	const notificationBase = {
		content: '60% de agua restante'
	}

	test('should render the notification content', () => {
		useColorScheme.mockReturnValue({ isDarkColorScheme: false })

		render(
			<NotificationElement
				notification={{ ...notificationBase, type: 'temperatureSubstrate' }}
			/>
		)

		expect(screen.getByText('60% de agua restante')).toBeOnTheScreen()
	})

	test('should render WaterObstruction icon if the type is passed', () => {
		useColorScheme.mockReturnValue({ isDarkColorScheme: false })

		render(
			<NotificationElement
				notification={{
					content: 'Obstrucción detectada',
					type: 'waterObstruction'
				}}
			/>
		)

		expect(screen.root).toBeOnTheScreen()
	})

	test('should render TemperatureSubstrate icon if the type is passed', () => {
		useColorScheme.mockReturnValue({ isDarkColorScheme: false })

		render(
			<NotificationElement
				notification={{ ...notificationBase, type: 'temperatureSubstrate' }}
			/>
		)

		expect(screen.root).toBeOnTheScreen()
	})
})
