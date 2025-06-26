import { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { useShowNotifications } from '@/store/notificationsStore'
import { useColorScheme } from '@/lib/useColorScheme'
import { Text } from '@/components/text'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'
import { colors } from '@/constants/colors'

function ShowMoreBtn({ isShow, handleShow }) {
	const showNotifications = useShowNotifications()
	const { isDarkColorScheme } = useColorScheme()

	return (
		<TouchableOpacity
			onPress={handleShow}
			className='flex-row items-center justify-center p-2'
			disabled={showNotifications}
		>
			<Text className='text-foreground-primary'>
				Ver {isShow ? 'menos' : 'más'}
			</Text>
			<IconSymbol
				name={isShow ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
				size={16}
				color={
					isDarkColorScheme
						? colors.dark.textForegroundPrimary
						: colors.light.textForegroundPrimary
				}
			/>
		</TouchableOpacity>
	)
}

export default memo(ShowMoreBtn)
