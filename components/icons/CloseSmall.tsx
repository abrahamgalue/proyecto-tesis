import { memo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind'

cssInterop(Svg, {
	className: {
		target: 'style',
		nativeStyleToProp: { width: true, height: true }
	}
})

function CloseSmall(props: SvgProps) {
	return (
		<Svg width={14} height={14} fill='none' {...props}>
			<Path
				fill='#0C6971'
				d='M1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0 14 1.4 8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14Z'
			/>
		</Svg>
	)
}

export default memo(CloseSmall)
