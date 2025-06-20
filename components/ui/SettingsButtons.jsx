import { TouchableOpacity, View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import { router } from 'expo-router'
import { IconSymbol } from './Icons/IconSymbol'
import { colors } from '@/constants/colors'
import { Text } from '@/components/text'
import { useSupabase } from '@/context/supabase-provider'

export const NotificationsSettingsBtn = ({ onPress }) => {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<TouchableOpacity
			onPress={() => {
				onPress()
				router.push('notifications')
			}}
			className='h-24 w-full flex-row items-center gap-2 border-y border-border px-6'
		>
			<IconSymbol
				name='notifications-none'
				size={33}
				color={
					isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
				}
			/>
			<Text className='text-white'>Notificaciones</Text>
		</TouchableOpacity>
	)
}

export const AboutBtn = () => {
	const { isDarkColorScheme } = useColorScheme()
	return (
		<TouchableOpacity className='h-24 w-full flex-row items-center gap-2 border-y border-border px-6'>
			<IconSymbol
				name='info-outline'
				size={33}
				color={
					isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
				}
			/>
			<Text className='text-white'>Acerca de</Text>
		</TouchableOpacity>
	)
}

export const SignOutBtn = () => {
	const { signOut } = useSupabase()

	return (
		<View className='mb-10 flex w-full flex-1 items-center justify-end'>
			<TouchableOpacity
				onPress={signOut}
				className='w-[80%] rounded-full bg-[#0C6971] p-4'
			>
				<Text className='text-center text-foreground'>Cerrar Sesión</Text>
			</TouchableOpacity>
		</View>
	)
}
