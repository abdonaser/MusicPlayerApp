import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
	 

	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

// Root navigation setup for your app
const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}

export default App
