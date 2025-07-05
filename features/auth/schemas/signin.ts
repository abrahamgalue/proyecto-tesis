import * as z from 'zod'

export const signInSchema = z.object({
	email: z.string().email('Dirección de correo electrónico inválida.'),
	password: z
		.string()
		.min(6, 'Por favor, introduzca al menos 6 caracteres.')
		.max(18, 'Introduzca menos de 18 caracteres.')
})
