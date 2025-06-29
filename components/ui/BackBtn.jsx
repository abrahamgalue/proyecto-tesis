import { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import CloseSmall from '@/components/icons/CloseSmall'
import Close from '@/components/icons/Close'

function BackBtn({ small = true, className, hitSlop, onPress }) {
	return (
		<TouchableOpacity hitSlop={hitSlop} onPress={onPress} className={className}>
			{small ? <CloseSmall /> : <Close />}
		</TouchableOpacity>
	)
}

export default memo(BackBtn)
