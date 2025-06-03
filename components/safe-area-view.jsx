import { memo } from 'react'
import { cssInterop } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'

const StyledSafeAreaView = memo(
	cssInterop(SafeAreaView, {
		className: 'style'
	})
)

export { StyledSafeAreaView as SafeAreaView }
