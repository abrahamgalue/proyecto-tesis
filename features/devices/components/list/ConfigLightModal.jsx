import { View } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'
import { useDevice } from '@/store/devicesStore'
import CardTitle from '@/components/ui/card/card-title'
import BackBtn from '@/components/ui/back-btn'
import LightColor from '@/features/devices/components/list/LightColor'
import LightLevel from '@/features/devices/components/list/LightLevel'
import Button from '@/components/ui/button'

export default function ConfigLightModal() {
	const { lightid, num } = useLocalSearchParams()
	const item = useDevice(lightid)

	return (
		<View className='flex-1 items-center justify-center bg-modal-primary-transparent px-[5%]'>
			<View className='relative h-[50%] w-full items-center justify-center gap-4 rounded-3xl border border-primary bg-modal-primary'>
				<CardTitle className='text-modal-primary'>
					{item.name} #{num}
				</CardTitle>
				<BackBtn
					className='absolute right-5 top-5'
					hitSlop={20}
					onPress={() => router.back()}
				/>
				<LightColor deviceId={item.id} color={item.color} />
				<LightLevel deviceId={item.id} brightness={item.brightness} />
				<Button
					activeOpacity={1}
					title='Aceptar'
					className='absolute -bottom-5 w-[70%]'
					textClassName='text-btn-white'
					onPress={() => router.back()}
				/>
			</View>
		</View>
	)
}
