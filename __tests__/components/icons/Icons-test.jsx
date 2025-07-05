import { render, screen } from '@testing-library/react-native'
import SunCloud from '@/components/icons/SunCloud'
import SunCloudSmall from '@/components/icons/SunCloudSmall'
import Sunny from '@/components/icons/Sunny'
import FloorTemp from '@/components/icons/FloorTemp'
import WaterLevel from '@/components/icons/WaterLevel'
import AccountCircle from '@/components/icons/AccountCircle'
import PhoneControl from '@/components/icons/PhoneControl'
import Humidity from '@/components/icons/Humidity'
import TemperatureSubstrate from '@/components/icons/TemperatureSubstrate'
import WaterObstruction from '@/components/icons/WaterObstruction'
import PHLevel from '@/components/icons/PHLevel'

describe('<Icons />', () => {
	const commonProps = {
		width: 100,
		height: 100,
		color: 'rebeccapurple',
		className: 'test-icon'
	}

	const tableOfIcons = [
		{
			name: 'SunCloud',
			Component: SunCloud
		},
		{
			name: 'SunCloudSmall',
			Component: SunCloudSmall
		},
		{
			name: 'Sunny',
			Component: Sunny
		},
		{
			name: 'FloorTemp',
			Component: FloorTemp
		},
		{
			name: 'WaterLevel',
			Component: WaterLevel
		},
		{
			name: 'AccountCircle',
			Component: AccountCircle
		},
		{
			name: 'PhoneControl',
			Component: PhoneControl
		},
		{
			name: 'Humidity',
			Component: Humidity
		},
		{
			name: 'TemperatureSubstrate',
			Component: TemperatureSubstrate
		},
		{
			name: 'WaterObstruction',
			Component: WaterObstruction
		},
		{
			name: 'PHLevel',
			Component: PHLevel
		}
	]

	test.each(tableOfIcons)(
		'$name icon should render correctly',
		({ Component }) => {
			render(<Component {...commonProps} />)

			expect(screen.root).toBeOnTheScreen()
		}
	)

	test.each(tableOfIcons)(
		'$name should receive props correctly',
		({ Component }) => {
			render(<Component {...commonProps} />)

			expect(screen.root).toHaveStyle({ width: 100, height: 100 })
		}
	)
})
