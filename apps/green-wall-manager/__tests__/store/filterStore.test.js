import { render, screen, userEvent } from '@testing-library/react-native'
import { useFilterStore } from '@/store/filterStore'
import FiltersBtn from '@/features/devices/components/filters'

jest.useFakeTimers()

describe('filterStore', () => {
	test('should render with initial state of "all"', () => {
		renderFiltersBtn()

		expect(useFilterStore.getState().filter).toBe('all')
	})

	test('should update filter value by pressing a button', async () => {
		const user = userEvent.setup()

		renderFiltersBtn()

		expect(useFilterStore.getState().filter).toBe('all')

		await user.press(screen.getByText('Bombas'))

		expect(useFilterStore.getState().filter).toBe('bomb')
	})
})

const renderFiltersBtn = () => {
	return render(<FiltersBtn />)
}
