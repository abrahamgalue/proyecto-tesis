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

function FloorTemp({ width, height, className, color, props }: Props) {
	return (
		<Svg
			className={className}
			fill={color}
			height={height}
			viewBox='0 0 128 128'
			width={width}
			{...props}
		>
			<Path
				fillRule='evenodd'
				d='M64 22a5 5 0 0 0-5 5v38.296a3.042 3.042 0 0 1-1.421 2.564A11.99 11.99 0 0 0 52 78c0 6.627 5.373 12 12 12s12-5.373 12-12a11.99 11.99 0 0 0-5.579-10.14A3.044 3.044 0 0 1 69 65.297V27a5 5 0 0 0-5-5zm-9 5a9 9 0 1 1 18 0v25h20.79c8.849 0 16.21 7.334 16.21 16.21V100c0 5.523-4.477 10-10 10H28c-5.523 0-10-4.477-10-10V68.21C18 59.361 25.334 52 34.21 52H55zm18 37.77V56h20.79c6.743 0 12.21 5.467 12.21 12.21a1.79 1.79 0 0 1-1.789 1.79H77.859A16.08 16.08 0 0 0 73 64.77zM104.211 74c.624 0 1.225-.099 1.789-.282V100a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6V73.718a5.784 5.784 0 0 0 1.79.282h24.714A16.026 16.026 0 0 0 48 78c0 8.837 7.163 16 16 16s16-7.163 16-16a16.03 16.03 0 0 0-.504-4zM23.79 70A1.79 1.79 0 0 1 22 68.21C22 61.467 27.467 56 34.21 56H55v8.77A16.08 16.08 0 0 0 50.14 70zM34 82a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm60 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM41 20a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4zm-2 13a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4h-6a2 2 0 0 1-2-2zm2 9a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4zm23 39a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-7-3a7 7 0 1 0 14 0 7 7 0 0 0-14 0zm-9 19a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm39 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z'
				clipRule='evenodd'
				data-original='#000000'
			/>
		</Svg>
	)
}

export default memo(FloorTemp)
