import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

interface Props {
	color: string
	props: SvgProps
}

function ChevronDown({ color, props }: Props) {
	return (
		<Svg
			width={24}
			height={24}
			fill='none'
			stroke={color}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			className='icon icon-tabler icons-tabler-outline icon-tabler-chevron-down'
			{...props}
		>
			<Path stroke='none' d='M0 0h24v24H0z' />
			<Path d='m6 9 6 6 6-6' />
		</Svg>
	)
}

export default memo(ChevronDown)
