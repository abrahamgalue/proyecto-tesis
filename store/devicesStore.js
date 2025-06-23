import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { INITIAL_DEVICES_DATA } from '@/constants/data'

const useDevicesStore = create((set) => ({
	devices: [],
	actions: {
		fetchDevices: async () => {
			console.log(
				'[ESP32] Conectando con el ESP32 para obtener dispositivos...'
			)
			try {
				const jsonValue = await AsyncStorage.getItem('devices')
				const devices =
					jsonValue != null ? JSON.parse(jsonValue) : INITIAL_DEVICES_DATA

				set({ devices })
				console.log('[ESP32] Datos de dispositivos recibidos del ESP32.')
			} catch (err) {
				console.error('No se pudo obtener datos del dispositivo:', err)
				set({ devices: INITIAL_DEVICES_DATA })
				console.log(
					'[ESP32] Usando datos iniciales de dispositivos debido a un error.'
				)
			}
		},
		toggleEnableDevices: (id) => {
			console.log(
				`[ESP32] Enviando comando de encendido/apagado al ESP32 para el dispositivo con id: ${id}`
			)
			set((old) => {
				const { devices } = old

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
		},
		handleDeviceEdit: (id, name, description) => {
			console.log(
				`[ESP32] Enviando comando de edición al ESP32 para el dispositivo con id: ${id}, nombre: ${name}, ubicación: ${description}`
			)
			set((old) => {
				const { devices } = old

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
		},
		handleDeviceBrightness: (id, brightness) => {
			console.log(
				`[ESP32] Enviando comando de brillo al ESP32 para el dispositivo con id: ${id}, brillo: ${brightness}`
			)
			set((old) => {
				const { devices } = old

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
		},
		handleDeviceColor: (id, color) => {
			console.log(
				`[ESP32] Enviando comando de color al ESP32 para el dispositivo con id: ${id}, color: ${color}`
			)
			set((old) => {
				const { devices } = old

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
		}
	}
}))

export const useDevices = () => useDevicesStore((state) => state.devices)

export const useDevice = (deviceid) =>
	useDevicesStore((state) => state.devices.find((d) => d.id === deviceid))

export const useDevicesActions = () => useDevicesStore((state) => state.actions)
