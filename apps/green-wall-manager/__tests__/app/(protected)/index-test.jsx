import { render, screen, userEvent } from '@testing-library/react-native'
import * as useWeatherDataHook from '@/features/weather/hooks/useWeatherData'
import * as useSensorDataHook from '@/features/weather/hooks/useSensorData'
import * as useForecastDataHook from '@/features/weather/hooks/useForecastData'
import App from '@/app/(protected)/index'

jest.mock('expo-font')

jest.mock('@/config/supabase')

jest.mock('@react-native-async-storage/async-storage', () =>
	require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

jest.mock('@/components/ui/icon-symbol', () => ({
	IconSymbol: () => 'IconSymbol'
}))

jest.spyOn(useWeatherDataHook, 'default').mockReturnValue({
	data: {
		tempOutside: 25,
		humidity: '68%',
		wind: { speed: 12, unit: 'km/h' },
		UV: { index: 4, state: 'Moderado' },
		sensationThermal: 27
	}
})

jest.spyOn(useSensorDataHook, 'default').mockReturnValue({
	data: {
		waterLevel: '17%',
		soilTemp: '34°C',
		substrateTemp: '26°C',
		phLevel: '2,83',
		waterFlowObstruction: '08%'
	}
})

jest.spyOn(useForecastDataHook, 'default').mockReturnValue({
	data: {
		forecastDays: [
			{
				day: 'Viernes',
				type: 'cloudy',
				temp: '20°/26°',
				detail: '74% Nub'
			},
			{
				day: 'Sábado',
				type: 'sunny',
				temp: '26°/29°',
				detail: '83% Sol'
			},
			{
				day: 'Domingo',
				type: 'sunny',
				temp: '30°/34°',
				detail: '88% Sol'
			}
		]
	}
})

jest.useFakeTimers()

describe('App Component', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	test('should render weather data correctly', () => {
		render(<App />)

		expect(screen.getByText('25°')).toBeTruthy()
		expect(screen.getAllByText('68%').length).toBeGreaterThan(0)
		expect(screen.getByText('Nublado')).toBeTruthy()
		expect(screen.getByText('GREENWALL')).toBeTruthy()
	})

	test('should toggle more weather details when pressing "Ver más"', async () => {
		const user = userEvent.setup()

		render(<App />)

		expect(screen.queryByText('Velocidad del Viento')).not.toBeOnTheScreen()

		await user.press(screen.getByText('Ver más'))

		expect(await screen.findByText('Velocidad del Viento')).toBeOnTheScreen()

		expect(screen.getByText('Indice UV')).toBeOnTheScreen()
		expect(screen.getByText('Sensación Térmica')).toBeOnTheScreen()
	})

	test('should hide weather details when pressing "Ver menos"', async () => {
		const user = userEvent.setup()

		render(<App />)

		await user.press(screen.getByText('Ver más'))

		expect(await screen.findByText('Ver menos')).toBeOnTheScreen()

		await user.press(screen.getByText('Ver menos'))

		expect(await screen.findByText('Ver más')).toBeOnTheScreen()

		expect(screen.queryByText('Velocidad del Viento')).not.toBeOnTheScreen()
		expect(screen.queryByText('Indice UV')).not.toBeOnTheScreen()
		expect(screen.queryByText('Sensación Térmica')).not.toBeOnTheScreen()
	})

	test('should render sensors data correctly', () => {
		render(<App />)

		expect(screen.getByText('17%')).toBeOnTheScreen()
		expect(screen.getByText('34°C')).toBeOnTheScreen()
		expect(screen.getByText('26°C')).toBeOnTheScreen()
		expect(screen.getByText('2,83')).toBeOnTheScreen()
		expect(screen.getByText('08%')).toBeOnTheScreen()
	})

	test('should render forecast data correctly', () => {
		render(<App />)

		expect(screen.getByText('Viernes')).toBeOnTheScreen()
		expect(screen.getByText('20°/26°')).toBeOnTheScreen()
		expect(screen.getByText('74% Nub')).toBeOnTheScreen()

		expect(screen.getByText('Sábado')).toBeOnTheScreen()
		expect(screen.getByText('26°/29°')).toBeOnTheScreen()
		expect(screen.getByText('83% Sol')).toBeOnTheScreen()

		expect(screen.getByText('Domingo')).toBeOnTheScreen()
		expect(screen.getByText('30°/34°')).toBeOnTheScreen()
		expect(screen.getByText('88% Sol')).toBeOnTheScreen()
	})

	test('should navigate to settings screen', async () => {
		render(<App />)

		const settingsBtn = screen.getByLabelText('Go to Settings')

		expect(settingsBtn).toBeVisible()
	})

	test('should navigate to settings screen', async () => {
		render(<App />)

		const settingsBtn = screen.getByLabelText('Go to Settings')

		expect(settingsBtn).toBeVisible()
	})
})
