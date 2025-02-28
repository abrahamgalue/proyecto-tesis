import { router } from 'expo-router'
import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { H1, Muted } from '@/components/ui/typography'

export default function Home() {
	return (
		<View className='flex-1 items-center justify-center bg-background p-4 gap-y-4'>
			<H1 className='text-center'>Inicio</H1>
			<Muted className='text-center'>
				Ahora estás autenticado y esta sesión persistirá incluso después de
				cerrar la aplicación.
			</Muted>
			<Button
				className='w-full'
				variant='default'
				size='default'
				onPress={() => router.push('/(app)/modal')}
			>
				<Text>Abrir Modal</Text>
			</Button>
		</View>
	)
}
