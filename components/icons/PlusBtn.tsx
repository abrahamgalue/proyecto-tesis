import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function PlusBtn(props: SvgProps) {
	return (
		<Svg width={55} height={61} fill='none' {...props}>
			<Path
				stroke='#fff'
				strokeWidth={3}
				d='M24.632 2.94a6.5 6.5 0 0 1 6.118.205l18.815 10.863.369.228a6.5 6.5 0 0 1 2.881 5.4v21.727a6.5 6.5 0 0 1-2.881 5.4l-.369.23L30.75 57.854a6.5 6.5 0 0 1-6.117.205l-.383-.205L5.435 46.992a6.5 6.5 0 0 1-3.25-5.629V19.637a6.5 6.5 0 0 1 3.25-5.63L24.25 3.146l.382-.205Z'
			/>
			<Path
				stroke='#fff'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={3}
				d='M27 24v14m-7-7h14'
			/>
		</Svg>
	)
}

export default memo(PlusBtn)
