import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'

function ForecastDay({ day, icon, temp, detail }) {
	return (
		<View className='flex-1 items-center'>
			<Text className='text-foreground-primary mb-1 text-base'>{day}</Text>
			{icon}
			<Text className='text-foreground-primary text-lg font-bold'>{temp}</Text>
			<Text className='text-foreground-primary text-sm'>{detail}</Text>
		</View>
	)
}

export default memo(ForecastDay)
