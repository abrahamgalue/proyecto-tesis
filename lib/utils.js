import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

function padZero(num) {
	return (num < 10 ? '0' : '') + num
}

export function formatTime(time) {
	let hours = time.getHours()
	let minutes = time.getMinutes()

	hours = hours % 12 || 12

	return `${padZero(hours)}:${padZero(minutes)}`
}
