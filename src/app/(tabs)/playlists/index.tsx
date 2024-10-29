import SearchInput from '@/components/SearchInput'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { useRef } from 'react'
import { Text, View, Button, Platform } from 'react-native'

const PlaylistsScreen = () => {
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
			<Text style={defaultStyles.text}>Playlists Screen</Text>
		</View>
	)
}

export default PlaylistsScreen
