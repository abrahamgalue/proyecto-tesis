import { useState } from 'react'
import { Switch, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import BackBtn from '@/components/ui/BackBtn'
import { Text } from '@/components/text'

export default function Notifications() {
	const [isEnabled, setIsEnabled] = useState(true)

	const handleBack = () => {
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
					<Text className='font-bold text-foreground'>Notificaciones</Text>
				</View>
				<View className='mb-4 flex w-[80%] flex-row'>
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

				<TouchableOpacity
					accessibilityRole='button'
					className='w-[80%] rounded-full bg-[#0C6971] p-4'
					onPress={handleBack}
				>
					<Text className='text-center text-foreground'>Aceptar</Text>
				</TouchableOpacity>
			</GradientBackground>
		</SafeAreaView>
	)
}
