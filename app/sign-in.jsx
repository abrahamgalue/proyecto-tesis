import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { ActivityIndicator, Pressable, TextInput, View } from 'react-native'
import { Image, ImageBackground } from '@/components/image'
import GradientBackground from '@/components/ui/GradientBackground'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'
import { Text } from '@/components/text'

import { SafeAreaView } from '@/components/safe-area-view'
import { useSupabase } from '@/context/supabase-provider'

import { colors } from '@/constants/colors'
import { useColorScheme } from '@/lib/useColorScheme'
import { signInSchema } from '@/constants/schemas'
import useShowPassword from '@/hooks/useShowPassword'
import { StatusBar } from 'expo-status-bar'
import useError from '@/hooks/useError'
import Button from '@/components/Button'

export default function SignIn() {
	const { isDarkColorScheme } = useColorScheme()
	const { signIn } = useSupabase()

	const { showPass, toggleShowPass } = useShowPassword()
	const { error, handleError } = useError()

	const {
		control,
		handleSubmit,
		formState: { isSubmitting, isValid },
		reset
	} = useForm({
		resolver: zodResolver(signInSchema),
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
			handleError(true)
		}
	}

	return (
		<SafeAreaView className='bg-brand-primary flex-1' edges={['bottom']}>
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
								className='text-foreground-primary h-14 w-[80%] rounded-full border border-primary px-8'
								onBlur={onBlur}
								onChangeText={onChange}
								placeholder='Email'
								inputMode='email'
								placeholderTextColor={
									isDarkColorScheme
										? colors.dark.textForegroundPrimary
										: colors.light.textForegroundPrimary
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
							<View className='flex w-[80%] flex-row items-center justify-center rounded-full border border-primary'>
								<TextInput
									className='text-foreground-primary h-14 flex-1 rounded-l-full pl-8'
									onBlur={onBlur}
									onChangeText={onChange}
									placeholder='Contraseña'
									inputMode='text'
									placeholderTextColor={
										isDarkColorScheme
											? colors.dark.textForegroundPrimary
											: colors.light.textForegroundPrimary
									}
									secureTextEntry={!showPass}
									value={value}
								/>
								<Pressable
									accessibilityRole='togglebutton'
									className='px-4'
									onPress={toggleShowPass}
								>
									<IconSymbol
										color={
											isDarkColorScheme
												? colors.dark.bgBtnQuaternary
												: colors.light.bgBtnQuaternary
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

					<Button
						className={`w-[80%] ${!isValid ? 'bg-slate-700 opacity-20' : 'bg-btn-primary'}`}
						disabled={!isValid}
						onPress={handleSubmit(onSubmit)}
					>
						{isSubmitting ? (
							<ActivityIndicator
								size='small'
								color={
									isDarkColorScheme
										? colors.dark.activityIndicator
										: colors.light.activityIndicator
								}
							/>
						) : (
							<Text className='text-btn-white text-center uppercase'>
								INICIAR SESIÓN
							</Text>
						)}
					</Button>
				</ImageBackground>
			</GradientBackground>
		</SafeAreaView>
	)
}
