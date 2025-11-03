import { memo } from 'react'
import { StyleSheet } from 'react-native'
import { useDevicesActions } from '@/store/devicesStore'
import { useSharedValue } from 'react-native-reanimated'
import ColorPicker, { Panel3 } from 'reanimated-color-picker'

function LightColor({ deviceId, color }) {
	const { handleDeviceColor } = useDevicesActions()
	const currentColor = useSharedValue(color)

	// runs on the ui thread on color change
	const onColorChange = (c) => {
		'worklet'
		currentColor.value = c.hex
	}

	// runs on the js thread on color pick
	const onColorPick = (c) => {
		handleDeviceColor(deviceId, c.hex)
	}

	const Panel = memo(function Panel() {
		return <Panel3 style={styles.panelStyle} centerChannel='saturation' />
	})

	return (
		<ColorPicker
			value={color}
			sliderThickness={25}
			thumbShape='ring'
			thumbSize={32}
			onChange={onColorChange}
			onCompleteJS={onColorPick}
			style={styles.picker}
			thumbStyle={styles.thumbStyle}
		>
			<Panel />
		</ColorPicker>
	)
}

const styles = StyleSheet.create({
	picker: {
		width: 240
	},
	panelStyle: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	thumbStyle: {
		borderWidth: 3,
		borderRadius: 100,
		borderColor: 'white'
	}
})

export default memo(LightColor)
