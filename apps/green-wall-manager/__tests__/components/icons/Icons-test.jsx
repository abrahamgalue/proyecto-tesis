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
import Bomb from '@/components/icons/Bomb'
import ChevronDown from '@/components/icons/ChevronDown'
import Close from '@/components/icons/Close'
import CloseSmall from '@/components/icons/CloseSmall'
import Connected from '@/components/icons/Connected'
import DeleteBtn from '@/components/icons/DeleteBtn'
import Disconnected from '@/components/icons/Disconnected'
import Edit from '@/components/icons/Edit'
import Edit2 from '@/components/icons/Edit2'
import EditBtn from '@/components/icons/EditBtn'
import LightBulb from '@/components/icons/LightBulb'
import PlusBtn from '@/components/icons/PlusBtn'
import Settings from '@/components/icons/Settings'
import Trash from '@/components/icons/Trash'
import Sun from '@/components/icons/Sun'
import ThermalSensation from '@/components/icons/ThermalSensation'
import Wind from '@/components/icons/Wind'
import Rainy from '@/components/icons/Rainy'

describe('Icons', () => {
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
		},
		{
			name: 'Bomb',
			Component: Bomb
		},
		{
			name: 'ChevronDown',
			Component: ChevronDown
		},
		{
			name: 'Close',
			Component: Close
		},
		{
			name: 'CloseSmall',
			Component: CloseSmall
		},
		{
			name: 'Connected',
			Component: Connected
		},
		{
			name: 'DeleteBtn',
			Component: DeleteBtn
		},
		{
			name: 'Disconnected',
			Component: Disconnected
		},
		{
			name: 'Edit',
			Component: Edit
		},
		{
			name: 'Edit2',
			Component: Edit2
		},
		{
			name: 'EditBtn',
			Component: EditBtn
		},
		{
			name: 'LightBulb',
			Component: LightBulb
		},
		{
			name: 'PlusBtn',
			Component: PlusBtn
		},
		{
			name: 'Settings',
			Component: Settings
		},
		{
			name: 'Trash',
			Component: Trash
		},
		{
			name: 'Sun',
			Component: Sun
		},
		{
			name: 'ThermalSensation',
			Component: ThermalSensation
		},
		{
			name: 'Wind',
			Component: Wind
		},
		{
			name: 'Rainy',
			Component: Rainy
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

			expect(screen.root).toHaveProp('width')
			expect(screen.root).toHaveProp('height')
		}
	)
})
