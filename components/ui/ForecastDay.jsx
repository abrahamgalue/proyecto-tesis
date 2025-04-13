import { View, Text } from 'react-native'
import { IconSymbol } from './IconSymbol'
import { useColorScheme } from '@/lib/useColorScheme'
import { colors } from '@/constants/colors'

function ForecastDay({ day, icon, temp, detail }) {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<View className='items-center flex-1'>
			<Text className='text-foreground text-base mb-1'>{day}</Text>
			<IconSymbol
				name={icon}
				size={34}
				color={
					isDarkColorScheme ? colors.dark.baseIcons : colors.light.baseIcons
				}
				className='my-1'
			/>
			<Text className='text-foreground text-lg font-bold'>{temp}</Text>
			<Text className='text-foreground text-sm'>{detail}</Text>
		</View>
	)
}

export default ForecastDay
