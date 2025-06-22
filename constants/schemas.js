import * as z from 'zod'

export const signInSchema = z.object({
	email: z.string().email('Dirección de correo electrónico inválida.'),
	password: z
		.string()
		.min(6, 'Por favor, introduzca al menos 6 caracteres.')
		.max(18, 'Introduzca menos de 18 caracteres.')
})

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

export const usernameSchema = z.object({
	username: z
		.string()
		.min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
		.max(20, 'El nombre de usuario debe tener menos de 20 caracteres.')
})
