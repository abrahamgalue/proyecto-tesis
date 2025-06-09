import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { ActivityIndicator, Pressable, TextInput, View } from 'react-native'
import { Image, ImageBackground } from '@/components/image'
import * as z from 'zod'
import GradientBackground from '@/components/ui/GradientBackground'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'
import { Text } from '@/components/text'

import { SafeAreaView } from '@/components/safe-area-view'
import { useSupabase } from '@/context/supabase-provider'
import { useState } from 'react'

import { colors } from '@/constants/colors'
import { useColorScheme } from '@/lib/useColorScheme'
import { StatusBar } from 'expo-status-bar'

const formSchema = z.object({
	email: z.string().email('Dirección de correo electrónico inválida.'),
	password: z
		.string()
		.min(6, 'Por favor, introduzca al menos 6 caracteres.')
		.max(18, 'Introduzca menos de 18 caracteres.')
})

export default function SignIn() {
	const { isDarkColorScheme } = useColorScheme()
	const { signIn } = useSupabase()

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
			await signIn(data.email, data.password)

			reset()
		} catch (_error) {
			setError(true)
		}
	}

	return (
		<SafeAreaView className='flex-1' edges={['bottom']}>
			<StatusBar style='auto' />
			<GradientBackground className='flex-1' type='screen'>
				<ImageBackground
					source={require('@/assets/login-bg.png')}
					className='flex-1 items-center justify-center gap-4'
				>
					<Image
						className='-mt-12 mb-12 h-52 w-52'
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
								className='h-14 w-[80%] rounded-full border border-border px-8 text-foreground'
								onBlur={onBlur}
								onChangeText={onChange}
								placeholder='Email'
								inputMode='email'
								placeholderTextColor={
									isDarkColorScheme
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
							<View className='flex w-[80%] flex-row items-center justify-center rounded-full border border-border'>
								<TextInput
									className='h-14 flex-1 rounded-l-full pl-8 text-foreground'
									onBlur={onBlur}
									onChangeText={onChange}
									placeholder='Contraseña'
									placeholderTextColor={
										isDarkColorScheme
											? colors.dark.foreground
											: colors.light.foreground
									}
									secureTextEntry={!showPass}
									value={value}
								/>
								<Pressable
									accessibilityRole='togglebutton'
									className='px-4'
									onPress={() => setShowPass(!showPass)}
								>
									<IconSymbol
										color={
											isDarkColorScheme
												? colors.dark.accent
												: colors.light.accent
										}
										name={!showPass ? 'visibility' : 'visibility-off'}
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
						accessibilityRole='button'
						className={`${!formState.isValid ? 'bg-slate-700 opacity-20' : 'bg-[#0C6971]'} w-[80%] rounded-full p-4`}
						disabled={!formState.isValid}
						onPress={handleSubmit(onSubmit)}
					>
						{formState.isSubmitting ? (
							<ActivityIndicator
								size='small'
								color={
									isDarkColorScheme
										? colors.dark.activityIndicator
										: colors.light.activityIndicator
								}
							/>
						) : (
							<Text className='text-center text-foreground'>
								INICIAR SESIÓN
							</Text>
						)}
					</Pressable>
				</ImageBackground>
			</GradientBackground>
		</SafeAreaView>
	)
}
