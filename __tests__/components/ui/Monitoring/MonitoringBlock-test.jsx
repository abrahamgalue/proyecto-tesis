import { render, screen } from '@testing-library/react-native'
import { Text } from '@/components/text'
import MonitoringBlock from '@/components/ui/Monitoring/MonitoringBlock'

const MockIcon = () => <Text>{'ICON'}</Text>

describe('<MonitoringBlock />', () => {
	test('should render information', () => {
		render(
			<MonitoringBlock icon={<MockIcon />} value='60%' label='Nivel de Agua' />
		)

		expect(screen.getByRole('text', { name: '60%' })).toBeOnTheScreen()
		expect(
			screen.getByRole('text', { name: 'Nivel de Agua' })
		).toBeOnTheScreen()
	})

	test('should render the icon', () => {
		render(
			<MonitoringBlock
				icon={<MockIcon />}
				value='20°C'
				label='Temperatura del sustrato'
			/>
		)

		expect(screen.getByRole('text', { name: 'ICON' })).toBeOnTheScreen()
	})
})
