import { memo, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSupabase } from '@/context/supabase-provider'
import {
	useUsername,
	useUserActions,
	useAccountHydrated
} from '@/store/accountStore'
import { Image } from '@/components/ui/image'
import { Text } from '@/components/ui/text'
import { GenericSkeleton } from '@/components/ui/skeletons'
import Edit2 from '@/components/icons/Edit2'
import { Link } from 'expo-router'

function AccountHeader() {
	const { session } = useSupabase()
	const hydrated = useAccountHydrated()
	const username = useUsername()
	const { getUsername } = useUserActions()

	useEffect(() => {
		if (hydrated && session?.user?.id && username === '') {
			getUsername(session.user.id)
		}
	}, [session, username, getUsername])

	return (
		<View className='h-40 w-full items-center justify-end gap-2 rounded-t-3xl bg-modal-header-primary px-6 pb-6'>
			<Image
				style={{
					contentFit: 'contain',
					width: 50,
					height: 50
				}}
				className='rounded-full'
				source={require('@/assets/images/account.jpg')}
			/>
			{!!username && hydrated ? (
				<View className='flex-row items-center gap-2'>
					<Text className='text-white'>{username}</Text>
					<Link href={`/account/edit/${session.user.id}`} asChild>
						<TouchableOpacity hitSlop={14}>
							<Edit2 />
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
