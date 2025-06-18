import { memo, useMemo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import {
	TemperatureSubstrateIcon,
	WaterObstructionIcon
} from '@/components/ui/Icons/Icons'
import { colors } from '@/constants/colors'
import { Text } from '@/components/text'

function NotificationElement({ notification }) {
	const { isDarkColorScheme } = useColorScheme()

	const IconComponent = useMemo(() =>
		notification.type === 'waterObstruction'
			? WaterObstructionIcon
			: TemperatureSubstrateIcon
	)

	return (
		<View className='mb-3 flex-row items-center border-b border-foreground pb-2'>
			{IconComponent && (
				<IconComponent
					width={20}
					height={20}
					color={
						isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
					}
				/>
			)}
			<Text className='ml-3 text-foreground'>{notification.content}</Text>
		</View>
	)
}

export default memo(NotificationElement)
