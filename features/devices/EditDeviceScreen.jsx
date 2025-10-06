import { ActivityIndicator, TextInput, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useDevice, useDevicesActions } from '@/store/devicesStore'
import { useEditActions } from '@/store/editStore'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editSchema } from '@/features/devices/schemas/edit'

import ScreenWithBackButton from '@/components/ScreenWithBackButton'
import { Text } from '@/components/ui/text'
import { colors } from '@/constants/colors'
import ChevronDown from '@/components/icons/ChevronDown'
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCallback } from 'react'

export default function EditDeviceScreen() {
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
			console.error(err)
		}
	}

	const handleBack = useCallback(() => {
		setEdited(false)
		router.back()
	}, [])

	return (
		<ScreenWithBackButton
			title='Editar Dispositivo'
			onHandleBack={handleBack}
			containerClassName='gap-4'
		>
			<View className='flex w-full flex-row items-center justify-center rounded-2xl border border-gray-400 bg-gray-700'>
				<TextInput
					className='h-14 flex-1 rounded-full px-8 text-gray-400'
					placeholder='Nombre'
					placeholderTextColor={
						isDarkColorScheme
							? colors.dark.textForegroundPrimary
							: colors.light.textForegroundPrimary
					}
					readOnly
					value={device.type === 'light' ? 'Bombillo' : 'Bomba'}
				/>
				<View className='px-4'>
					<ChevronDown color='#9ca3af' />
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
								'border-primary': !errors.name?.message,
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
								'border-primary': !errors.description?.message,
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
					<Text className='text-center text-btn-white'>ACEPTAR</Text>
				)}
			</Button>
		</ScreenWithBackButton>
	)
}
