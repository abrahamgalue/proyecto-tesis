import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { devices as initialDevices } from '@/data/devices.json'

const useDevicesStore = create(
	persist(
		(set) => ({
			devices: [],
			_hasHydrated: false,
			setHasHydrated: (state) => set({ _hasHydrated: state })
		}),
		{
			name: 'devices-storage',
			storage: createJSONStorage(() => AsyncStorage),
			onRehydrateStorage: (state) => {
				return () => state.setHasHydrated(true)
			}
		}
	)
)

const fetchDevices = () => {
	console.log('[ESP32] Inicializando dispositivos con datos iniciales.')
	useDevicesStore.setState({ devices: initialDevices })
}

const toggleEnableDevices = (id) =>
	useDevicesStore.setState((state) => {
		console.log(
			`[ESP32] Enviando comando de encendido/apagado al ESP32 para el dispositivo con id: ${id}`
		)
		const { devices } = state

		const deviceIndex = devices.findIndex((d) => d.id === id)

		const newDevices = [
			...devices.slice(0, deviceIndex),
			{ ...devices[deviceIndex], isOn: !devices[deviceIndex].isOn },
			...devices.slice(deviceIndex + 1)
		]

		console.log(
			`[ESP32] Dispositivo con id: ${id} encendido/apagado. Datos enviados al ESP32.`
		)

		return { devices: newDevices }
	})

const handleDeviceEdit = (id, name, description) =>
	useDevicesStore.setState((state) => {
		console.log(
			`[ESP32] Enviando comando de edición al ESP32 para el dispositivo con id: ${id}, nombre: ${name}, ubicación: ${description}`
		)
		const { devices } = state

		const deviceIndex = devices.findIndex((d) => d.id === id)

		const newDevices = [
			...devices.slice(0, deviceIndex),
			{ ...devices[deviceIndex], name, location: description },
			...devices.slice(deviceIndex + 1)
		]

		console.log(
			`[ESP32] Dispositivo con id: ${id} editado. Datos enviados al ESP32.`
		)

		return { devices: newDevices }
	})

const handleDeviceBrightness = (id, brightness) =>
	useDevicesStore.setState((state) => {
		console.log(
			`[ESP32] Enviando comando de brillo al ESP32 para el dispositivo con id: ${id}, brillo: ${brightness}`
		)
		const { devices } = state

		const deviceIndex = devices.findIndex((d) => d.id === id)

		if (deviceIndex === -1) return {}

		const newDevices = [
			...devices.slice(0, deviceIndex),
			{ ...devices[deviceIndex], brightness },
			...devices.slice(deviceIndex + 1)
		]

		console.log(
			`[ESP32] Brillo del dispositivo con id: ${id} actualizado. Datos enviados al ESP32.`
		)

		return { devices: newDevices }
	})

const handleDeviceColor = (id, color) =>
	useDevicesStore.setState((state) => {
		console.log(
			`[ESP32] Enviando comando de color al ESP32 para el dispositivo con id: ${id}, color: ${color}`
		)
		const { devices } = state

		const deviceIndex = devices.findIndex((d) => d.id === id)

		if (deviceIndex === -1) return {}

		const newDevices = [
			...devices.slice(0, deviceIndex),
			{ ...devices[deviceIndex], color },
			...devices.slice(deviceIndex + 1)
		]

		console.log(
			`[ESP32] Color del dispositivo con id: ${id} actualizado. Datos enviados al ESP32.`
		)

		return { devices: newDevices }
	})

export const useDevicesHydrated = () =>
	useDevicesStore((state) => state._hasHydrated)

export const useDevices = () => useDevicesStore((state) => state.devices)

export const useDevicesReadOnly = () => {
	return useDevicesStore.getState().devices
}

export const useDevice = (deviceid) =>
	useDevicesStore((state) => state.devices.find((d) => d.id === deviceid))

export const useDevicesActions = () => ({
	fetchDevices,
	toggleEnableDevices,
	handleDeviceEdit,
	handleDeviceBrightness,
	handleDeviceColor
})
