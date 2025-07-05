import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'

function ForecastDay({ day, icon, temp, detail }) {
	return (
		<View className='flex-1 items-center'>
			<Text className='mb-1 text-base text-foreground-primary'>{day}</Text>
			{icon}
			<Text className='text-lg font-bold text-foreground-primary'>{temp}</Text>
			<Text className='text-sm text-foreground-primary'>{detail}</Text>
		</View>
	)
}

export default memo(ForecastDay)
