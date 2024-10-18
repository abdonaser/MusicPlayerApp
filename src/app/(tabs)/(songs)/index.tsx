import  TracksList from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { ScrollView,  View } from 'react-native'

const SongsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={true}
				showsHorizontalScrollIndicator={true}
				style={{
					paddingHorizontal: screenPadding.horizontal,
				}}
			>
				<TracksList />
			</ScrollView>
		</View>
	)
}
 
export default SongsScreen
