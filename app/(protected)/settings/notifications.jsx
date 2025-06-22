import { useState } from 'react'
import { Switch, View } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import BackBtn from '@/components/ui/BackBtn'
import { Text } from '@/components/text'
import Button from '@/components/Button'

export default function Notifications() {
	const [isEnabled, setIsEnabled] = useState(true)

	const handleBack = () => {
		router.back()
	}

	return (
		<SafeAreaView className='flex-1 bg-background'>
			<GradientBackground
				className='flex-1 items-center justify-start gap-4 px-[5%]'
				type='screen'
			>
				<View className='flex w-full flex-row items-start gap-3 py-8'>
					<BackBtn small={false} hitSlop={20} onPress={handleBack} />
					<Text className='font-bold text-foreground'>Notificaciones</Text>
				</View>
				<View className='mb-4 flex w-full flex-row'>
					<Text className='text-foreground'>
						{isEnabled ? 'Activadas' : 'Desactivadas'}
					</Text>
					<View className='flex-1 items-end justify-end'>
						<Switch
							trackColor={{ false: '#ffffff', true: '#0fb1ff' }}
							thumbColor={isEnabled ? '#ffffff' : '#757575'}
							onValueChange={() => setIsEnabled(!isEnabled)}
							value={isEnabled}
						/>
					</View>
				</View>

				<Button title='Aceptar' onPress={handleBack} />
			</GradientBackground>
		</SafeAreaView>
	)
}
