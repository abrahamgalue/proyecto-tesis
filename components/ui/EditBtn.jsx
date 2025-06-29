import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import Edit from '@/components/icons/Edit'

function EditBtn({ href, width, height }) {
	return (
		<Link href={href} asChild>
			<TouchableOpacity
				className='absolute z-10 m-2 items-center justify-center rounded-lg border border-primary'
				style={{ width, height }}
			>
				<Edit />
			</TouchableOpacity>
		</Link>
	)
}

export default EditBtn
