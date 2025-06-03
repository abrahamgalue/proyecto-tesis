import { render, screen } from '@testing-library/react-native'
import {
	FloorTempIcon,
	SunCloud,
	SunCloudSmall,
	Sunny,
	WaterLevel,
	AccountCircleIcon,
	PhoneControlIcon,
	HumidityIcon,
	TemperatureSubstrateIcon,
	WaterObstructionIcon,
	PHLevelIcon
} from '@/components/ui/Icons/Icons'

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
			name: 'FloorTempIcon',
			Component: FloorTempIcon
		},
		{
			name: 'WaterLevel',
			Component: WaterLevel
		},
		{
			name: 'AccountCircleIcon',
			Component: AccountCircleIcon
		},
		{
			name: 'PhoneControlIcon',
			Component: PhoneControlIcon
		},
		{
			name: 'HumidityIcon',
			Component: HumidityIcon
		},
		{
			name: 'TemperatureSubstrateIcon',
			Component: TemperatureSubstrateIcon
		},
		{
			name: 'WaterObstructionIcon',
			Component: WaterObstructionIcon
		},
		{
			name: 'PHLevelIcon',
			Component: PHLevelIcon
		}
	]

	test.each(tableOfIcons)('$name should render correctly', ({ Component }) => {
		render(<Component {...commonProps} />)

		expect(screen.root).toBeOnTheScreen()
	})

	test.each(tableOfIcons)(
		'$name should receive props correctly',
		({ Component }) => {
			render(<Component {...commonProps} />)

			expect(screen.root).toHaveStyle({ width: 100, height: 100 })
		}
	)
})
