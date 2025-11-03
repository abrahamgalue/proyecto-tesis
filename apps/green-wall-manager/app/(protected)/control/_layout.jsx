import { View } from 'react-native'
import { Stack } from 'expo-router'

export default function Layout() {
	return (
		<View className='bg-brand-primary flex-1'>
			<Stack
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name='index' />
				<Stack.Screen name='edit/[deviceid]' />
				<Stack.Screen
					name='light/[lightid]'
					options={{
						presentation: 'transparentModal',
						animation: 'fade',
						headerShown: false,
						contentStyle: {
							backgroundColor: '#0c2229b3'
						}
					}}
				/>
			</Stack>
		</View>
	)
}
