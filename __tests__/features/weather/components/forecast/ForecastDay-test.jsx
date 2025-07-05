import { render, screen } from '@testing-library/react-native'
import { Text } from '@/components/ui/text'
import ForecastDay from '@/features/weather/components/forecast/ForecastDay'

const MockIcon = () => <Text>{'ICON'}</Text>

describe('<ForecastDay />', () => {
	test('should correctly render texts', () => {
		render(
			<ForecastDay
				day='Martes'
				icon={<MockIcon />}
				temp='20°/26°'
				detail='74% Nub'
			/>
		)

		expect(screen.getByRole('text', { name: 'Martes' })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: '20°/26°' })).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: '74% Nub' })).toBeOnTheScreen()
	})

	test('should render the icon', () => {
		render(
			<ForecastDay
				day='Martes'
				icon={<MockIcon />}
				temp='20°/26°'
				detail='74% Nub'
			/>
		)

		expect(screen.getByRole('text', { name: 'ICON' })).toBeOnTheScreen()
	})
})
