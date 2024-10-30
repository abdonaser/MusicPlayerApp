declare module 'react-native-track-player' {
	export const CAPABILITY_PLAY: string
	export const CAPABILITY_PAUSE: string
	export const CAPABILITY_STOP: string
	export const CAPABILITY_SEEK: string
	export const CAPABILITY_SKIP: string

	export function setupPlayer(): Promise<void>
	export function updateOptions(options: {
		stopWithApp?: boolean
		capabilities?: string[]
		compactCapabilities?: string[]
		notificationCapabilities?: string[]
	}): Promise<void>
	export function add(track: {
		id: string
		url: string
		title: string
		artist?: string
		artwork?: string
		rating?: number
		playlist?: string[]
	}): Promise<void>
	export function destroy(): Promise<void>
	export function registerPlaybackService(service: () => Promise<void>): void
}
