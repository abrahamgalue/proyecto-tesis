import { memo, useMemo } from 'react'
import { View } from 'react-native'
import { getTextSize } from '@/lib/utils'
import { Text } from '@/components/text'

const WeatherCardDetailBlock = memo(function WeatherCardDetailBlock({
	icon,
	label,
	value,
	unit,
	isLargeText
}) {
	const { className: unitTextSize, displayUnit: newUnit } = useMemo(() =>
		getTextSize({
			isLargeText,
			unit
		})
	)

	return (
		<View className='flex flex-row justify-between py-2 px-4 w-full h-20 rounded-2xl border border-border'>
			<View className='flex flex-row items-center justify-start flex-[4]'>
				{icon}
				<Text className='text-foreground ml-1'>{label}</Text>
			</View>
			<View className='flex flex-row items-center flex-[2]'>
				<View className='flex items-end flex-row'>
					<Text className='text-foreground font-bold text-4xl h-8 mr-1'>
						{value}
					</Text>
					<Text className={`text-foreground ${unitTextSize}`}>{newUnit}</Text>
				</View>
			</View>
		</View>
	)
})

export default WeatherCardDetailBlock
