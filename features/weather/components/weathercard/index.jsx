import { memo } from 'react'
import { View } from 'react-native'
import useToggleWeatherDetails from '@/features/weather/hooks/useToggleWeatherDetails'
import Card from '@/components/ui/card'
import WeatherCardLogo from '@/features/weather/components/weathercard/WeatherCardLogo'
import WeatherCardHeader from '@/features/weather/components/weathercard/WeatherCardHeader'
import WeatherCardInfo from '@/features/weather/components/weathercard/WeatherCardInfo'
import Line from '@/components/ui/line'
import ForecastSection from '@/features/weather/components/forecast'
import WeatherCardDetail from '@/features/weather/components/weathercard/WeatherCardDetail'
import ShowMoreBtn from '@/features/weather/components/weathercard/ShowMoreBtn'
import useWeatherData from '@/features/weather/hooks/useWeatherData'

function WeatherCard() {
	const { data, isLoading } = useWeatherData()
	const { showDetails, toggleDetails } = useToggleWeatherDetails()

	return (
		<Card className='mb-[30px]'>
			<View className='relative w-full rounded-3xl border border-primary p-5'>
				<WeatherCardLogo />
				<WeatherCardHeader />
				<WeatherCardInfo data={data} isLoading={isLoading} />
				<Line width='65%' />
				<ForecastSection />
				{showDetails && <WeatherCardDetail data={data} isLoading={isLoading} />}
			</View>
			<ShowMoreBtn isShow={showDetails} handleShow={toggleDetails} />
		</Card>
	)
}

export default memo(WeatherCard)
