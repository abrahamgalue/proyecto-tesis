import { memo } from 'react'
import { View } from 'react-native'
import { SunCloud } from '@/components/ui/Icons/Icons'
import Date from '@/components/ui/Date/Date'

const WeatherCardHeader = memo(function WeatherCardHeader() {
	return (
		<View className='flex-row justify-between items-center'>
			<SunCloud />
			<Date />
		</View>
	)
})

export default WeatherCardHeader
