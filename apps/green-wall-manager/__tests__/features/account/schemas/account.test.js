import { accountSchema } from '@/features/account/schemas/account'

describe('accountSchema', () => {
	test('validates correct input', () => {
		const data = { username: 'usuario123' }
		const result = accountSchema.safeParse(data)

		expect(result.success).toBe(true)
	})

	test('fails if username is too short', () => {
		const data = { username: 'us' }
		const result = accountSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'El nombre de usuario debe tener al menos 3 caracteres'
		)
	})

	test('fails if username is too long', () => {
		const data = { username: 'usuario123456789012345' }
		const result = accountSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'El nombre de usuario debe tener menos de 20 caracteres.'
		)
	})
})
