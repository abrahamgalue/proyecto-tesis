import { editSchema } from '@/features/devices/schemas/edit'

describe('editSchema', () => {
	test('validates correct input', () => {
		const data = { name: 'Device1', description: 'Room1' }
		const result = editSchema.safeParse(data)

		expect(result.success).toBe(true)
	})

	test('fails if name is too short', () => {
		const data = { name: 'De', description: 'Room1' }
		const result = editSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'El nombre debe tener al menos 3 caracteres'
		)
	})

	test('fails if name is too long', () => {
		const data = { name: 'DeviceNameLong', description: 'Room1' }
		const result = editSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'El nombre debe tener menos de 10 caracteres.'
		)
	})

	test('fails if description is too short', () => {
		const data = { name: 'Device1', description: 'Ro' }
		const result = editSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'La ubicación debe tener al menos 3 caracteres'
		)
	})

	test('fails if description is too long', () => {
		const data = { name: 'Device1', description: 'RoomIsLonger' }
		const result = editSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'La ubicación debe tener menos de 10 caracteres.'
		)
	})
})
