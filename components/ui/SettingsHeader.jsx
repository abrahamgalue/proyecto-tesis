import { memo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import { AccountCircleIcon } from '@/components/ui/Icons/Icons'
import { colors } from '@/constants/colors'
import { Text } from '@/components/text'

function SettingsHeader() {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<View className='h-24 w-full flex-row items-center gap-2 rounded-t-3xl bg-to-gradient px-6'>
			<AccountCircleIcon
				width={33}
				height={33}
				color={
					isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
				}
			/>
			<Text className='text-white'>Abraham Galue</Text>
		</View>
	)
}

export default memo(SettingsHeader)
