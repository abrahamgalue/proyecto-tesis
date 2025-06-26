import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { EditIcon } from '@/components/ui/Icons/Icons'

function EditBtn({ href, width, height }) {
	return (
		<Link href={href} asChild>
			<TouchableOpacity
				className='absolute z-10 m-2 items-center justify-center rounded-lg border border-primary'
				style={{ width, height }}
			>
				<EditIcon />
			</TouchableOpacity>
		</Link>
	)
}

export default EditBtn
