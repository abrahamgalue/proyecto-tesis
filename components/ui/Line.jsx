import { memo } from 'react'
import { View } from 'react-native'
import { isValidLine } from '@/lib/utils'

const Line = memo(function Line({ width = 1, height = 1 }) {
	isValidLine({ width, height })

	const styles = {
		width,
		height
	}

	return <View style={styles} className='bg-foreground m-auto'></View>
})

export default Line
