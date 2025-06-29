import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function Disconnected(props: SvgProps) {
	return (
		<Svg width={22} height={22} fill='none' {...props}>
			<Path
				stroke='#3F6070'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='m.917.917 20.166 20.166m-5.756-10.945c.75.367 1.453.826 2.09 1.366m-12.834 0a10.028 10.028 0 0 1 4.74-2.19m.494-4.685A14.666 14.666 0 0 1 20.698 8.25m-19.396 0A14.584 14.584 0 0 1 5.61 5.61m2.21 9.158a5.5 5.5 0 0 1 6.37 0M11 18.332h.01'
			/>
		</Svg>
	)
}

export default memo(Disconnected)
