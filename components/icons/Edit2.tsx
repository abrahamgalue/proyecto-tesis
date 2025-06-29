import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function Edit2(props: SvgProps) {
	return (
		<Svg width={12} height={12} fill='none' {...props}>
			<Path
				stroke='#B3B3B3'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M6 10.667h5.25M8.625 1.042a1.237 1.237 0 1 1 1.75 1.75l-7.292 7.291-2.333.584.583-2.334 7.292-7.291Z'
			/>
		</Svg>
	)
}

export default memo(Edit2)
