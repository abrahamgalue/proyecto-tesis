import { memo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import useWeatherData from '@/hooks/useWeatherData'
import MonitoringBlock from '@/components/ui/Monitoring/MonitoringBlock'
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

	const { data, isLoading } = useWeatherData()

	return (
		<View className='mb-12 w-full flex-row flex-wrap justify-between px-3'>
			<MonitoringBlock
				icon={<WaterLevel />}
				value='60%'
				label='Nivel de Agua'
			/>
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
				value='25°C'
				label='Temperatura del suelo'
			/>
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
				value='20°C'
				label='Temperatura del sustrato'
			/>
			{!isLoading ? (
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
					value={data.humidity}
					label='Humedad'
				/>
			) : (
				<GenericSkeleton width='48%' height={42} />
			)}
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
				value='6,83'
				label='Nivel de PH'
			/>
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
				value='05%'
				label='Obstrucción canal de agua'
			/>
		</View>
	)
}

export default memo(Monitoring)
