import { memo, useEffect } from 'react'
import { View } from 'react-native'
import { useSupabase } from '@/context/supabase-provider'
import { useUsername, useUserActions } from '@/store/userStore'
import { Image } from '@/components/image'
import { Text } from '@/components/text'
import { GenericSkeleton } from '@/components/ui/skeletons'

function SettingsHeader() {
	const { session } = useSupabase()
	const username = useUsername()
	const { getUsername } = useUserActions()

	useEffect(() => {
		if (session?.user?.id && username === '') {
			getUsername(session.user.id)
		}
	}, [session, username, getUsername])

	return (
		<View className='bg-header-modal-bg h-24 w-full flex-row items-center gap-2 rounded-t-3xl px-6'>
			<Image
				style={{
					contentFit: 'contain',
					width: 33,
					height: 33
				}}
				className='rounded-full'
				source={require('@/assets/account.jpg')}
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
