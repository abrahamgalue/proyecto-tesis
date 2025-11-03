import { render, screen } from '@testing-library/react-native'
import { Text } from 'react-native'
import DeviceHeader from '@/features/devices/components/list/DeviceHeader'

const mockConnectedIcon = <Text>ConnectedIcon</Text>

jest.mock('@/components/icons/Connected', () => ({
	__esModule: true,
	default: () => mockConnectedIcon
}))

const mockIcon = <Text>Icon</Text>

describe('<DeviceHeader />', () => {
	test('renders the icon, name, number, and location correctly', () => {
		render(
			<DeviceHeader
				icon={mockIcon}
				name='Router'
				num={3}
				location='Living Room'
			/>
		)

		expect(screen.getByText('Icon')).toBeOnTheScreen()
		expect(screen.getByText('ConnectedIcon')).toBeOnTheScreen()

		expect(screen.getByText('Router #3')).toBeOnTheScreen()
		expect(screen.getByText('Living Room')).toBeOnTheScreen()
	})
})
