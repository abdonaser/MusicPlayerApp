// SongsScreen.tsx
import TracksList from '@/components/TracksList'
import { colors, screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { ScrollView, View, TextInput, StyleSheet, Platform } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

const SongsScreen = () => {
	const { search, handleOnChangeText } = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})
console.log("search Form Song Screen" , search);

	return (
		<View style={defaultStyles.container}>
			{/* Render TextInput only on Android */}
			{Platform.OS === 'android' && (
				<View style={styles.searchContainer}>
					<EvilIcons name="search" size={28} style={styles.searchIcon} />
					<TextInput
						style={styles.searchBar_TextInput}
						value={search}
						placeholder="Find in songs"
						placeholderTextColor={colors.textMuted}
						onChangeText={handleOnChangeText}
					/>
				</View>
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

const styles = StyleSheet.create({
	searchContainer: {
		width: '95%',
		marginHorizontal: 'auto',
		paddingHorizontal: 10,
		marginBottom: 10,
		position: 'relative',
	},
	searchIcon: {
		color: colors.textMuted,
		position: 'absolute',
		left: 20,
		top: '50%',
		transform: [{ translateY: -12 }],
		zIndex: 99,
	},
	searchBar_TextInput: {
		borderWidth: 1,
		padding: 8,
		paddingLeft: 40,
		borderRadius: 8,
		color: colors.textMuted,
		backgroundColor: colors.bgMuted,
	},
})

export default SongsScreen
