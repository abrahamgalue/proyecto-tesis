import { ActivityIndicator, TextInput, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useUserActions, useUsername } from '@/store/userStore'
import { useColorScheme } from '@/lib/useColorScheme'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { usernameSchema } from '@/constants/schemas'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import BackBtn from '@/components/ui/BackBtn'
import { Text } from '@/components/text'
import { colors } from '@/constants/colors'
import Button from '@/components/Button'
import { cn } from '@/lib/utils'

export default function EditUsername() {
	const { userid } = useLocalSearchParams()
	const username = useUsername()
	const { changeUsername } = useUserActions()

	const { isDarkColorScheme } = useColorScheme()

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		reset
	} = useForm({
		resolver: zodResolver(usernameSchema),
		defaultValues: {
			username: username
		},
		mode: 'onChange'
	})

	async function onSubmit(data) {
		try {
			changeUsername(userid, data.username)
			reset()
			router.back()
		} catch (err) {
			console.log(err)
		}
	}

	const handleBack = () => {
		router.back()
	}

	return (
		<SafeAreaView className='bg-brand-primary flex-1'>
			<GradientBackground
				className='flex-1 items-center gap-4 px-[5%]'
				type='screen'
			>
				<View className='flex w-full flex-row items-center gap-3 py-8'>
					<BackBtn
						small={isDarkColorScheme ? false : true}
						hitSlop={20}
						onPress={handleBack}
					/>
					<Text className='text-foreground-primary font-bold'>
						Editar nombre de usuario
					</Text>
				</View>

				<Controller
					control={control}
					rules={{
						required: true
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							className={cn(
								'h-14 w-full rounded-2xl border bg-white px-8 font-bold',
								{
									'border-primary': !errors.username?.message,
									'border-red-400': !!errors.username?.message
								}
							)}
							onBlur={onBlur}
							onChangeText={onChange}
							placeholder='Nombre de usuario'
							inputMode='text'
							placeholderTextColor={colors.dark.editInput}
							value={value}
						/>
					)}
					name='username'
				/>

				<Text className='text-red-500'>
					{errors.username?.message ? errors.username.message : ''}
				</Text>

				<Button
					className={{
						'bg-slate-700 opacity-20': !isValid,
						'bg-btn-primary': isValid
					}}
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
						<Text className='text-btn-white text-center'>ACEPTAR</Text>
					)}
				</Button>
			</GradientBackground>
		</SafeAreaView>
	)
}
