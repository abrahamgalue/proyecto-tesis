import { TouchableOpacity } from 'react-native'
import { useFilter } from '@/store/filterStore'
import { cn } from '@/lib/utils'
import { Text } from '@/components/ui/text'

function FilterButton({ title, value, onPress, hitSlop }) {
	const filter = useFilter()

	return (
		<TouchableOpacity
			hitSlop={hitSlop}
			onPress={() => onPress(value)}
			className={cn(
				'w-24 items-center justify-center rounded-3xl border-primary px-2',
				{ 'border-4': value === filter, border: value !== filter }
			)}
		>
			<Text className='text-foreground-primary'>{title}</Text>
		</TouchableOpacity>
	)
}

export default FilterButton
