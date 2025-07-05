import { View } from 'react-native'
import { useFilterActions } from '@/store/filterStore'
import { useEditActions } from '@/store/editStore'
import FilterBtn from '@/features/devices/components/filters/FilterBtn'

function FiltersBtn() {
	const { setFilter } = useFilterActions()
	const { setEdited } = useEditActions()

	const handlePress = (value) => {
		setEdited(false)
		setFilter(value)
	}

	return (
		<View className='flex-row items-center justify-around px-2 py-2'>
			<FilterBtn
				title={'Todos'}
				value='all'
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
			<FilterBtn
				title={'Bombas'}
				value='bomb'
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
			<FilterBtn
				title={'Luces'}
				value='light'
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
		</View>
	)
}

export default FiltersBtn
