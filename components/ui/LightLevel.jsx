import { memo } from 'react'
import { View } from 'react-native'
import { useDevicesActions } from '@/store/devicesStore'
import { Text } from '@/components/text'
import Slider from '@react-native-community/slider'

function LightLevel({ deviceId, brightness }) {
	const { handleDeviceBrightness } = useDevicesActions()

	return (
		<View>
			<Text className='text-modal-secondary px-8 text-start'>
				BRILLO {brightness}%
			</Text>
			<Slider
				style={{ width: 240 }}
				step={1}
				lowerLimit={0}
				upperLimit={100}
				minimumValue={0}
				maximumValue={100}
				value={brightness}
				onSlidingComplete={(value) => handleDeviceBrightness(deviceId, value)}
				thumbTintColor={'#D9D9D9'}
				minimumTrackTintColor={'#D9D9D9'}
				maximumTrackTintColor={'#538297'}
			/>
		</View>
	)
}

export default memo(LightLevel)
