import { cn } from '@/lib/utils'
import { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '@/components/text'

const FilterButton = memo(function FilterButton({
	children,
	isActive,
	onPress,
	hitSlop
}) {
	return (
		<TouchableOpacity
			hitSlop={hitSlop}
			onPress={onPress}
			className={cn(
				'w-24 items-center justify-center rounded-3xl border-border px-2',
				{ 'border-4': isActive, border: !isActive }
			)}
		>
			<Text className='text-foreground'>{children}</Text>
		</TouchableOpacity>
	)
})

export default FilterButton
