import { memo, useMemo } from 'react'
import { FlatList, View } from 'react-native'
import { useDevices } from '@/store/devicesStore'
import { useFilter } from '@/store/filterStore'
import Device from '@/components/ui/Device'

const DevicesList = memo(function DevicesList() {
	const devices = useDevices()
	const filter = useFilter()

	const filteredDevices = useMemo(() => {
		return filter === ''
			? devices
			: devices.filter((item) => item.type === filter)
	}, [filter, devices])

	return (
		<View className='flex-1 px-4'>
			<FlatList
				initialNumToRender={5}
				data={filteredDevices}
				renderItem={({ item, index }) => (
					<Device key={item.id} num={index + 1} item={item} />
				)}
				keyExtractor={(item) => item.id}
				numColumns={2}
			/>
		</View>
	)
})

export default DevicesList
