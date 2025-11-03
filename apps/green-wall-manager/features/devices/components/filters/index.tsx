import { FilterTypes } from '@/features/devices/type'
import { View } from 'react-native'
import { useFilterActions } from '@/store/filterStore'
import { useEditActions } from '@/store/editStore'
import FilterBtn from '@/features/devices/components/filters/FilterBtn'

function FiltersBtn() {
	const { setFilter } = useFilterActions()
	const { setEdited } = useEditActions()

	const handlePress = (value: FilterTypes) => {
		setEdited(false)
		setFilter(value)
	}

	return (
		<View className='flex-row items-center justify-around px-2 py-2'>
			<FilterBtn
				title={'Todos'}
				value={FilterTypes.All}
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
			<FilterBtn
				title={'Bombas'}
				value={FilterTypes.Bomb}
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
			<FilterBtn
				title={'Luces'}
				value={FilterTypes.Light}
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
		</View>
	)
}

export default FiltersBtn
