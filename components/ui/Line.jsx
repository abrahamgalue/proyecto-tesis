import { memo } from 'react'
import { View } from 'react-native'
import { isValidLine } from '@/lib/utils'

function Line({ width = 1, height = 1 }) {
	isValidLine({ width, height })

	const styles = {
		width,
		height
	}

	return <View style={styles} className='bg-line-primary m-auto'></View>
}

export default memo(Line)
