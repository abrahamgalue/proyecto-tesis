import { memo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import useWeatherData from '@/features/weather/hooks/useWeatherData'
import useSensorData from '@/features/weather/hooks/useSensorData'
import MonitoringBlock from '@/features/weather/components/monitoring/MonitoringBlock'
import WaterLevel from '@/components/icons/WaterLevel'
import FloorTemp from '@/components/icons/FloorTemp'
import TemperatureSubstrate from '@/components/icons/TemperatureSubstrate'
import Humidity from '@/components/icons/Humidity'
import PHLevel from '@/components/icons/PHLevel'
import WaterObstruction from '@/components/icons/WaterObstruction'
import { colors } from '@/constants/colors'
import { GenericSkeleton } from '@/components/ui/skeletons'

function Monitoring() {
	const { isDarkColorScheme } = useColorScheme()

	const weather = useWeatherData()
	const sensor = useSensorData()

	return (
		<View className='mb-12 w-full flex-row flex-wrap justify-between gap-2 px-3'>
			{!sensor.isLoading ? (
				<MonitoringBlock
					icon={<WaterLevel />}
					value={sensor?.data?.waterLevel}
					label='Nivel de Agua'
				/>
			) : (
				<GenericSkeleton width='48%' height={52} className='mb-[15px]' />
			)}
			{!sensor.isLoading ? (
				<MonitoringBlock
					icon={
						<FloorTemp
							width={42}
							height={42}
							color={
								isDarkColorScheme
									? colors.dark.bgIconsPrimary
									: colors.light.bgIconsPrimary
							}
						/>
					}
					value={sensor?.data?.soilTemp}
					label='Temperatura del suelo'
				/>
			) : (
				<GenericSkeleton width='48%' height={52} className='mb-[15px]' />
			)}
			{!sensor.isLoading ? (
				<MonitoringBlock
					icon={
						<TemperatureSubstrate
							width={42}
							height={42}
							color={
								isDarkColorScheme
									? colors.dark.bgIconsPrimary
									: colors.light.bgIconsPrimary
							}
						/>
					}
					value={sensor?.data?.substrateTemp}
					label='Temperatura del sustrato'
				/>
			) : (
				<GenericSkeleton width='48%' height={52} className='mb-[15px]' />
			)}
			{!weather.isLoading ? (
				<MonitoringBlock
					icon={
						<Humidity
							width={42}
							height={42}
							color={
								isDarkColorScheme
									? colors.dark.bgIconsPrimary
									: colors.light.bgIconsPrimary
							}
						/>
					}
					value={weather?.data?.humidity}
					label='Humedad'
				/>
			) : (
				<GenericSkeleton width='48%' height={52} className='mb-[15px]' />
			)}
			{!sensor.isLoading ? (
				<MonitoringBlock
					icon={
						<PHLevel
							width={42}
							height={42}
							color={
								isDarkColorScheme
									? colors.dark.bgIconsPrimary
									: colors.light.bgIconsPrimary
							}
						/>
					}
					value={sensor?.data?.phLevel}
					label='Nivel de PH'
				/>
			) : (
				<GenericSkeleton width='48%' height={52} className='mb-[15px]' />
			)}
			{!sensor.isLoading ? (
				<MonitoringBlock
					icon={
						<WaterObstruction
							width={42}
							height={42}
							color={
								isDarkColorScheme
									? colors.dark.bgIconsPrimary
									: colors.light.bgIconsPrimary
							}
						/>
					}
					value={sensor?.data?.waterFlowObstruction}
					label='Obstrucción canal de agua'
				/>
			) : (
				<GenericSkeleton width='48%' height={52} className='mb-[15px]' />
			)}
		</View>
	)
}

export default memo(Monitoring)
