import { memo, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSupabase } from '@/context/supabase-provider'
import { useUsername, useUserActions } from '@/store/userStore'
import { Image } from '@/components/image'
import { Text } from '@/components/text'
import { GenericSkeleton } from '@/components/ui/skeletons'
import { EditUsernameIcon } from './Icons/Icons'
import { Link } from 'expo-router'

function AccountHeader() {
	const { session } = useSupabase()
	const username = useUsername()
	const { getUsername } = useUserActions()

	useEffect(() => {
		if (session?.user?.id && username === '') {
			getUsername(session.user.id)
		}
	}, [session, username, getUsername])

	return (
		<View className='bg-header-modal-bg h-40 w-full items-center justify-end gap-2 rounded-t-3xl px-6 pb-6'>
			<Image
				style={{
					contentFit: 'contain',
					width: 50,
					height: 50
				}}
				className='rounded-full'
				source={require('@/assets/account.jpg')}
			/>
			{!!username ? (
				<View className='flex-row items-center gap-2'>
					<Text className='text-white'>{username}</Text>
					<Link href={`/account/edit/${session.user.id}`} asChild>
						<TouchableOpacity hitSlop={14}>
							<EditUsernameIcon />
						</TouchableOpacity>
					</Link>
				</View>
			) : (
				<GenericSkeleton width={100} height={20} />
			)}
		</View>
	)
}

export default memo(AccountHeader)
