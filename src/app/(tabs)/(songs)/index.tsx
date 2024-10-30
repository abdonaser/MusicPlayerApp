import TracksList from '@/components/TracksList'
import { colors, screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { ScrollView, View, StyleSheet, Platform, Text } from 'react-native'
import SearchInput from '@/components/SearchInput'  
import { useMemo } from 'react'
import { trackTitleFilter } from '@/helpers/filter'
import library from "@/assets/data/library.json"
const SongsScreen = () => {
	const { search, handleOnChangeText } = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	const filteredTracks = useMemo(() => {
		if (!search) return library
		return library.filter(trackTitleFilter(search))
	}, [search])


	return (
		<View style={defaultStyles.container}>
			{Platform.OS === 'android' && (
				<SearchInput value={search} placeholder="Find in songs" onChangeText={handleOnChangeText} />
			)}
			{filteredTracks.length <= 0 ? (
				<Text style={styles.emptyText}>No songs found</Text>
			) : (
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					showsVerticalScrollIndicator
					style={{
						paddingHorizontal: screenPadding.horizontal,
					}}
				>
					<TracksList tracks={filteredTracks} />
				</ScrollView>
			)}
		</View>
	)
}
const styles = StyleSheet.create({
	emptyText: {
		color: 'red',
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center',
		marginTop: 50,
		marginHorizontal:20,
		padding: 10,
		borderWidth: 1,
		borderColor: 'red',
		borderRadius: 8,
		backgroundColor: 'rgba(255, 0, 0, 0.1)',
	},
})
export default SongsScreen
