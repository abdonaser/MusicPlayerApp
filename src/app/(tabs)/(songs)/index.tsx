import TracksList from '@/components/TracksList'
import { colors, screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import SearchInput from '@/components/SearchInput'  

const SongsScreen = () => {
	const { search, handleOnChangeText } = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	return (
		<View style={defaultStyles.container}>
			{Platform.OS === 'android' && (
				<SearchInput value={search} placeholder="Find in songs" onChangeText={handleOnChangeText} />
			)}

			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator
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
