import { View } from 'react-native'

export function GenericSkeleton({ width, height, className = '' }) {
	const styleClass =
		`bg-background-skeleton animate-pulse rounded-md ${className}`.trim()

	const style = {
		width: width,
		height: height
	}

	return <View className={styleClass} style={style} />
}
