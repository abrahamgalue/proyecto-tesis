import * as z from 'zod'

export const editSchema = z.object({
	name: z
		.string()
		.min(3, 'El nombre debe tener al menos 3 caracteres')
		.max(10, 'El nombre debe tener menos de 10 caracteres.'),
	description: z
		.string()
		.min(3, 'La ubicación debe tener al menos 3 caracteres')
		.max(10, 'La ubicación debe tener menos de 10 caracteres.')
})
