import { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { CloseIcon, CloseSmallIcon } from '@/components/ui/Icons/Icons'

const BackBtn = memo(function BackBtn({
	small = true,
	className,
	hitSlop,
	onPress
}) {
	return (
		<TouchableOpacity hitSlop={hitSlop} onPress={onPress} className={className}>
			{small ? <CloseSmallIcon /> : <CloseIcon />}
		</TouchableOpacity>
	)
})

export default BackBtn
