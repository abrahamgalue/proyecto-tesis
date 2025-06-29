import { memo } from 'react'
import Svg, { Path, G, SvgProps } from 'react-native-svg'
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

function PHLevel({ width, height, className, color, props }: Props) {
	return (
		<Svg
			className={className}
			height={height}
			viewBox='0 0 512 512'
			width={width}
			{...props}
		>
			<G
				fill='none'
				stroke='#000'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit={10}
				strokeWidth={20}
			>
				<Path
					stroke={color}
					d='M392.575 260.985c6.947 21.24 11.04 43.438 11.04 66.257 0 96.516-79.878 174.758-178.413 174.758S46.788 423.758 46.788 327.242c0-156.679 178.413-274.189 178.413-274.189s24.635 17.058 55.597 46.226'
					data-original='#000000'
					strokeWidth={20}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
				/>
				<Path
					stroke={color}
					d='M170.088 446.501c-46.722-20.508-79.32-66.25-79.32-119.259 0-49.075 22.78-94.692 48.924-130.881m325.52-30.963c0 54.701-45.272 99.045-101.117 99.045s-101.117-44.344-101.117-99.045C262.978 76.599 364.095 10 364.095 10s101.117 70.014 101.117 155.398zM239.524 309.953v71.754m49.631-71.754v71.754m-49.631-37.108h49.631m-127.907-34.646v71.754m40.606-51.505c0 11.183-9.458 20.249-20.636 20.249-5.544 0-19.831.089-19.831.089s-.089-14.701-.089-20.338c0-4.63-.05-20.249-.05-20.249h19.97c11.178 0 20.636 9.066 20.636 20.249z'
					data-original='#000000'
					strokeWidth={20}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
				/>
			</G>
		</Svg>
	)
}

export default memo(PHLevel)
