import { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import { Link } from 'expo-router'
import GradientBackground from '@/components/ui/gradient-background'
import { colors } from '@/constants/colors'
import Line from '@/components/ui/line'
import PhoneControl from '@/components/icons/PhoneControl'
import AccountCircle from '@/components/icons/AccountCircle'
import { Text } from '@/components/ui/text'
import { IconSymbol } from '@/components/ui/icon-symbol'

export const ControlBtn = memo(function ControlBtn() {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<Link href='/control' asChild>
			<TouchableOpacity accessibilityLabel='Go to Control'>
				<GradientBackground
					className='bg-btn-tertiary flex-row items-center gap-2 rounded-[20px] px-[15px] py-2'
					style={{
						borderRadius: 12
					}}
					type='card'
				>
					<PhoneControl
						width={24}
						height={24}
						color={
							isDarkColorScheme
								? colors.dark.textForegroundPrimary
								: colors.light.textForegroundPrimary
						}
					/>
					<Line height={15} />
					<Text className='text-foreground-primary text-sm font-bold'>
						Control
					</Text>
				</GradientBackground>
			</TouchableOpacity>
		</Link>
	)
})

export const AccountBtn = memo(function AccountBtn() {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<Link href='/account' asChild>
			<TouchableOpacity accessibilityLabel='Go to User' hitSlop={14}>
				<AccountCircle
					width={33}
					height={33}
					color={
						isDarkColorScheme
							? colors.dark.textForegroundPrimary
							: colors.light.textForegroundPrimary
					}
				/>
			</TouchableOpacity>
		</Link>
	)
})

export const SettingsBtn = memo(function SettingsBtn() {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<Link href='/settings' asChild>
			<TouchableOpacity accessibilityLabel='Go to Settings' hitSlop={18}>
				<IconSymbol
					name='settings'
					size={24}
					color={
						isDarkColorScheme
							? colors.dark.textForegroundPrimary
							: colors.light.textForegroundPrimary
					}
				/>
			</TouchableOpacity>
		</Link>
	)
})
