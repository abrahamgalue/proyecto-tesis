import { memo, useMemo } from 'react'
import { View } from 'react-native'
import { getTextSize } from '@/lib/utils'
import { Text } from '@/components/ui/text'

function WeatherCardDetailBlock({ icon, label, value, unit, isLargeText }) {
	const { className: unitTextSize, displayUnit: newUnit } = useMemo(() =>
		getTextSize({
			isLargeText,
			unit
		})
	)

	return (
		<View className='flex h-20 w-full flex-row justify-between rounded-2xl border border-primary px-4 py-2'>
			<View className='flex flex-[4] flex-row items-center justify-start'>
				{icon}
				<Text className='ml-1 text-foreground-primary'>{label}</Text>
			</View>
			<View className='flex flex-[2] flex-row items-center'>
				<View className='flex flex-row items-end'>
					<Text className='mr-1 h-8 text-4xl font-bold text-foreground-primary'>
						{value}
					</Text>
					<Text className={`text-foreground-primary ${unitTextSize}`}>
						{newUnit}
					</Text>
				</View>
			</View>
		</View>
	)
}

export default memo(WeatherCardDetailBlock)
