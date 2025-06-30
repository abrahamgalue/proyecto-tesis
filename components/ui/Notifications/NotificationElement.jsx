import { memo, useMemo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import WaterObstruction from '@/components/icons/WaterObstruction'
import TemperatureSubstrate from '@/components/icons/TemperatureSubstrate'
import { colors } from '@/constants/colors'
import { Text } from '@/components/ui/text'

function NotificationElement({ notification }) {
	const { isDarkColorScheme } = useColorScheme()

	const IconComponent = useMemo(() =>
		notification.type === 'waterObstruction'
			? WaterObstruction
			: TemperatureSubstrate
	)

	return (
		<View className='mb-3 flex-row items-center border-b border-secondary pb-2'>
			{IconComponent && (
				<IconComponent
					width={20}
					height={20}
					color={
						isDarkColorScheme
							? colors.dark.textForegroundPrimary
							: colors.light.textForegroundPrimary
					}
				/>
			)}
			<Text className='ml-3 text-foreground-primary'>
				{notification.content}
			</Text>
		</View>
	)
}

export default memo(NotificationElement)
