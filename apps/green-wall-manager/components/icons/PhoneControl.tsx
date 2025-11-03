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
	width: number
	height: number
	className: string
	color: string
	props: SvgProps
}

function PhoneControl({ width, height, className, color, props }: Props) {
	return (
		<Svg
			className={className}
			fill='none'
			height={height}
			viewBox='0 0 18 22'
			width={width}
			{...props}
		>
			<Path
				fill={color}
				d='M2 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 0 20V2C0 1.45.196.98.588.587A1.926 1.926 0 0 1 2 0h10c.55 0 1.02.196 1.412.588C13.804.979 14 1.45 14 2v4h-2V5H2v12h10v-1h2v4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22H2Zm0-3v1h10v-1H2Zm8.95-4L6.7 10.75l1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4L10.95 15ZM2 3h10V2H2v1Z'
			/>
		</Svg>
	)
}

export default memo(PhoneControl)
