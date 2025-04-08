import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'

const MAPPING = {
	'house.fill': 'home',
	settings: 'settings',
	visibility: 'visibility',
	'visibility-off': 'visibility-off'
}

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({ name, size = 24, color, style, className }) {
	return (
		<MaterialIcons
			color={color}
			size={size}
			name={MAPPING[name]}
			style={style}
			className={className}
		/>
	)
}
