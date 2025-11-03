import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function EditBtn(props: SvgProps) {
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
				strokeWidth={2}
				d='M27 22h-7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7m-1.5-10.5a2.121 2.121 0 0 1 3 3L28 33l-4 1 1-4 9.5-9.5Z'
			/>
		</Svg>
	)
}

export default memo(EditBtn)
