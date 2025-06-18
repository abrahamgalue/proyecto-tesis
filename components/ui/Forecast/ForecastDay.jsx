import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'

function ForecastDay({ day, icon, temp, detail }) {
	return (
		<View className='flex-1 items-center'>
			<Text className='mb-1 text-base text-foreground'>{day}</Text>
			{icon}
			<Text className='text-lg font-bold text-foreground'>{temp}</Text>
			<Text className='text-sm text-foreground'>{detail}</Text>
		</View>
	)
}

export default memo(ForecastDay)
