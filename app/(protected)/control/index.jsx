import { View, TouchableOpacity, FlatList, Switch } from 'react-native'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import { Image } from '@/components/image'
import { Text } from '@/components/text'
import { Link, router } from 'expo-router'
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
import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { useDevices, useDevicesActions } from '@/store/devicesStore'
import { useEdit, useEditActions } from '@/store/editStore'

const GridItem = ({ item, num, edit, handleEdit }) => {
	const isEnabled = item.isOn
	const toggleSwitch = () => handleEdit(item.id)

	const { width } = useWindowDimensions()
	const itemSize = (width - 96) / 2

	const IconComponent = useMemo(() =>
		item.type === 'bomb' ? BombIcon : LightBulbIcon
	)

	return (
		<View className='relative'>
			{edit && (
				<Link href={`/control/edit/${item.id}`} asChild>
					<TouchableOpacity
						className='absolute z-20 m-2 items-center justify-center rounded-lg border border-border'
						style={{ width: itemSize, height: itemSize }}
					>
						<EditIcon />
					</TouchableOpacity>
				</Link>
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
				<View className='flex-1 items-end justify-end'>
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
	const devices = useDevices()
	const { fetchDevices, toggleEnableDevices } = useDevicesActions()
	const edit = useEdit()
	const { toggleEdited, setEdited } = useEditActions()

	const [filter, setFilter] = useState('')
	const filteredDevices =
		filter === '' ? devices : devices.filter((items) => items.type === filter)
	const filtersBtnHitSlops = { bottom: 10, top: 10, left: 5, right: 5 }

	const handleFilter = ({ filter }) => {
		if (edit === true) setEdited(false)
		setFilter(filter)
	}

	useEffect(() => {
		fetchDevices()
	}, [])

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
									hitSlop={filtersBtnHitSlops}
									onPress={() => handleFilter({ filter: '' })}
									className={cn(
										'rounded-3xl border-border px-4',
										filter === '' ? 'border-2' : 'border'
									)}
								>
									<Text className='text-foreground'>Todos</Text>
								</TouchableOpacity>
								<TouchableOpacity
									hitSlop={filtersBtnHitSlops}
									onPress={() => handleFilter({ filter: 'bomb' })}
									className={cn(
										'rounded-3xl border-border px-4',
										filter === 'bomb' ? 'border-2' : 'border'
									)}
								>
									<Text className='text-foreground'>Bombas</Text>
								</TouchableOpacity>
								<TouchableOpacity
									hitSlop={filtersBtnHitSlops}
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
								data={filteredDevices}
								renderItem={({ item, index }) => (
									<GridItem
										num={index + 1}
										item={item}
										edit={edit}
										handleEdit={toggleEnableDevices}
									/>
								)}
								keyExtractor={(item) => item.id}
								numColumns={2}
							/>
						</View>
					</GradientBackground>

					<GradientBackground
						className='relative mb-5 mt-5 w-[95%] flex-row items-center justify-start rounded-[30px] px-10 py-1'
						type='control'
					>
						<TouchableOpacity
							onPress={toggleEdited}
							hitSlop={{ bottom: 4, top: 4, left: 5, right: 5 }}
						>
							{edit ? <DeleteBtnIcon /> : <EditBtnIcon />}
						</TouchableOpacity>
						<View className='absolute -right-6 -top-1/2'>
							<Image
								className='h-36 w-36'
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
