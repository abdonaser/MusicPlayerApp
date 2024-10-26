// useNavigationSearch.ts
import { colors } from '@/constants/tokens'
import { useNavigation } from 'expo-router'
import { useLayoutEffect, useState } from 'react'
import { SearchBarProps } from 'react-native-screens'
import { Platform } from 'react-native'

const defaultSearchOptions: SearchBarProps = {
	tintColor: colors.primary,
	hideWhenScrolling: false,
}

export const useNavigationSearch = ({
	searchBarOptions,
}: {
	searchBarOptions?: SearchBarProps
}) => {
	const [search, setSearch] = useState('')
	const navigation = useNavigation()

	const handleOnChangeText = (text: string) => {
		setSearch(text)
	}


	
	useLayoutEffect(() => {
		// Set navigation search options only on iOS
		if (Platform.OS === 'ios') {
			navigation.setOptions({
				headerSearchBarOptions: {
					...defaultSearchOptions,
					...searchBarOptions,
					onChangeText: ({ nativeEvent: { text } }) => handleOnChangeText(text),
				},
			})
		}
	}, [navigation, searchBarOptions])

	return { search, handleOnChangeText }
}
