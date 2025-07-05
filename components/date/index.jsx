import { View } from 'react-native'
import { cn } from '@/lib/utils'
import Day from '@/components/date/Day'
import DigitalClock from '@/components/date/DigitalClock'

function Date({ className = '' }) {
	const styles = cn('items-end', className)

	return (
		<View className={styles}>
			<Day />
			<DigitalClock />
		</View>
	)
}

export default Date
