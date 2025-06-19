import { memo } from 'react'
import { Pressable } from 'react-native'
import { Text } from '@/components/text'

function AcceptBtn({ onPress }) {
	return (
		<Pressable
			accessibilityRole='button'
			className='absolute -bottom-5 w-[70%] rounded-full bg-border p-4'
			onPress={onPress}
		>
			<Text className='text-center text-foreground'>Aceptar</Text>
		</Pressable>
	)
}

export default memo(AcceptBtn)
