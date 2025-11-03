import { ActivityIndicator, Pressable, TextInput, View } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useSupabase } from '@/context/supabase-provider'
import useShowPassword from '@/features/auth/hooks/useShowPassword'
import useError from '@/hooks/useError'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '@/features/auth/schemas/signin'
import { SafeAreaView } from '@/components/safe-area-view'
import { StatusBar } from 'expo-status-bar'
import { Image, ImageBackground } from '@/components/ui/image'
import GradientBackground from '@/components/ui/gradient-background'
import { colors } from '@/constants/colors'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { Text } from '@/components/ui/text'
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'

function SignInScreen() {
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
		} catch (err) {
			handleError(err)
		}
	}

	return (
		<SafeAreaView className='bg-brand-primary flex-1' edges={['bottom']}>
			<StatusBar style='auto' />
			<GradientBackground className='flex-1' type='screen'>
				<ImageBackground
					source={require('@/assets/images/login-bg.png')}
					className='flex-1 items-center justify-center gap-4'
				>
					<Image
						className='-mt-12 mb-12 h-52 w-52'
						source={require('@/assets/images/signin-icon.png')}
						style={{ contentFit: 'contain' }}
					/>
					<Controller
						control={control}
						rules={{
							required: true
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								autoCapitalize='none'
								className='border-primary text-foreground-primary h-14 w-[80%] rounded-full border px-8'
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
							<View className='border-primary flex w-[80%] flex-row items-center justify-center rounded-full border'>
								<TextInput
									autoCapitalize='none'
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
						className={cn('bg-btn-primary w-[80%]', {
							'bg-slate-700 opacity-20': !isValid
						})}
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

export default SignInScreen
