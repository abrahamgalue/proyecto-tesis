import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function Trash(props: SvgProps) {
	return (
		<Svg width={15} height={15} fill='none' {...props}>
			<Path
				stroke='#FF5151'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M1.875 3.75h1.25m0 0h10m-10 0v8.75a1.25 1.25 0 0 0 1.25 1.25h6.25a1.25 1.25 0 0 0 1.25-1.25V3.75M5 3.75V2.5a1.25 1.25 0 0 1 1.25-1.25h2.5A1.25 1.25 0 0 1 10 2.5v1.25M6.25 6.875v3.75m2.5-3.75v3.75'
			/>
		</Svg>
	)
}

export default memo(Trash)
