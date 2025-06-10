import { memo } from 'react'
import { View } from 'react-native'
import { useFilter } from '@/store/filterStore'
import { useFilterActions } from '@/store/filterStore'
import { useEdit, useEditActions } from '@/store/editStore'
import FilterButton from './FilterBtn'

const FiltersBtn = memo(function FiltersBtn() {
	const filter = useFilter()
	const { setFilter } = useFilterActions()

	const isEdit = useEdit()
	const { setEdited } = useEditActions()

	const handlePress = (value) => {
		if (isEdit === true) setEdited(false)
		setFilter(value)
	}

	return (
		<View className='flex-row items-center justify-around px-2 py-2'>
			<FilterButton
				isActive={filter === ''}
				onPress={() => handlePress('')}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			>
				Todos
			</FilterButton>
			<FilterButton
				isActive={filter === 'bomb'}
				onPress={() => handlePress('bomb')}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			>
				Bombas
			</FilterButton>
			<FilterButton
				isActive={filter === 'light'}
				onPress={() => handlePress('light')}
				hitSlop={{ bottom: 10, top: 10, left: 5, right: 5 }}
			>
				Luces
			</FilterButton>
		</View>
	)
})

export default FiltersBtn
