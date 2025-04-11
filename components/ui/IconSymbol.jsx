import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export function IconSymbol({
	name,
	size = 24,
	color,
	style,
	className,
	family = 'MaterialIcons'
}) {
	const IconComponent =
		family === 'MaterialCommunityIcons' ? MaterialCommunityIcons : MaterialIcons

	return (
		<IconComponent
			color={color}
			size={size}
			name={name}
			style={style}
			className={className}
		/>
	)
}
