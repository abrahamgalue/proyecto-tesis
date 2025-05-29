import { render, screen } from '@testing-library/react-native'
import NotificationElement from '@/components/ui/NotificationElement'
import { useColorScheme } from '@/lib/useColorScheme'

jest.mock('@/components/ui/Icons', () => ({
	WaterObstructionIcon: () => <></>,
	TemperatureSubstrateIcon: () => <></>
}))

jest.mock('@/lib/useColorScheme', () => ({
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

	test('should render WaterObstructionIcon if the type is passed', () => {
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

	test('should render TemperatureSubstrateIcon if the type is passed', () => {
		useColorScheme.mockReturnValue({ isDarkColorScheme: false })

		render(
			<NotificationElement
				notification={{ ...notificationBase, type: 'temperatureSubstrate' }}
			/>
		)

		expect(screen.root).toBeOnTheScreen()
	})
})
