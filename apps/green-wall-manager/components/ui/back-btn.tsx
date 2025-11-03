import { memo } from 'react'
import { Insets, TouchableOpacity } from 'react-native'
import CloseSmall from '@/components/icons/CloseSmall'
import Close from '@/components/icons/Close'

interface Props {
	small?: boolean
	className?: string
	hitSlop: Insets | number
	onPress: () => void
}

function BackBtn({ small = true, className = '', hitSlop, onPress }: Props) {
	return (
		<TouchableOpacity
			accessibilityLabel='Go Back'
			hitSlop={hitSlop}
			onPress={onPress}
			className={className}
		>
			{small ? <CloseSmall /> : <Close />}
		</TouchableOpacity>
	)
}

export default memo(BackBtn)
