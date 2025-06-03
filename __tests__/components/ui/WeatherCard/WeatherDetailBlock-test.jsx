import { render, screen } from '@testing-library/react-native'
import { Text } from '@/components/text'
import WeatherDetailBlock from '@/components/ui/WeatherCard/WeatherCardDetailBlock'

const MockIcon = () => <Text>{'ICON'}</Text>

describe('<WeatherDetailBlock />', () => {
	test('should render information', () => {
		render(
			<WeatherDetailBlock
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
			<WeatherDetailBlock
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
			<WeatherDetailBlock
				icon={<MockIcon />}
				label='Indice UV'
				value='6'
				unit='Alto'
			/>
		)

		expect(screen.getByRole('text', { name: 'ICON' })).toBeOnTheScreen()
	})
})
