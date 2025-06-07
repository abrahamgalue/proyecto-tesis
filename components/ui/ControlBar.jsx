import { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import GradientBackground from './GradientBackground'
import { colors } from '@/constants/colors'
import Line from '@/components/ui/Line'
import { AccountCircleIcon, PhoneControlIcon } from './Icons/Icons'
import { Text } from '@/components/text'
import { Link } from 'expo-router'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'

const ControlBar = memo(function ControlBar() {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<GradientBackground
			className='mb-5 mt-5 w-[95%] flex-row items-center justify-around rounded-[30px] px-[5%] py-3'
			type='control'
		>
			<Link href='/control' asChild>
				<TouchableOpacity accessibilityLabel='Go to Control'>
					<GradientBackground
						className='flex-row items-center gap-2 rounded-[20px] bg-[rgba(109,165,192,0.3)] px-[15px] py-2'
						style={{
							borderRadius: 12
						}}
						type='card'
					>
						<PhoneControlIcon
							width={24}
							height={24}
							color={
								isDarkColorScheme
									? colors.dark.foreground
									: colors.light.foreground
							}
						/>
						<Line height={15} />
						<Text className='text-sm font-bold text-foreground'>Control</Text>
					</GradientBackground>
				</TouchableOpacity>
			</Link>

			<Link href='/modal' asChild>
				<TouchableOpacity accessibilityLabel='Go to Modal' hitSlop={14}>
					<AccountCircleIcon
						width={33}
						height={33}
						color={
							isDarkColorScheme
								? colors.dark.foreground
								: colors.light.foreground
						}
					/>
				</TouchableOpacity>
			</Link>

			<Link href='/settings' asChild>
				<TouchableOpacity accessibilityLabel='Go to Settings' hitSlop={18}>
					<IconSymbol
						name='settings'
						size={24}
						color={
							isDarkColorScheme
								? colors.dark.foreground
								: colors.light.foreground
						}
					/>
				</TouchableOpacity>
			</Link>
		</GradientBackground>
	)
})

export default ControlBar
