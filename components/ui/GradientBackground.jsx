import { memo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from '@/lib/useColorScheme'
import {
	gradientStart,
	gradientEnd,
	gradientLocations,
	gradientBgColors,
	colors
} from '@/constants/colors'

const cardBaseStyle = {
	borderColor: colors.dark.border,
	borderRadius: 23,
	borderWidth: 1
}

const GradientBackground = memo(function GradientBackground({
	children,
	style,
	className,
	type = 'screen',
	...props
}) {
	const { colorScheme } = useColorScheme()
	const isCard = type !== 'screen'

	const baseStyle = style || {}

	const combinedStyles = isCard ? { ...cardBaseStyle, ...baseStyle } : baseStyle

	const gradientColorsType = gradientBgColors[type]

	const gradientProps = isCard
		? {
				start: gradientStart,
				end: gradientEnd,
				locations: gradientLocations
			}
		: {}

	return (
		<LinearGradient
			style={combinedStyles}
			className={className}
			colors={gradientColorsType[colorScheme]}
			{...gradientProps}
			{...props}
		>
			{children}
		</LinearGradient>
	)
})

export default GradientBackground
