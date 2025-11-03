import { render, screen, userEvent } from '@testing-library/react-native'
import * as useWeatherDataHook from '@/features/weather/hooks/useWeatherData'
import * as useSensorDataHook from '@/features/weather/hooks/useSensorData'
import App from '@/app/(protected)/index'

jest.mock('expo-font')

jest.mock('@/config/supabase')

jest.mock('@react-native-async-storage/async-storage', () =>
	require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

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

describe('App Component', () => {
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

	test('should render weather data correctly', () => {
		render(<App />)

		expect(screen.getByText('25°')).toBeTruthy()
		expect(screen.getAllByText('68%').length).toBeGreaterThan(0)
		expect(screen.getByText('Nublado')).toBeTruthy()
		expect(screen.getByText('Martes')).toBeTruthy()
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
