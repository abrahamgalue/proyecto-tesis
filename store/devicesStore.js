import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

const INITIAL_DATA = [
	{
		id: '27b484cc-a6ff-4748-8d39-594ec11b45aa',
		name: `Luz`,
		type: 'light',
		isOn: false,
		location: 'Zona sur'
	},
	{
		id: '310e1819-2b99-4b83-8a66-a11c6565c685',
		name: `Bomba`,
		type: 'bomb',
		isOn: true,
		location: 'Zona oeste'
	},
	{
		id: '69682d43-3583-414e-8218-268190e87d3c',
		name: `Luz`,
		type: 'light',
		isOn: true,
		location: 'Jardín'
	},
	{
		id: 'c5fc2879-0561-4eaf-a765-525cb8021e2f',
		name: `Luz`,
		type: 'light',
		isOn: false,
		location: 'Zona sur'
	},
	{
		id: '5daf736b-94b6-4af5-885c-4d80af79f706',
		name: `Bomba`,
		type: 'bomb',
		isOn: true,
		location: 'Zona este'
	}
]

const useDevicesStore = create((set) => ({
	devices: [],
	actions: {
		fetchDevices: async () => {
			try {
				const jsonValue = await AsyncStorage.getItem('devices')
				const devices = jsonValue != null ? JSON.parse(jsonValue) : INITIAL_DATA

				set({ devices })
			} catch (err) {
				console.error('Failed to get data from device:', err)
				set({ devices: INITIAL_DATA })
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
		}
	}
}))

export const useDevices = () => useDevicesStore((state) => state.devices)

export const useDevice = (deviceid) =>
	useDevicesStore((state) => state.devices.find((d) => d.id === deviceid))

export const useDevicesActions = () => useDevicesStore((state) => state.actions)
