import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

const isPercentage = (value: string | number) =>
	typeof value === 'string' && value.endsWith('%')

export const LINE_ERR_MSG =
	"Invalid dimensions: Only one of 'width' or 'height' can be greater than 1 or a percentage to render a line."

export const isValidLine = ({
	height,
	width
}: {
	height: number | string
	width: number | string
}) => {
	if (
		(typeof width === 'number' ? width > 1 : isPercentage(width)) &&
		(typeof height === 'number' ? height > 1 : isPercentage(height))
	) {
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
