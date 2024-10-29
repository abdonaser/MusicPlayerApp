// SearchInput.tsx
import React, { useState } from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { EvilIcons, FontAwesome6 } from '@expo/vector-icons'
import { colors } from '@/constants/tokens';

interface SearchInputProps {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, placeholder, onChangeText }) => {
	const [isPressed, setIsPressed] = useState(false)
	return (
		<View style={styles.searchContainer}>
			<EvilIcons name="search" size={28} style={styles.searchIcon} />
			<TextInput
				style={styles.searchBar_TextInput}
				value={value}
				placeholder={placeholder}
				placeholderTextColor={colors.textMuted}
				onChangeText={onChangeText}
			/>
			{value.length > 0 && (
				<TouchableOpacity
					style={styles.xMarkIcon}
					onPress={() => onChangeText('')}
					onPressIn={() => setIsPressed(true)}
					onPressOut={() => setIsPressed(false)}
				>
					<FontAwesome6
						name="circle-xmark"
						size={25}
						style={{ color: isPressed ? colors.primary : colors.textMuted }}
					/>
				</TouchableOpacity>
			)}
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
    xMarkIcon: {
        position: 'absolute',
        right: 20,
        top: '50%',
        transform: [{ translateY: -12 }],
        zIndex: 99,
    },
    searchBar_TextInput: {
        borderWidth: 1,
        padding: 8,
        paddingLeft: 42,
        borderRadius: 8,
        color: colors.textMuted,
        backgroundColor: colors.bgMuted,
    },
});

export default SearchInput;
