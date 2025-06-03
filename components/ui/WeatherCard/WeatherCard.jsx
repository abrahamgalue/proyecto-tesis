import { memo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import {
	colors,
	gradientStart,
	gradientEnd,
	gradientLocations
} from '@/constants/colors'
import WeatherCardImgBackground from '@/components/ui/WeatherCard/WeatherCardImgBackground'
import WeatherCardLogo from '@/components/ui/WeatherCard/WeatherCardLogo'
import WeatherCardHeader from '@/components/ui/WeatherCard/WeatherCardHeader'
import WeatherCardInfo from '@/components/ui/WeatherCard/WeatherCardInfo'
import Line from '@/components/ui/Line'
import ForecastSection from '@/components/ui/Forecast/ForecastSection'
import WeatherCardDetail from '@/components/ui/WeatherCard/WeatherCardDetail'
import ShowMoreBtn from '@/components/ui/ShowMoreBtn'

const WeatherCard = memo(function WeatherCard({
	weatherData,
	isWeatherDataMoreShow,
	handleWeatherDataMore
}) {
	const { isDarkColorScheme } = useColorScheme()

	return (
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
			<WeatherCardImgBackground />
			<View className='p-5 w-full relative border border-border rounded-3xl'>
				<WeatherCardLogo />
				<WeatherCardHeader />
				<WeatherCardInfo weatherData={weatherData} />
				<Line width='65%' />
				<ForecastSection />
				{isWeatherDataMoreShow && (
					<WeatherCardDetail weatherData={weatherData} />
				)}
			</View>
			<ShowMoreBtn
				isShow={isWeatherDataMoreShow}
				handleShow={handleWeatherDataMore}
			/>
		</LinearGradient>
	)
})

export default WeatherCard
