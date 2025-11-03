import { memo } from 'react'
import Svg, { Path, Defs, G, ClipPath, SvgProps } from 'react-native-svg'
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
	className?: string
	color: string
	props?: SvgProps
}

function TemperatureSubstrate({
	width,
	height,
	className,
	color,
	props
}: Props) {
	return (
		<Svg
			width={width}
			height={height}
			className={className}
			viewBox='0 0 682.667 682.667'
			{...props}
		>
			<Defs>
				<ClipPath id='a'>
					<Path d='M0 512h512V0H0Z' data-original='#000000' />
				</ClipPath>
			</Defs>
			<G
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit={10}
				strokeWidth={30}
				clipPath='url(#a)'
				transform='matrix(1.33333 0 0 -1.33333 0 682.667)'
			>
				<Path
					d='M0 0h-482v18.515C-482 41.427-463.427 60-440.515 60h399.03C-18.573 60 0 41.427 0 18.515Z'
					data-original='#000000'
					strokeWidth={30}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
					strokeDasharray='none'
					strokeOpacity={1}
					transform='translate(497 15)'
				/>
				<Path
					d='M0 0c0-46.163-49.913-83.586-49.913-83.586S-99.825-46.163-99.825 0c0 46.164 49.912 83.586 49.912 83.586S0 46.164 0 0Z'
					data-original='#000000'
					strokeWidth={30}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
					strokeDasharray='none'
					strokeOpacity={1}
					transform='translate(259.913 413.414)'
				/>
				<Path
					d='M0 0c32.643-32.643 23.811-94.398 23.811-94.398s-61.756-8.832-94.398 23.811c-32.642 32.642-23.811 94.398-23.811 94.398S-32.643 32.642 0 0z'
					data-original='#000000'
					strokeWidth={30}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
					strokeDasharray='none'
					strokeOpacity={1}
					transform='translate(130.487 298.767)'
				/>
				<Path
					d='M0 0v-254.828'
					data-original='#000000'
					strokeWidth={30}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
					strokeDasharray='none'
					strokeOpacity={1}
					transform='translate(210 329.828)'
				/>
				<Path
					d='m0 0 55.703-55.702'
					data-original='#000000'
					strokeWidth={30}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
					strokeDasharray='none'
					strokeOpacity={1}
					transform='translate(154.297 204.368)'
				/>
				<Path
					d='M0 0c0-16.568-13.431-30-30-30-16.568 0-30 13.432-30 30 0 16.568 13.432 30 30 30C-13.431 30 0 16.568 0 0Z'
					data-original='#000000'
					strokeWidth={30}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
					strokeDasharray='none'
					strokeOpacity={1}
					transform='translate(417.002 225)'
				/>
				<Path
					d='M0 0c.271-49.16-39.544-89.804-88.699-90.497-50.295-.71-91.3 39.848-91.3 89.991 0 26.66 11.59 50.61 30 67.069v144.931c0 33.137 26.863 60 60 60 33.138 0 60-26.863 60-60V66.563C-11.705 50.208-.146 26.457 0 0Z'
					data-original='#000000'
					strokeWidth={30}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
					strokeDasharray='none'
					strokeOpacity={1}
					transform='translate(476.998 225.506)'
				/>
				<Path
					d='M0 0v182'
					data-original='#000000'
					strokeWidth={30}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit={10}
					strokeDasharray='none'
					strokeOpacity={1}
					transform='translate(387.002 255)'
				/>
			</G>
		</Svg>
	)
}

export default memo(TemperatureSubstrate)
