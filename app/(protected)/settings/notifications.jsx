import { Switch, View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import {
	useNotificationsEnabled,
	useNotificationsActions
} from '@/store/notificationsStore'
import { router } from 'expo-router'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import BackBtn from '@/components/ui/BackBtn'
import { Text } from '@/components/text'
import Button from '@/components/Button'

export default function Notifications() {
	const { isDarkColorScheme } = useColorScheme()
	const isEnabled = useNotificationsEnabled()
	const { toggleNotificationsEnabled } = useNotificationsActions()

	const handleBack = () => {
		router.back()
	}

	return (
		<SafeAreaView className='bg-brand-primary flex-1'>
			<GradientBackground
				className='flex-1 items-center justify-start gap-4 px-[5%]'
				type='screen'
			>
				<View className='flex w-full flex-row items-center gap-3 py-8'>
					<BackBtn
						small={isDarkColorScheme ? false : true}
						hitSlop={20}
						onPress={handleBack}
					/>
					<Text className='text-foreground-primary font-bold'>
						Notificaciones
					</Text>
				</View>
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
			</GradientBackground>
		</SafeAreaView>
	)
}
