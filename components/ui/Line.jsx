import { View } from 'react-native'

const Line = ({ width = 1, height = 1 }) => {
	const isPercentage = (value) =>
		typeof value === 'string' && value.endsWith('%')

	if (
		(width > 1 || isPercentage(width)) &&
		(height > 1 || isPercentage(height))
	) {
		throw new Error(
			"Invalid dimensions: Only one of 'width' or 'height' can be greater than 1 or a percentage to render a line."
		)
	}

	const styles = {
		width,
		height
	}

	return <View style={styles} className='bg-foreground m-auto'></View>
}

export default Line
