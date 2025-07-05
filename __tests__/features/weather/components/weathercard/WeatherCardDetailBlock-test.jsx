import { render, screen } from '@testing-library/react-native'
import { Text } from '@/components/ui/text'
import WeatherCardDetailBlock from '@/features/weather/components/weathercard/WeatherCardDetailBlock'

const MockIcon = () => <Text>{'ICON'}</Text>

describe('<WeatherCardDetailBlock />', () => {
	test('should render information', () => {
		render(
			<WeatherCardDetailBlock
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
			<WeatherCardDetailBlock
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
			<WeatherCardDetailBlock
				icon={<MockIcon />}
				label='Indice UV'
				value='6'
				unit='Alto'
			/>
		)

		expect(screen.getByRole('text', { name: 'ICON' })).toBeOnTheScreen()
	})
})
