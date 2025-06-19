import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { INITIAL_DEVICES_DATA } from '@/constants/data'

const useDevicesStore = create((set) => ({
	devices: [],
	actions: {
		fetchDevices: async () => {
			try {
				const jsonValue = await AsyncStorage.getItem('devices')
				const devices =
					jsonValue != null ? JSON.parse(jsonValue) : INITIAL_DEVICES_DATA

				set({ devices })
			} catch (err) {
				console.error('Failed to get data from device:', err)
				set({ devices: INITIAL_DEVICES_DATA })
			}
		},
		toggleEnableDevices: (id) => {
			set((old) => {
				const { devices } = old

				const deviceIndex = devices.findIndex((d) => d.id === id)

				const newDevices = [
					...devices.slice(0, deviceIndex),
					{ ...devices[deviceIndex], isOn: !devices[deviceIndex].isOn },
					...devices.slice(deviceIndex + 1)
				]

				return { devices: newDevices }
			})
		},
		handleDeviceEdit: (id, name, description) => {
			set((old) => {
				const { devices } = old

				const deviceIndex = devices.findIndex((d) => d.id === id)

				const newDevices = [
					...devices.slice(0, deviceIndex),
					{ ...devices[deviceIndex], name, location: description },
					...devices.slice(deviceIndex + 1)
				]

				return { devices: newDevices }
			})
		},
		handleDeviceBrightness: (id, brightness) => {
			set((old) => {
				const { devices } = old

				const deviceIndex = devices.findIndex((d) => d.id === id)

				if (deviceIndex === -1) return {}

				const newDevices = [
					...devices.slice(0, deviceIndex),
					{ ...devices[deviceIndex], brightness },
					...devices.slice(deviceIndex + 1)
				]

				return { devices: newDevices }
			})
		},
		handleDeviceColor: (id, color) => {
			set((old) => {
				const { devices } = old

				const deviceIndex = devices.findIndex((d) => d.id === id)

				if (deviceIndex === -1) return {}

				const newDevices = [
					...devices.slice(0, deviceIndex),
					{ ...devices[deviceIndex], color },
					...devices.slice(deviceIndex + 1)
				]

				return { devices: newDevices }
			})
		}
	}
}))

export const useDevices = () => useDevicesStore((state) => state.devices)

export const useDevice = (deviceid) =>
	useDevicesStore((state) => state.devices.find((d) => d.id === deviceid))

export const useDevicesActions = () => useDevicesStore((state) => state.actions)
