import { memo, type ReactNode } from 'react'
import { Text, StyleSheet, TextStyle, type StyleProp } from 'react-native'

interface Props {
	children: ReactNode
	style?: StyleProp<TextStyle>
	className?: string
}

const CustomText = memo(function CustomText({
	style = [],
	className = '',
	...props
}: Props) {
	return <Text style={[styles.text, style]} className={className} {...props} />
})

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Inter'
	}
})

export { CustomText as Text }
