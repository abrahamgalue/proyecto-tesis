import * as z from 'zod'

export const accountSchema = z.object({
	username: z
		.string()
		.min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
		.max(20, 'El nombre de usuario debe tener menos de 20 caracteres.')
})
