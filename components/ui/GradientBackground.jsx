import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from '@/hooks/useColorScheme'
import { cardBaseStyle } from '@/constants/style'
import {
	gradientStart,
	gradientEnd,
	gradientLocations,
	gradientBgColors
} from '@/constants/colors'

function GradientBackground({
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
}

export default GradientBackground
