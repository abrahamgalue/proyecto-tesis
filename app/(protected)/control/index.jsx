import { View, TouchableOpacity, FlatList, Switch } from 'react-native'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import { Image } from '@/components/image'
import { Text } from '@/components/text'
import { router } from 'expo-router'
import DigitalClock from '@/components/ui/Date/DigitalClock'
import Day from '@/components/ui/Date/Day'
import {
	BombIcon,
	CloseSmallIcon,
	ConnectedIcon,
	DeleteBtnIcon,
	EditBtnIcon,
	EditIcon,
	LightBulbIcon
} from '@/components/ui/Icons/Icons'
import Footer from '@/components/ui/Footer'
import { useWindowDimensions } from 'react-native'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

const DATA = [
	{
		id: Math.random().toString(16),
		name: `Luz`,
		type: 'light',
		isOn: false,
		location: 'Zona sur'
	},
	{
		id: Math.random().toString(16),
		name: `Bomba`,
		type: 'bomb',
		isOn: true,
		location: 'Zona oeste'
	},
	{
		id: Math.random().toString(16),
		name: `Luz`,
		type: 'light',
		isOn: true,
		location: 'Jardín'
	},
	{
		id: Math.random().toString(16),
		name: `Luz`,
		type: 'light',
		isOn: false,
		location: 'Zona sur'
	},
	{
		id: Math.random().toString(16),
		name: `Bomba`,
		type: 'bomb',
		isOn: true,
		location: 'Zona este'
	}
]

const GridItem = ({ item, num, edit }) => {
	const [isEnabled, setIsEnabled] = useState(item.isOn)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

	const { width } = useWindowDimensions()
	const itemSize = (width - 96) / 2

	const IconComponent = useMemo(() =>
		item.type === 'bomb' ? BombIcon : LightBulbIcon
	)

	return (
		<View className='relative'>
			{edit && (
				<TouchableOpacity
					className='absolute z-20 m-2 items-center justify-center rounded-lg border border-border'
					style={{ width: itemSize, height: itemSize }}
				>
					<EditIcon />
				</TouchableOpacity>
			)}

			<View
				className={cn(
					'relative z-10 m-2 rounded-lg border border-border bg-white/20 p-4 dark:bg-[#082D33]/80',
					{ 'opacity-10': edit }
				)}
				style={{ width: itemSize, height: itemSize }}
			>
				<View className='h-12 flex-row items-start justify-between'>
					<View className='ml-2'>
						<IconComponent />
					</View>
					<ConnectedIcon />
				</View>
				<Text className='text-lg font-bold text-foreground'>
					{item.name} #{num}
				</Text>
				<Text className='text-xs text-muted-foreground'>{item.location}</Text>
				<View className='flex-1 flex-row items-end justify-between'>
					<Text className='text-foreground'>{isEnabled ? 'ON' : 'OFF'}</Text>
					<Switch
						disabled={edit}
						trackColor={{ false: '#ffffff', true: '#0fb1ff' }}
						thumbColor={isEnabled ? '#ffffff' : '#757575'}
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
			</View>
		</View>
	)
}

export default function Control() {
	const [edit, setEdit] = useState(false)
	const [filter, setFilter] = useState('')
	const items =
		filter === '' ? DATA : DATA.filter((items) => items.type === filter)

	const handleFilter = ({ filter }) => {
		setFilter(filter)
	}

	return (
		<SafeAreaView className='flex-1'>
			<View className='flex-1 bg-background'>
				<GradientBackground
					className='flex-1 items-center justify-center px-[5%] pb-[15px] pt-5'
					type='screen'
				>
					<GradientBackground
						className='relative mt-[60px] w-full flex-1'
						type='card'
					>
						<View className='absolute bottom-0 right-0 h-full w-full overflow-hidden rounded-3xl'>
							<Image
								className='absolute -bottom-24 -right-36 h-[400px] w-[400px] opacity-10'
								source={require('@/assets/logo-raw.png')}
								style={{ contentFit: 'contain' }}
							/>
						</View>
						<View className='relative w-full px-5 pt-5'>
							<Text className='absolute -top-6 left-3 text-5xl font-bold leading-[48px] text-foreground'>
								CONTROL
							</Text>
							<TouchableOpacity
								hitSlop={20}
								onPress={() => router.back()}
								className='absolute -top-11 right-3'
							>
								<CloseSmallIcon />
							</TouchableOpacity>
							<View className='flex items-center py-8'>
								<Day />
								<DigitalClock />
							</View>
							<View className='h-11 flex-row items-center justify-center gap-4 py-2'>
								<TouchableOpacity
									onPress={() => handleFilter({ filter: '' })}
									className={cn(
										'rounded-3xl border-border px-4',
										filter === '' ? 'border-2' : 'border'
									)}
								>
									<Text className='text-foreground'>Todos</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => handleFilter({ filter: 'bomb' })}
									className={cn(
										'rounded-3xl border-border px-4',
										filter === 'bomb' ? 'border-2' : 'border'
									)}
								>
									<Text className='text-foreground'>Bombas</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => handleFilter({ filter: 'light' })}
									className={cn(
										'rounded-3xl border-border px-4',
										filter === 'light' ? 'border-2' : 'border'
									)}
								>
									<Text className='text-foreground'>Luces</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View className='flex-1 px-4'>
							<FlatList
								data={items}
								renderItem={({ item, index }) => (
									<GridItem num={index + 1} item={item} edit={edit} />
								)}
								keyExtractor={(item) => item.id}
								numColumns={2}
							/>
						</View>
					</GradientBackground>

					<GradientBackground
						className='mb-5 mt-5 w-[95%] flex-row items-center justify-around rounded-[30px] px-6 py-1'
						type='control'
					>
						<TouchableOpacity onPress={() => setEdit(!edit)}>
							{edit ? <DeleteBtnIcon /> : <EditBtnIcon />}
						</TouchableOpacity>
						<View>
							<Image
								className='h-20 w-20'
								source={require('@/assets/logo-raw.png')}
								style={{ contentFit: 'contain' }}
							/>
						</View>
					</GradientBackground>
					<Footer />
				</GradientBackground>
			</View>
		</SafeAreaView>
	)
}
