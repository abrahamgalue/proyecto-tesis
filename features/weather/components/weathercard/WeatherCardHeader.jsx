import { memo } from 'react'
import { View } from 'react-native'
import SunCloud from '@/components/icons/SunCloud'
import Date from '@/components/date'

function WeatherCardHeader() {
	return (
		<View className='flex-row items-center justify-between'>
			<SunCloud />
			<Date />
		</View>
	)
}

export default memo(WeatherCardHeader)
