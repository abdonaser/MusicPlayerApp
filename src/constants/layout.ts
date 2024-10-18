//' ios
// import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
// import { colors } from './tokens'

// export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
// 	headerLargeTitle: true,
// 	headerLargeStyle: {
// 		backgroundColor: colors.background,
// 	},
// 	headerLargeTitleStyle: {
// 		color: colors.text,
// 	},
// 	headerTintColor: colors.text,
// 	headerTransparent: true,
// 	headerBlurEffect: 'prominent',
// 	headerShadowVisible: false,
// }

//' android
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from './tokens'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerStyle: {
		backgroundColor: colors.background,
	},
	headerTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerTransparent: false,
	headerShadowVisible: false,
}
