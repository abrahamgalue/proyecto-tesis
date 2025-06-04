import { memo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import {
	colors,
	gradientStart,
	gradientEnd,
	gradientLocations
} from '@/constants/colors'
import Line from '@/components/ui/Line'
import { AccountCircleIcon, PhoneControlIcon } from './Icons/Icons'
import { Text } from '@/components/text'
import { Link } from 'expo-router'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'

const ControlBar = memo(function ControlBar() {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<LinearGradient
			style={{
				borderColor: colors.dark.border,
				borderRadius: 23,
				borderWidth: 1
			}}
			start={gradientStart}
			end={gradientEnd}
			locations={gradientLocations}
			className='flex-row justify-around items-center rounded-[30px] py-3 px-[5%] w-[95%] mt-5 mb-5'
			colors={
				isDarkColorScheme
					? [
							colors.dark.controlGradient1,
							colors.dark.controlGradient2,
							colors.dark.controlGradient3,
							colors.dark.controlGradient4
						]
					: [
							colors.light.controlGradient1,
							colors.light.controlGradient2,
							colors.light.controlGradient3,
							colors.light.controlGradient4
						]
			}
		>
			<TouchableOpacity>
				<LinearGradient
					style={{
						borderColor: colors.dark.border,
						borderRadius: 12,
						borderWidth: 1
					}}
					start={gradientStart}
					end={gradientEnd}
					locations={gradientLocations}
					colors={
						isDarkColorScheme
							? [
									colors.dark.weatherGradient1,
									colors.dark.weatherGradient2,
									colors.dark.weatherGradient3,
									colors.dark.weatherGradient4
								]
							: [
									colors.light.weatherGradient1,
									colors.light.weatherGradient2,
									colors.light.weatherGradient3,
									colors.light.weatherGradient4
								]
					}
					className='flex-row gap-2 items-center bg-[rgba(109,165,192,0.3)] py-2 px-[15px] rounded-[20px]'
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
					<Text className='text-foreground text-sm font-bold'>Control</Text>
				</LinearGradient>
			</TouchableOpacity>

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
		</LinearGradient>
	)
})

export default ControlBar
