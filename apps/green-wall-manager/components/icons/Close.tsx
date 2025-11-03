import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function Close(props: SvgProps) {
	return (
		<Svg width={19} height={18} fill='none' {...props}>
			<Path
				fill='#FEF7FF'
				d='M2.267 17.75.458 16l7.234-7L.458 2 2.267.25l7.233 7 7.233-7L18.542 2l-7.234 7 7.234 7-1.809 1.75-7.233-7-7.233 7Z'
			/>
		</Svg>
	)
}

export default memo(Close)
