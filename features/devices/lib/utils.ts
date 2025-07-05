import { DeviceType } from '@/features/devices/type'
import { type FC } from 'react'

import LightBulb from '@/components/icons/LightBulb'
import Bomb from '@/components/icons/Bomb'

export const icons: Record<DeviceType, FC> = {
	[DeviceType.Bomb]: Bomb,
	[DeviceType.Light]: LightBulb
}

export function getDeviceIcon(type: DeviceType) {
	return icons[type]
}
