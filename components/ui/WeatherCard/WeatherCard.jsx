import { memo } from 'react'
import GradientBackground from '../GradientBackground'
import { View } from 'react-native'
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
	return (
		<GradientBackground className='w-full mb-[30px] relative' type='card'>
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
		</GradientBackground>
	)
})

export default WeatherCard
