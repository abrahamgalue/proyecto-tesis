import { useCallback } from 'react'
import { FlatList, useWindowDimensions, View } from 'react-native'
import { useDevices } from '@/store/devicesStore'
import { useFilter } from '@/store/filterStore'
import Device from '@/components/ui/Device'

function DevicesList() {
	const devices = useDevices()
	const filter = useFilter()

	const { width } = useWindowDimensions()
	/**
	 * Renders a filtered two-column device list.
	 * Explains: 96 = (8px margin + 16px padding) * 2 sides * 2 columns.
	 * ITEM_HEIGHT = (window width - 96) / 2.
	 */
	const ITEM_HEIGHT = (width - 96) / 2

	const filteredDevices =
		filter === '' ? devices : devices.filter((item) => item.type === filter)

	const renderItem = useCallback(
		({ item, index }) => (
			<Device
				key={item.id}
				item={item}
				num={index + 1}
				itemSize={ITEM_HEIGHT}
			/>
		),
		[]
	)

	return (
		<View className='flex-1 px-4'>
			<FlatList
				data={filteredDevices}
				renderItem={renderItem}
				initialNumToRender={5}
				keyExtractor={(item) => item.id}
				maxToRenderPerBatch={5}
				numColumns={2}
				getItemLayout={(_, index) => ({
					length: ITEM_HEIGHT,
					offset: ITEM_HEIGHT * index,
					index
				})}
			/>
		</View>
	)
}

export default DevicesList
