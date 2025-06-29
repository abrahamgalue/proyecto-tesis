import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function Edit(props: SvgProps) {
	return (
		<Svg width={44} height={44} fill='none' {...props}>
			<Path
				stroke='#0FB1FF'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={4}
				d='M32 4a5.657 5.657 0 0 1 8 8L13 39 2 42l3-11L32 4Z'
			/>
		</Svg>
	)
}

export default memo(Edit)
