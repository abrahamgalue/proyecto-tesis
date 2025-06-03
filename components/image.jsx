import { memo } from 'react'
import { Image } from 'expo-image'
import { ImageBackground } from 'react-native'
import { cssInterop } from 'nativewind'

const StyledImage = memo(
	cssInterop(Image, {
		className: 'style'
	})
)

const StyledImageBackground = memo(
	cssInterop(ImageBackground, {
		className: 'style'
	})
)

export { StyledImage as Image }
export { StyledImageBackground as ImageBackground }
