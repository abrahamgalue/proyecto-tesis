import { signInSchema } from '@/features/auth/schemas/signin'

describe('signInSchema', () => {
	test('validates correct input', () => {
		const data = { email: 'user@example.com', password: 'secret123' }
		const result = signInSchema.safeParse(data)

		expect(result.success).toBe(true)
	})

	test('fails with invalid email', () => {
		const data = { email: 'invalid-email', password: 'secret123' }
		const result = signInSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'Dirección de correo electrónico inválida.'
		)
	})

	test('fails if password is too short', () => {
		const data = { email: 'user@example.com', password: '123' }
		const result = signInSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'Por favor, introduzca al menos 6 caracteres.'
		)
	})

	test('fails if password is too long', () => {
		const data = { email: 'user@example.com', password: '1234567890123456789' }
		const result = signInSchema.safeParse(data)

		expect(result.success).toBe(false)
		expect(result.error?.issues[0].message).toBe(
			'Introduzca menos de 18 caracteres.'
		)
	})
})
