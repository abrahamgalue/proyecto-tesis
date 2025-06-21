import { memo, useEffect } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import { useSupabase } from '@/context/supabase-provider'
import { useUsername, useUserActions } from '@/store/userStore'
import { AccountCircleIcon } from '@/components/ui/Icons/Icons'
import { colors } from '@/constants/colors'
import { Text } from '@/components/text'
import { GenericSkeleton } from '@/components/ui/skeletons'

function SettingsHeader() {
	const { isDarkColorScheme } = useColorScheme()
	const { session } = useSupabase()
	const username = useUsername()
	const { getUsername } = useUserActions()

	useEffect(() => {
		if (session?.user?.id && username === '') {
			getUsername(session.user.id)
		}
	}, [session, username, getUsername])

	return (
		<View className='h-24 w-full flex-row items-center gap-2 rounded-t-3xl bg-to-gradient px-6'>
			<AccountCircleIcon
				width={33}
				height={33}
				color={
					isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
				}
			/>
			{!!username ? (
				<Text className='text-white'>{username}</Text>
			) : (
				<GenericSkeleton width={100} height={20} />
			)}
		</View>
	)
}

export default memo(SettingsHeader)
