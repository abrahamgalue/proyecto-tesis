import { render, screen } from '@testing-library/react-native'
import { Text } from '@/components/text'
import WeatherDetail from '@/components/ui/WeatherDetail'

const MockIcon = () => <Text>{'ICON'}</Text>

describe('<WeatherDetail />', () => {
	test('should render information', () => {
		render(
			<WeatherDetail
				icon={<MockIcon />}
				label='Indice UV'
				value='6'
				unit='Alto'
			/>
		)

		expect(screen.getByRole('text', { name: 'Indice UV' })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: '6' })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: 'Alto' })).toBeOnTheScreen()
	})

	test('should render large texts', () => {
		render(
			<WeatherDetail
				icon={<MockIcon />}
				label='Sensación Térmica'
				value='47'
				unit='°C'
				isLargeText={true}
			/>
		)

		expect(
			screen.getByRole('text', { name: 'Sensación Térmica' })
		).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: '47' })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: '°C' })).toBeOnTheScreen()
	})

	test('should render the icon', () => {
		render(
			<WeatherDetail
				icon={<MockIcon />}
				label='Indice UV'
				value='6'
				unit='Alto'
			/>
		)

		expect(screen.getByRole('text', { name: 'ICON' })).toBeOnTheScreen()
	})
})
