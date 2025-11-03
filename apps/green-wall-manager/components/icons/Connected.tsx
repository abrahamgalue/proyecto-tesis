import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function Connected(props: SvgProps) {
	return (
		<Svg width={22} height={17} fill='none' {...props}>
			<Path
				stroke='#0FB1FF'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M4.583 8.504a10.083 10.083 0 0 1 12.907 0M1.302 5.25a14.667 14.667 0 0 1 19.396 0M7.82 11.768a5.5 5.5 0 0 1 6.371 0M11 15.333h.01'
			/>
		</Svg>
	)
}

export default memo(Connected)
