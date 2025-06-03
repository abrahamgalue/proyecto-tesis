import { memo } from 'react'
import { Text, StyleSheet } from 'react-native'

const CustomText = memo(function CustomText({ style, ...props }) {
	return <Text style={[styles.text, style]} {...props} />
})

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Inter'
	}
})

export { CustomText as Text }
