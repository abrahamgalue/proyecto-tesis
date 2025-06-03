import { memo } from 'react'
import { View } from 'react-native'
import Day from '@/components/ui/Date/Day'
import DigitalClock from '@/components/ui/Date/DigitalClock'

const Date = memo(function Date() {
	return (
		<View className='items-end'>
			<Day />
			<DigitalClock />
		</View>
	)
})

export default Date
