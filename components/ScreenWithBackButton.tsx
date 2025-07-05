import { memo, type ReactNode } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import { cn } from '@/lib/utils'
import { SafeAreaView } from '@/components/safe-area-view'
import BackBtn from '@/components/ui/back-btn'
import { Text } from '@/components/ui/text'

interface Props {
	children: ReactNode
	onHandleBack: () => void
	title: string
	containerClassName?: string
}

function ScreenWithBackButton({
	children,
	onHandleBack,
	title,
	containerClassName = ''
}: Props) {
	const { isDarkColorScheme } = useColorScheme()
	const stylesClass = cn('flex-1 items-center px-[5%]', containerClassName)

	return (
		<SafeAreaView className='flex-1 bg-brand-primary'>
			<View className={stylesClass}>
				<View className='flex w-full flex-row items-center gap-3 py-8'>
					<BackBtn
						small={isDarkColorScheme ? false : true}
						hitSlop={20}
						onPress={onHandleBack}
					/>
					<Text className='font-bold text-foreground-primary'>{title}</Text>
				</View>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default memo(ScreenWithBackButton)
