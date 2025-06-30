import { Switch, View } from 'react-native'
import {
	useNotificationsEnabled,
	useNotificationsActions
} from '@/store/notificationsStore'
import { router } from 'expo-router'
import { Text } from '@/components/ui/text'
import Button from '@/components/ui/button'
import ScreenWithBackButton from '@/components/ScreenWithBackButton'
import { useCallback } from 'react'

export default function Notifications() {
	const isEnabled = useNotificationsEnabled()
	const { toggleNotificationsEnabled } = useNotificationsActions()

	const handleBack = useCallback(() => {
		router.back()
	}, [])

	return (
		<ScreenWithBackButton title='Notificaciones' onHandleBack={handleBack}>
			<View className='mb-4 flex w-full flex-row'>
				<Text className='text-foreground-primary'>
					{isEnabled ? 'Activadas' : 'Desactivadas'}
				</Text>
				<View className='flex-1 items-end justify-end'>
					<Switch
						trackColor={{ false: '#ffffff', true: '#0fb1ff' }}
						thumbColor={isEnabled ? '#ffffff' : '#757575'}
						onValueChange={toggleNotificationsEnabled}
						value={isEnabled}
					/>
				</View>
			</View>

			<Button
				title='Aceptar'
				textClassName='text-btn-white'
				onPress={handleBack}
			/>
		</ScreenWithBackButton>
	)
}
