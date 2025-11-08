import { memo } from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function Rainy(props: SvgProps) {
	return (
		<Svg width={37} height={37} fill='none' {...props}>
			<G clipPath='url(#a)'>
				<Path
					stroke='#9C9C9C'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M24.667 20.042v12.333M12.333 20.042v12.333m6.167-9.25v12.333m12.333-9.897a7.709 7.709 0 0 0-3.083-14.77h-1.942a12.333 12.333 0 1 0-19.641 12.72'
				/>
			</G>
			<Defs>
				<ClipPath id='a'>
					<Path fill='#fff' d='M0 0h37v37H0z' />
				</ClipPath>
			</Defs>
		</Svg>
	)
}

export default memo(Rainy)
