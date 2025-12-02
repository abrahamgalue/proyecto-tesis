export function randomInRange(min: number, max: number, decimals = 0) {
	return (Math.random() * (max - min) + min).toFixed(decimals)
}
