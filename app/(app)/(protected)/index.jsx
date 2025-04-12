import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import {
	colors,
	gradientStart,
	gradientEnd,
	gradientLocations
} from '@/constants/colors'
import { useColorScheme } from '@/lib/useColorScheme'
import { Image } from '@/components/image'
import DigitalClock from '@/components/ui/DigitalClock'
import Day from '@/components/ui/Date'

const ForecastDay = ({ day, icon, temp, detail }) => {
	const { colorScheme } = useColorScheme()

	return (
		<View className='items-center flex-1'>
			<Text className='text-foreground text-base mb-1'>{day}</Text>
			<IconSymbol
				name={icon}
				size={34}
				color={
					colorScheme === 'dark'
						? colors.dark.baseIcons
						: colors.light.baseIcons
				}
				className='my-1'
			/>
			<Text className='text-foreground text-lg font-bold'>{temp}</Text>
			<Text className='text-foreground text-sm'>{detail}</Text>
		</View>
	)
}

const InfoBlock = ({ icon, value, label }) => (
	<View className='w-[48%] gap-2 flex-row px-2.5 items-start mb-[15px]'>
		<IconSymbol name={icon} size={42} color='#a1a1aa' />
		<View className='flex-1 items-start'>
			<Text className='text-foreground text-lg font-bold'>{value}</Text>
			<Text className='text-foreground text-sm'>{label}</Text>
		</View>
	</View>
)

