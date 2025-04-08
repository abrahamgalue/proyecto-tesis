import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import {
	ActivityIndicator,
	Text,
	Pressable,
	TextInput,
	View
} from 'react-native'
import { Image } from '@/components/image'
import * as z from 'zod'
import { LinearGradient } from 'expo-linear-gradient'
import { IconSymbol } from '@/components/ui/IconSymbol'

import { SafeAreaView } from '@/components/safe-area-view'
import { useSupabase } from '@/context/supabase-provider'
import { useState } from 'react'

import { colors } from '@/constants/colors'
import { useColorScheme } from '@/lib/useColorScheme'

const formSchema = z.object({
	email: z.string().email('Dirección de correo electrónico inválida.'),
	password: z
		.string()
		.min(6, 'Por favor, introduzca al menos 6 caracteres.')
		.max(18, 'Introduzca menos de 18 caracteres.')
})

export default function SignIn() {
	const { colorScheme } = useColorScheme()
	const { signInWithPassword } = useSupabase()

	const [showPass, setShowPass] = useState(false)
	const [error, setError] = useState(false)

	const { control, handleSubmit, formState, reset } = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	async function onSubmit(data) {
		try {
			await signInWithPassword(data.email, data.password)

			reset()
		} catch (_error) {
			setError(true)
		}
	}

	return (
		<SafeAreaView className='flex-1' edges={['bottom']}>
			<LinearGradient
				className='flex-1 gap-4 justify-center items-center'
				colors={
					colorScheme === 'dark'
						? [colors.dark.fromGradient, colors.dark.toGradient]
						: [colors.light.fromGradient, colors.light.toGradient]
				}
			>
				<Image
					className='w-52 h-52 mb-12 -mt-12'
					source={require('@/assets/signin-icon.png')}
					style={{ contentFit: 'contain' }}
				/>
				<Controller
					control={control}
					rules={{
						required: true
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							className='w-[80%] text-foreground h-14 border border-border rounded-full px-8'
							onBlur={onBlur}
							onChangeText={onChange}
							placeholder='Email'
							placeholderTextColor={
								colorScheme === 'dark'
									? colors.dark.foreground
									: colors.light.foreground
							}
							value={value}
						/>
					)}
					name='email'
				/>

				<Controller
					control={control}
					rules={{
						maxLength: 18
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<View className='w-[80%] flex flex-row justify-center items-center border border-border rounded-full'>
							<TextInput
								className='text-foreground h-14 flex-1 pl-8 rounded-l-full'
								onBlur={onBlur}
								onChangeText={onChange}
								placeholder='Contraseña'
								placeholderTextColor={
									colorScheme === 'dark'
										? colors.dark.foreground
										: colors.light.foreground
								}
								secureTextEntry={showPass}
								value={value}
							/>
							<Pressable
								className='px-4'
								onPress={() => setShowPass(!showPass)}
							>
								<IconSymbol
									color={
										colorScheme === 'dark'
											? colors.dark.accent
											: colors.light.accent
									}
									name={showPass ? 'visibility' : 'visibility-off'}
								/>
							</Pressable>
						</View>
					)}
					name='password'
				/>

				<Text className='text-red-500'>
					{error ? 'Correo y/o contraseña incorrecta' : ''}
				</Text>

				<Pressable
					className={`${!formState.isValid ? 'opacity-20 bg-slate-700' : 'bg-[#0C6971]'} w-[80%] p-4 rounded-full`}
					disabled={!formState.isValid}
					onPress={handleSubmit(onSubmit)}
				>
					{formState.isSubmitting ? (
						<ActivityIndicator
							size='small'
							color={
								colorScheme === 'dark'
									? colors.dark.activityIndicator
									: colors.light.activityIndicator
							}
						/>
					) : (
						<Text className='text-foreground text-center'>INICIAR SESIÓN</Text>
					)}
				</Pressable>
			</LinearGradient>
		</SafeAreaView>
	)
}
