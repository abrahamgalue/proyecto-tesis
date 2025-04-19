import { Image } from 'expo-image'
import { ImageBackground } from 'react-native'
import { cssInterop } from 'nativewind'

const StyledImage = cssInterop(Image, {
	className: 'style'
})

const StyledImageBackground = cssInterop(ImageBackground, {
	className: 'style'
})

export { StyledImage as Image }
export { StyledImageBackground as ImageBackground }
