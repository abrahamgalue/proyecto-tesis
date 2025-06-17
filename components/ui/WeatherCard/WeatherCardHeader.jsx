import { memo } from 'react'
import { View } from 'react-native'
import { SunCloud } from '@/components/ui/Icons/Icons'
import Date from '@/components/ui/Date/Date'

function WeatherCardHeader() {
	return (
		<View className='flex-row items-center justify-between'>
			<SunCloud />
			<Date />
		</View>
	)
}

export default memo(WeatherCardHeader)
