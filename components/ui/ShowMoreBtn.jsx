import { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import { Text } from '@/components/text'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'
import { colors } from '@/constants/colors'

const ShowMoreBtn = memo(function ShowMoreBtn({ isShow, handleShow }) {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<TouchableOpacity
			onPress={handleShow}
			className='flex-row justify-center items-center p-2'
		>
			<Text className='text-foreground'>Ver {isShow ? 'menos' : 'más'}</Text>
			<IconSymbol
				name={isShow ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
				size={16}
				color={
					isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
				}
			/>
		</TouchableOpacity>
	)
})

export default ShowMoreBtn