export default function App() {
	const { colorScheme } = useColorScheme()
	const router = useRouter()

	return (
		<View>
			<ScrollView
				className='bg-background'
				contentContainerClassName='grow justify-between'
			>
				<LinearGradient
					className='flex-1 px-[5%] pt-5 pb-[15px] items-center justify-center'
					colors={
						colorScheme === 'dark'
							? [colors.dark.fromGradient, colors.dark.toGradient]
							: [colors.light.fromGradient, colors.light.toGradient]
					}
				>
					{/* --- Header --- */}
					<View className='w-full flex-row h-10 items-center justify-start mb-6'>
						<View className='relative rounded-full p-1 border border-border h-11 w-11 items-center justify-center'>
							<IconSymbol
								name='notifications-none'
								size={28}
								color={
									colorScheme === 'dark'
										? colors.dark.foreground
										: colors.light.foreground
								}
							/>
							<View className='absolute top-0 right-0 bg-[#008A08] rounded-full w-4 h-4 justify-center items-center'>
								<Text className='text-foreground text-[10px] font-bold'>3</Text>
							</View>
						</View>
					</View>

					{/* --- Weather Card --- */}
					<LinearGradient
						style={{
							borderColor: colors.dark.border,
							borderRadius: 23,
							borderWidth: 1
						}}
						start={gradientStart}
						end={gradientEnd}
						locations={gradientLocations}
						className='w-full mb-[30px] relative'
						colors={
							colorScheme === 'dark'
								? [
										colors.dark.weatherGradient1,
										colors.dark.weatherGradient2,
										colors.dark.weatherGradient3,
										colors.dark.weatherGradient4
									]
								: [
										colors.light.weatherGradient1,
										colors.light.weatherGradient2,
										colors.light.weatherGradient3,
										colors.light.weatherGradient4
									]
						}
					>
						<View className='absolute w-full h-full rounded-3xl overflow-hidden bottom-9 right-0'>
							<Image
								className='w-[400px] h-[400px] absolute -bottom-24 -right-36 opacity-10'
								source={require('@/assets/logo-raw.png')}
								style={{ contentFit: 'contain' }}
							/>
						</View>
						<View className='p-5 w-full relative border border-border rounded-3xl'>
							{colorScheme === 'dark' ? (
								<Image
									className='w-20 h-20 absolute -top-11 -right-3'
									source={require('@/assets/logo-raw.png')}
									style={{ contentFit: 'contain' }}
								/>
							) : (
								<Image
									className='w-20 h-20 absolute -top-11 -right-3'
									source={require('@/assets/logo.png')}
									style={{ contentFit: 'contain' }}
								/>
							)}
							<View className='flex-row justify-between items-center'>
								<IconSymbol
									className={'ml-4'}
									name='weather-partly-cloudy'
									size={120}
									color='#77abff'
									family='MaterialCommunityIcons'
								/>
								<View className='items-end'>
									<Day />
									<DigitalClock />
								</View>
							</View>
							<View className='flex-row justify-center gap-2 items-end mb-5'>
								<View className='items-center'>
									<Text className='text-[92px] text-foreground font-semi-bold leading-[100px]'>
										32°
									</Text>
									<Text className='text-foreground text-base'>Nublado</Text>
								</View>
								<View className='items-start justify-center'>
									<Text className='text-lg text-foreground font-bold'>60%</Text>
									<Text className='text-foreground text-sm'>Humedad</Text>
								</View>
							</View>
							<View className='h-[1px] bg-white w-[65%] m-auto'></View>
							<View className='flex-row justify-between pt-[15px] mt-[15px]'>
								<ForecastDay
									day='Martes'
									icon='cloud-queue'
									temp='20°/26°'
									detail='74% Nub'
								/>
								<ForecastDay
									day='Miércoles'
									icon='wb-sunny'
									temp='26°/29°'
									detail='83% Sol'
								/>
								<ForecastDay
									day='Jueves'
									icon='wb-sunny'
									temp='30°/34°'
									detail='88% Sol'
								/>
							</View>
						</View>
						<TouchableOpacity
							onPress={() => router.push('/(app)/modal')}
							className='flex-row justify-center items-center p-2'
						>
							<Text className='text-foreground'>Ver más</Text>
							<IconSymbol
								name='keyboard-arrow-down'
								size={16}
								color={
									colorScheme === 'dark'
										? colors.dark.foreground
										: colors.light.foreground
								}
							/>
						</TouchableOpacity>
					</LinearGradient>

					{/* --- Secondary Info Grid --- */}
					<View className='flex-row flex-wrap justify-between w-full mb-12'>
						<InfoBlock icon='water-drop' value='60%' label='Nivel de Agua' />
						<InfoBlock
							icon='thermostat'
							value='25°C'
							label='Temperatura del suelo'
						/>
						<InfoBlock icon='science' value='6,83' label='Nivel de PH' />
						<InfoBlock icon='opacity' value='40%' label='Humedad' />
					</View>

					{/* --- Control Bar --- */}
					<LinearGradient
						style={{
							borderColor: colors.dark.border,
							borderRadius: 23,
							borderWidth: 1
						}}
						start={gradientStart}
						end={gradientEnd}
						locations={gradientLocations}
						className='flex-row justify-around items-center rounded-[30px] py-3 px-[5%] w-[95%] mt-5 mb-5'
						colors={
							colorScheme === 'dark'
								? [
										colors.dark.controlGradient1,
										colors.dark.controlGradient2,
										colors.dark.controlGradient3,
										colors.dark.controlGradient4
									]
								: [
										colors.light.controlGradient1,
										colors.light.controlGradient2,
										colors.light.controlGradient3,
										colors.light.controlGradient4
									]
						}
					>
						<LinearGradient
							style={{
								borderColor: colors.dark.border,
								borderRadius: 12,
								borderWidth: 1
							}}
							start={gradientStart}
							end={gradientEnd}
							locations={gradientLocations}
							colors={
								colorScheme === 'dark'
									? [
											colors.dark.weatherGradient1,
											colors.dark.weatherGradient2,
											colors.dark.weatherGradient3,
											colors.dark.weatherGradient4
										]
									: [
											colors.light.weatherGradient1,
											colors.light.weatherGradient2,
											colors.light.weatherGradient3,
											colors.light.weatherGradient4
										]
							}
							className='flex-row items-center bg-[rgba(109,165,192,0.3)] py-2 px-[15px] rounded-[20px]'
						>
							<IconSymbol
								name='phonelink-setup'
								size={20}
								color={
									colorScheme === 'dark'
										? colors.dark.foreground
										: colors.light.foreground
								}
							/>
							<Text className='text-foreground ml-2 text-sm font-bold'>
								Control
							</Text>
						</LinearGradient>
						<TouchableOpacity>
							<IconSymbol
								name='person'
								size={24}
								color={
									colorScheme === 'dark'
										? colors.dark.foreground
										: colors.light.foreground
								}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<IconSymbol
								name='settings'
								size={24}
								color={
									colorScheme === 'dark'
										? colors.dark.foreground
										: colors.light.foreground
								}
							/>
						</TouchableOpacity>
					</LinearGradient>

					{/* --- Footer --- */}
					<View className='flex-row gap-1'>
						<Text className='text-foreground text-sm font-bold tracking-[1px]'>
							GREENWALL
						</Text>
						<Text className='text-border text-sm font-bold tracking-[1px]'>
							MANAGER
						</Text>
					</View>
				</LinearGradient>
			</ScrollView>
		</View>
	)
}
