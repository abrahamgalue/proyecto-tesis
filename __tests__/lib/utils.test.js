import {
	isValidLine,
	getTextSize,
	LINE_ERR_MSG,
	cn,
	calculateDeviceSize
} from '@/lib/utils'

describe('isValidLine', () => {
	test('does not throw if one value is 1 or less', () => {
		expect(() => isValidLine({ width: 1, height: 10 })).not.toThrow()
		expect(() => isValidLine({ width: '100%', height: 1 })).not.toThrow()
	})

	test('throws if both values are greater than 1 or percentages', () => {
		expect(() => isValidLine({ width: 2, height: 2 })).toThrow(LINE_ERR_MSG)
		expect(() => isValidLine({ width: '50%', height: '100%' })).toThrow(
			LINE_ERR_MSG
		)
	})
})

describe('getTextSize', () => {
	test('returns correct classes and display unit based on text size and unit', () => {
		expect(getTextSize({ isLargeText: true, unit: '°C' })).toEqual({
			className: 'text-4xl h-8',
			displayUnit: '°C'
		})

		expect(getTextSize({ isLargeText: false, unit: 'km/h' })).toEqual({
			className: '',
			displayUnit: 'km/h'
		})

		expect(getTextSize({ isLargeText: false, unit: 'porcentual' })).toEqual({
			className: 'text-xs',
			displayUnit: 'por...'
		})

		expect(getTextSize({ isLargeText: false, unit: 'grams' })).toEqual({
			className: '',
			displayUnit: 'gra...'
		})
	})
})

describe('cn', () => {
	test('merges class names and keeps order/duplicates as tailwind-merge does', () => {
		expect(cn('foo', 'bar', 'foo')).toBe('foo bar foo')
		expect(cn('a', false && 'b', null, undefined, 'c')).toBe('a c')
		expect(cn('a', 0, '', 'b')).toBe('a b')
	})
})

describe('calculateDeviceSize', () => {
	test('calculates device size based on width', () => {
		expect(calculateDeviceSize(400)).toBe((400 - 96) / 2)
		expect(calculateDeviceSize(200)).toBe((200 - 96) / 2)
	})
})
