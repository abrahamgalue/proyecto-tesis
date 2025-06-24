import { TouchableOpacity, View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import { Link } from 'expo-router'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'
import { colors } from '@/constants/colors'
import { Text } from '@/components/text'
import { useSupabase } from '@/context/supabase-provider'
import Button from '@/components/Button'

export const NotificationsSettingsBtn = () => {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<Link
			href='/settings/notifications'
			className='h-24 w-full flex-row items-center gap-2 border-y border-border px-6'
			asChild
		>
			<TouchableOpacity>
				<IconSymbol
					name='notifications-none'
					size={33}
					color={
						isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
					}
				/>
				<Text className='text-white'>Notificaciones</Text>
			</TouchableOpacity>
		</Link>
	)
}

export const AboutBtn = () => {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<Link
			href='/settings/about'
			className='h-24 w-full flex-row items-center gap-2 border-b border-border px-6'
			asChild
		>
			<TouchableOpacity>
				<IconSymbol
					name='info-outline'
					size={33}
					color={
						isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
					}
				/>
				<Text className='text-white'>Acerca de</Text>
			</TouchableOpacity>
		</Link>
	)
}

export const SignOutBtn = () => {
	const { signOut } = useSupabase()

	return (
		<View className='mb-10 flex w-[80%] flex-1 items-center justify-end'>
			<Button title='Cerrar Sesión' className='rounded-2xl' onPress={signOut} />
		</View>
	)
}
