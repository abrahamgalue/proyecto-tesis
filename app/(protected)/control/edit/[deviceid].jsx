import { ActivityIndicator, Pressable, TextInput, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useDevice, useDevicesActions } from '@/store/devicesStore'
import { useEditActions } from '@/store/editStore'
import { useColorScheme } from '@/lib/useColorScheme'
import useError from '@/hooks/useError'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editSchema } from '@/constants/schemas'

import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import BackBtn from '@/components/ui/BackBtn'
import { Text } from '@/components/text'
import { colors } from '@/constants/colors'
import { ChevronDownIcon } from '@/components/ui/Icons/Icons'

export default function EditDevice() {
	const { deviceid } = useLocalSearchParams()
	const device = useDevice(deviceid)
	const { handleDeviceEdit } = useDevicesActions()
	const { setEdited } = useEditActions()

	const { isDarkColorScheme } = useColorScheme()
	const { error, handleError } = useError()

	const { control, handleSubmit, formState, reset } = useForm({
		resolver: zodResolver(editSchema),
		defaultValues: {
			name: device.name,
			description: device.location
		}
	})

	async function onSubmit(data) {
		try {
			handleDeviceEdit(device.id, data.name, data.description)
			setEdited(false)
			reset()
			router.back()
		} catch (err) {
			console.log(err)
			handleError(true)
		}
	}

	const handleBack = () => {
		setEdited()
		router.back()
	}

	return (
		<SafeAreaView className='flex-1'>
			<GradientBackground
				className='flex-1 items-center justify-start gap-4'
				type='screen'
			>
				<View className='flex w-[80%] flex-row items-start gap-3 py-8'>
					<BackBtn small={false} hitSlop={20} onPress={handleBack} />
					<Text className='font-bold text-foreground'>Editar Dispositivo</Text>
				</View>
				<View className='flex w-[80%] flex-row items-center justify-center rounded-full border border-gray-400 bg-gray-700'>
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
							className='h-14 w-[80%] rounded-full border border-border bg-white px-8 font-bold'
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
							className='h-14 w-[80%] rounded-full border border-border bg-white px-8 font-bold'
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
					{error
						? 'Los campos deben tener mas de 10 caracteres y no pueden estar vacíos'
						: ''}
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
						<Text className='text-center text-foreground'>ACEPTAR</Text>
					)}
				</Pressable>
			</GradientBackground>
		</SafeAreaView>
	)
}
