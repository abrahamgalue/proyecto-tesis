import { View } from 'react-native'
import { useFilterActions } from '@/store/filterStore'
import { useEditActions } from '@/store/editStore'
import FilterButton from '@/components/ui/FilterBtn'

function FiltersBtn() {
	const { setFilter } = useFilterActions()
	const { setEdited } = useEditActions()

	const handlePress = (value) => {
		setEdited(false)
		setFilter(value)
	}

	return (
		<View className='flex-row items-center justify-around px-2 py-2'>
			<FilterButton
				title={'Todos'}
				value=''
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
			<FilterButton
				title={'Bombas'}
				value='bomb'
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
			<FilterButton
				title={'Luces'}
				value='light'
				onPress={handlePress}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			/>
		</View>
	)
}

export default FiltersBtn
