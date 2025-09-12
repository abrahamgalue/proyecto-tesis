import { memo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Link } from 'expo-router'
import Settings from '@/components/icons/Settings'

function LightBtn({ width, id, num }) {
	return (
		<View
			className='absolute bottom-0 left-2 z-20 items-center justify-center'
			style={{ width }}
		>
			<Link href={`/control/light/${id}?num=${num}`} asChild>
				<TouchableOpacity className='rounded-full bg-btn-secondary p-1'>
					<Settings />
				</TouchableOpacity>
			</Link>
		</View>
	)
}

export default memo(LightBtn)
