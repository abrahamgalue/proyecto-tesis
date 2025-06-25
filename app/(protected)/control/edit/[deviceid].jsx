import { ActivityIndicator, TextInput, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useDevice, useDevicesActions } from '@/store/devicesStore'
import { useEditActions } from '@/store/editStore'
import { useColorScheme } from '@/lib/useColorScheme'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editSchema } from '@/constants/schemas'

import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import BackBtn from '@/components/ui/BackBtn'
import { Text } from '@/components/text'
import { colors } from '@/constants/colors'
import { ChevronDownIcon } from '@/components/ui/Icons/Icons'
import Button from '@/components/Button'
import { cn } from '@/lib/utils'

export default function EditDevice() {
	const { deviceid } = useLocalSearchParams()
	const device = useDevice(deviceid)
	const { handleDeviceEdit } = useDevicesActions()
	const { setEdited } = useEditActions()

	const { isDarkColorScheme } = useColorScheme()

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		reset
	} = useForm({
		resolver: zodResolver(editSchema),
		defaultValues: {
			name: device.name,
			description: device.location
		},
		mode: 'onChange'
	})

	async function onSubmit(data) {
		try {
			handleDeviceEdit(device.id, data.name, data.description)
			setEdited(false)
			reset()
			router.back()
		} catch (err) {
			console.log(err)
		}
	}

	const handleBack = () => {
		setEdited(false)
		router.back()
	}

	return (
		<SafeAreaView className='flex-1 bg-background'>
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
					<Text className='font-bold text-foreground'>Editar Dispositivo</Text>
				</View>
				<View className='flex w-full flex-row items-center justify-center rounded-2xl border border-gray-400 bg-gray-700'>
					<TextInput
						className='h-14 flex-1 rounded-full px-8 text-gray-400'
						placeholder='Nombre'
						placeholderTextColor={
							isDarkColorScheme
								? colors.dark.foreground
								: colors.light.foreground
						}
						readOnly
						value={device.type === 'light' ? 'Bombillo' : 'Bomba'}
					/>
					<View className='px-4'>
						<ChevronDownIcon color='#9ca3af' />
					</View>
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
									'border-border': !errors.name?.message,
									'border-red-400': !!errors.name?.message
								}
							)}
							onBlur={onBlur}
							onChangeText={onChange}
							placeholder='Nombre'
							inputMode='text'
							placeholderTextColor={colors.dark.editInput}
							value={value}
						/>
					)}
					name='name'
				/>

				<Controller
					control={control}
					rules={{
						maxLength: 18
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							className={cn(
								'h-14 w-full rounded-2xl border bg-white px-8 font-bold',
								{
									'border-border': !errors.description?.message,
									'border-red-400': !!errors.description?.message
								}
							)}
							onBlur={onBlur}
							onChangeText={onChange}
							placeholder='Descripción'
							inputMode='text'
							placeholderTextColor={colors.dark.editInput}
							value={value}
						/>
					)}
					name='description'
				/>

				<Text className='text-red-500'>
					{errors.name?.message ? errors.name.message : ''}
				</Text>

				<Text className='text-red-500'>
					{errors.description?.message ? errors.description.message : ''}
				</Text>

				<Button
					className={{
						'bg-slate-700 opacity-20': !isValid,
						'bg-btn': isValid
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
						<Text className='text-center text-foreground'>ACEPTAR</Text>
					)}
				</Button>
			</GradientBackground>
		</SafeAreaView>
	)
}
