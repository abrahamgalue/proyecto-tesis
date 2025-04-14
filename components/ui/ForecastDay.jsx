import { View, Text } from 'react-native'

function ForecastDay({ day, icon, temp, detail }) {
	return (
		<View className='items-center flex-1'>
			<Text className='text-foreground text-base mb-1'>{day}</Text>
			{icon}
			<Text className='text-foreground text-lg font-bold'>{temp}</Text>
			<Text className='text-foreground text-sm'>{detail}</Text>
		</View>
	)
}

export default ForecastDay
