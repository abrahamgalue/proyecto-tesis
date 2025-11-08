import { memo } from 'react'
import { type DimensionValue, View } from 'react-native'
import { isValidLine } from '@/lib/utils'

interface Props {
	width?: DimensionValue
	height?: DimensionValue
}

function Line({ width = 1, height = 1 }: Props) {
	isValidLine({ width, height })

	const styles = {
		width,
		height
	}

	return <View style={styles} className='bg-line-primary m-auto'></View>
}

export default memo(Line)
