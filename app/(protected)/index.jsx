import { View, TouchableOpacity, ScrollView } from 'react-native'
import { IconSymbol } from '@/components/ui/IconSymbol'
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
import { useState } from 'react'
import { GenericSkeleton } from '@/components/ui/skeletons'
import ForecastDay from '@/components/ui/ForecastDay'
import MonitoringBlock from '@/components/ui/MonitoringBlock'
import Line from '@/components/ui/Line'
import {
	AccountCircleIcon,
	FloorTempIcon,
	HumidityIcon,
	PHLevelIcon,
	PhoneControlIcon,
	SunCloud,
	SunCloudSmall,
	Sunny,
	TemperatureSubstrateIcon,
	WaterLevel,
	WaterObstructionIcon
} from '@/components/ui/Icons'
import { Text } from '@/components/text'
import WeatherDetail from '@/components/ui/WeatherDetail'
import Notifications from '@/components/ui/Notifications'
import useWeatherData from '@/hooks/useWeatherData'
import { router } from 'expo-router'
import { SafeAreaView } from '@/components/safe-area-view'

export default function App() {
	const { weatherData } = useWeatherData()
	const { isDarkColorScheme } = useColorScheme()
	const [isShow, setIsShow] = useState(false)
	const [showNotifications, setShowNotifications] = useState(false)

	const handleNotificationPress = () => {
		setShowNotifications(!showNotifications)
	}

	const handleClearNotifications = () => {
		setShowNotifications(false)
	}

	return (
		<SafeAreaView>
			<ScrollView
				scrollEnabled={!showNotifications}
				className='bg-background'
				contentContainerClassName='grow justify-between'
			>
				<LinearGradient
					className='flex-1 px-[5%] pt-5 pb-[15px] items-center justify-center'
					colors={
						isDarkColorScheme
							? [colors.dark.fromGradient, colors.dark.toGradient]
							: [colors.light.fromGradient, colors.light.toGradient]
					}
				>
					<Notifications
						showNotifications={showNotifications}
						handleNotificationPress={handleNotificationPress}
						handleClearNotifications={handleClearNotifications}
					/>

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
							isDarkColorScheme
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
						<View className='absolute w-full h-full rounded-3xl overflow-hidden bottom-10 right-0'>
							<Image
								className='w-[400px] h-[400px] absolute -bottom-24 -right-36 opacity-10'
								source={require('@/assets/logo-raw.png')}
								style={{ contentFit: 'contain' }}
							/>
						</View>
						<View className='p-5 w-full relative border border-border rounded-3xl'>
							{isDarkColorScheme ? (
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
								<SunCloud />
								<View className='items-end'>
									<Day />
									<DigitalClock />
								</View>
							</View>
							<View className='flex-row justify-center gap-2 items-end mb-5'>
								<View className='items-center'>
									{weatherData.tempOutside ? (
										<Text className='text-[92px] text-foreground font-semi-bold leading-[100px]'>
											{weatherData.tempOutside}°
										</Text>
									) : (
										<GenericSkeleton width={150} height={90} />
									)}
									<Text className='text-foreground text-base'>Nublado</Text>
								</View>
								<View className='items-start justify-center'>
									{weatherData.humidity ? (
										<Text className='text-lg text-foreground font-bold'>
											{weatherData.humidity}
										</Text>
									) : (
										<GenericSkeleton width={40} height={20} />
									)}
									<Text className='text-foreground text-sm'>Humedad</Text>
								</View>
							</View>
							<Line width='65%' />
							<View className='flex-row justify-between pt-[15px] mt-[15px]'>
								<ForecastDay
									day='Martes'
									icon={<SunCloudSmall />}
									temp='20°/26°'
									detail='74% Nub'
								/>
								<Line height='55%' />
								<ForecastDay
									day='Miércoles'
									icon={<Sunny />}
									temp='26°/29°'
									detail='83% Sol'
								/>
								<Line height='55%' />
								<ForecastDay
									day='Jueves'
									icon={<Sunny />}
									temp='30°/34°'
									detail='88% Sol'
								/>
							</View>
							{isShow && (
								<View className='flex items-center justify-center pt-8 pb-3 gap-3'>
									<WeatherDetail
										icon={
											<HumidityIcon
												width={25}
												height={25}
												color={
													isDarkColorScheme
														? colors.dark.foreground
														: colors.light.foreground
												}
											/>
										}
										label='Velocidad del Viento'
										value={weatherData.wind.speed}
										unit={weatherData.wind.unit}
									/>
									<WeatherDetail
										icon={
											<HumidityIcon
												width={25}
												height={25}
												color={
													isDarkColorScheme
														? colors.dark.foreground
														: colors.light.foreground
												}
											/>
										}
										label='Indice UV'
										value={weatherData.UV.index}
										unit={weatherData.UV.state}
									/>
									<WeatherDetail
										icon={
											<HumidityIcon
												width={25}
												height={25}
												color={
													isDarkColorScheme
														? colors.dark.foreground
														: colors.light.foreground
												}
											/>
										}
										label='Sensación Térmica'
										value={weatherData.sensationThermal}
										unit='°C'
										isLargeText={true}
									/>
								</View>
							)}
						</View>
						<TouchableOpacity
							onPress={() => setIsShow(!isShow)}
							className='flex-row justify-center items-center p-2'
						>
							<Text className='text-foreground'>
								Ver {isShow ? 'menos' : 'más'}
							</Text>
							<IconSymbol
								name={isShow ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
								size={16}
								color={
									isDarkColorScheme
										? colors.dark.foreground
										: colors.light.foreground
								}
							/>
						</TouchableOpacity>
					</LinearGradient>

					{/* --- Monitoring --- */}
					<View className='flex-row flex-wrap justify-between w-full mb-12 px-3'>
						<MonitoringBlock
							icon={<WaterLevel />}
							value='60%'
							label='Nivel de Agua'
						/>
						<MonitoringBlock
							icon={
								<FloorTempIcon
									width={42}
									height={42}
									color={
										isDarkColorScheme
											? colors.dark.baseIcons
											: colors.light.baseIcons
									}
								/>
							}
							value='25°C'
							label='Temperatura del suelo'
						/>
						<MonitoringBlock
							icon={
								<TemperatureSubstrateIcon
									width={42}
									height={42}
									color={
										isDarkColorScheme
											? colors.dark.baseIcons
											: colors.light.baseIcons
									}
								/>
							}
							value='20°C'
							label='Temperatura del sustrato'
						/>
						{weatherData.humidity ? (
							<MonitoringBlock
								icon={
									<HumidityIcon
										width={42}
										height={42}
										color={
											isDarkColorScheme
												? colors.dark.baseIcons
												: colors.light.baseIcons
										}
									/>
								}
								value={weatherData.humidity}
								label='Humedad'
							/>
						) : (
							<GenericSkeleton width='48%' height={42} />
						)}
						<MonitoringBlock
							icon={
								<PHLevelIcon
									width={42}
									height={42}
									color={
										isDarkColorScheme
											? colors.dark.baseIcons
											: colors.light.baseIcons
									}
								/>
							}
							value='6,83'
							label='Nivel de PH'
						/>
						<MonitoringBlock
							icon={
								<WaterObstructionIcon
									width={42}
									height={42}
									color={
										isDarkColorScheme
											? colors.dark.baseIcons
											: colors.light.baseIcons
									}
								/>
							}
							value='05%'
							label='Obstrucción canal de agua'
						/>
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
							isDarkColorScheme
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
						<TouchableOpacity>
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
									isDarkColorScheme
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
								className='flex-row gap-2 items-center bg-[rgba(109,165,192,0.3)] py-2 px-[15px] rounded-[20px]'
							>
								<PhoneControlIcon
									width={24}
									height={24}
									color={
										isDarkColorScheme
											? colors.dark.foreground
											: colors.light.foreground
									}
								/>
								<Line height={15} />
								<Text className='text-foreground text-sm font-bold'>
									Control
								</Text>
							</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => router.push('/modal')}
							hitSlop={14}
						>
							<AccountCircleIcon
								width={33}
								height={33}
								color={
									isDarkColorScheme
										? colors.dark.foreground
										: colors.light.foreground
								}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => router.push('/settings')}
							hitSlop={18}
						>
							<IconSymbol
								name='settings'
								size={24}
								color={
									isDarkColorScheme
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
		</SafeAreaView>
	)
}
