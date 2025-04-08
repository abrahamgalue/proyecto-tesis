import { View, Text } from 'react-native'

export default function NotFound() {
	return (
		<View className='flex flex-1 items-center justify-center bg-background p-4 gap-y-4'>
			<Text className='text-center web:scroll-m-20 text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl web:select-text'>
				404
			</Text>
			<Text className='text-center text-sm text-muted-foreground web:select-text'>
				This page could not be found.
			</Text>
		</View>
	)
}
