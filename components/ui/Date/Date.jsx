import { memo } from 'react'
import { View } from 'react-native'
import { cn } from '@/lib/utils'
import Day from '@/components/ui/Date/Day'
import DigitalClock from '@/components/ui/Date/DigitalClock'

const Date = memo(function Date({ className = '' }) {
	const styles = cn('items-end', className)

	return (
		<View className={styles}>
			<Day />
			<DigitalClock />
		</View>
	)
})

export default Date
