import { getDeviceIcon, icons } from '@/features/devices/lib/utils'
import { DeviceType } from '@/features/devices/type'
import Bomb from '@/components/icons/Bomb'
import LightBulb from '@/components/icons/LightBulb'

describe('icons mapping', () => {
	test('should map DeviceType.Bomb to Bomb icon', () => {
		expect(icons[DeviceType.Bomb]).toBe(Bomb)
	})

	test('should map DeviceType.Light to LightBulb icon', () => {
		expect(icons[DeviceType.Light]).toBe(LightBulb)
	})
})

describe('getDeviceIcon', () => {
	test('returns Bomb icon for DeviceType.Bomb', () => {
		expect(getDeviceIcon(DeviceType.Bomb)).toBe(Bomb)
	})

	test('returns LightBulb icon for DeviceType.Light', () => {
		expect(getDeviceIcon(DeviceType.Light)).toBe(LightBulb)
	})

	test('returns undefined for unknown device type', () => {
		expect(getDeviceIcon('Unknown')).toBeUndefined()
	})
})
