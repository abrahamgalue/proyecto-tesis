import { memo, useMemo } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export const IconSymbol = memo(function IconSymbol({
	name,
	size = 24,
	color,
	style,
	className,
	family = 'MaterialIcons'
}) {
	const IconComponent = useMemo(() =>
		family === 'MaterialCommunityIcons' ? MaterialCommunityIcons : MaterialIcons
	)

	return (
		<IconComponent
			color={color}
			size={size}
			name={name}
			style={style}
			className={className}
		/>
	)
})
