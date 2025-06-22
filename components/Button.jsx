import { TouchableOpacity } from 'react-native'
import { cn } from '@/lib/utils'
import { Text } from '@/components/text'

function Button({
	title,
	children,
	className,
	onPress,
	textClassName,
	...props
}) {
	const stylesClass = cn('w-full rounded-full bg-[#0C6971] p-4', className)
	const stylesText = cn('text-center text-foreground', textClassName)

	return (
		<TouchableOpacity
			accessibilityRole='button'
			className={stylesClass}
			onPress={onPress}
			{...props}
		>
			{children ? children : <Text className={stylesText}>{title}</Text>}
		</TouchableOpacity>
	)
}

export default Button
