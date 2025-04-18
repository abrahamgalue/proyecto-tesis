import { Text, StyleSheet } from 'react-native'

const CustomText = ({ style, ...props }) => {
	return <Text style={[styles.text, style]} {...props} />
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Inter'
	}
})

export { CustomText as Text }
