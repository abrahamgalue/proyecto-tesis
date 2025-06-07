import { memo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import MonitoringBlock from '@/components/ui/Monitoring/MonitoringBlock'
import {
	FloorTempIcon,
	HumidityIcon,
	PHLevelIcon,
	TemperatureSubstrateIcon,
	WaterLevel,
	WaterObstructionIcon
} from '@/components/ui/Icons/Icons'
import { colors } from '@/constants/colors'
import { GenericSkeleton } from '@/components/ui/skeletons'

const Monitoring = memo(function Monitoring({ weatherData }) {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<View className='mb-12 w-full flex-row flex-wrap justify-between px-3'>
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
							isDarkColorScheme ? colors.dark.baseIcons : colors.light.baseIcons
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
							isDarkColorScheme ? colors.dark.baseIcons : colors.light.baseIcons
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
							isDarkColorScheme ? colors.dark.baseIcons : colors.light.baseIcons
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
							isDarkColorScheme ? colors.dark.baseIcons : colors.light.baseIcons
						}
					/>
				}
				value='05%'
				label='Obstrucción canal de agua'
			/>
		</View>
	)
})

export default Monitoring
