import { clsx, type ClassValue } from 'clsx'
import { type DimensionValue } from 'react-native'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const LINE_ERR_MSG =
	"Invalid dimensions: Only one of 'width' or 'height' can be greater than 1 or a percentage to render a line."

export const isValidLine = ({
	width,
	height
}: {
	width?: DimensionValue
	height?: DimensionValue
}) => {
	const isWidthNumber = typeof width === 'number'
	const isHeightNumber = typeof height === 'number'
	const isWidthString = typeof width === 'string'
	const isHeightString = typeof height === 'string'

	const widthGreaterThan1 = isWidthNumber && width > 1
	const heightGreaterThan1 = isHeightNumber && height > 1

	if (widthGreaterThan1 && heightGreaterThan1) {
		throw new Error(LINE_ERR_MSG)
	}

	if (isWidthString && isHeightString) {
		throw new Error(LINE_ERR_MSG)
	}
}

export const getTextSize = ({
	isLargeText,
	unit
}: {
	isLargeText: boolean
	unit: string
}) => {
	const textSize = isLargeText
		? 'text-4xl h-8'
		: unit.length > 5
			? 'text-xs'
			: ''
	const newUnit = unit.length >= 5 ? unit.slice(0, 3) + '...' : unit
	return {
		className: textSize,
		displayUnit: newUnit
	}
}

/**
 * Renders a filtered two-column device list.
 * Explains: 96 = (8px margin + 16px padding) * 2 sides * 2 columns.
 * ITEM_HEIGHT = (window width - 96) / 2.
 */

export const calculateDeviceSize = (width: number) => {
	return (width - 96) / 2
}
