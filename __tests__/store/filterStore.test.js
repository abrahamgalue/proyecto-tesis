import { render, screen, fireEvent } from '@testing-library/react-native'
import { useFilterStore } from '@/store/filterStore'
import FiltersBtn from '@/features/devices/components/filters'

describe('filterStore', () => {
	it('should render with initial state of "all"', () => {
		renderFiltersBtn()

		expect(useFilterStore.getState().filter).toBe('all')
	})

	it('should update filter value by pressing a button', async () => {
		renderFiltersBtn()

		expect(useFilterStore.getState().filter).toBe('all')

		fireEvent.press(screen.getByText('Bombas'))

		expect(useFilterStore.getState().filter).toBe('bomb')
	})
})

const renderFiltersBtn = () => {
	return render(<FiltersBtn />)
}
