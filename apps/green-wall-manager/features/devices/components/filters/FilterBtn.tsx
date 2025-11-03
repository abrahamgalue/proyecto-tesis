import { FilterTypes } from '@/features/devices/type'
import { TouchableOpacity, Insets } from 'react-native'
import { useFilter } from '@/store/filterStore'
import { cn } from '@/lib/utils'
import { Text } from '@/components/ui/text'

interface Props {
	title: string
	value: FilterTypes
	onPress: (value: FilterTypes) => void
	hitSlop: Insets | number
}

function FilterButton({ title, value, onPress, hitSlop }: Props) {
	const filter = useFilter()

	return (
		<TouchableOpacity
			hitSlop={hitSlop}
			onPress={() => onPress(value)}
			className={cn(
				'border-primary w-24 items-center justify-center rounded-3xl border px-2',
				{ 'border-4': value === filter }
			)}
		>
			<Text className='text-foreground-primary'>{title}</Text>
		</TouchableOpacity>
	)
}

export default FilterButton
