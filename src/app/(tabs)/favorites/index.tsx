import SearchInput from '@/components/SearchInput'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { Platform, Text, View } from 'react-native'

const FavoritesScreen = () => {
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
			<Text style={defaultStyles.text}>Favorites Screen</Text>
		</View>
	)
}

export default FavoritesScreen
