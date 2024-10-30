import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { unknownTrackImageUri } from '@/constants/images'
import { defaultStyles } from '@/styles'
import { colors, fontSize } from '@/constants/tokens'
import { Track, useActiveTrack } from 'react-native-track-player'

import { Entypo } from "@expo/vector-icons"

export type TrackListItemProps = {
	track: Track,
	onTrackSelect: (track: Track) => void
}

const TracksListItem = ({ track, onTrackSelect: handelTrackSelect }: TrackListItemProps) => {
	const isActiveTrack = useActiveTrack()?.url === track.url

	return (
		<TouchableHighlight onPress={() => handelTrackSelect(track)}>
			<View style={styles.trackItemContainer}>
				<View>
					{/* <FastImage
						source={{
							uri: track.image ?? unknownTrackImageUri,
							priority: FastImage.priority.normal,
						}}
						style={{
							...styles.trackArtworkImage,
							opacity: isActiveTrack ? 0.6 : 1,
						}}
					/> */}
					<Image
						source={{ uri: track.artwork ?? unknownTrackImageUri }}
						style={[styles.trackArtworkImage, { opacity: isActiveTrack ? 0.6 : 1 }]}
						resizeMode="cover"
					/>
				</View>

				{/* //- Track title + artist */}
				<View style={styles.content_Container}>
					<View style={{ width: '100%' }}>
						<Text
							numberOfLines={1}
							style={{
								...styles.trackTitleText,
								color: isActiveTrack ? colors.primary : colors.text,
							}}
						>
							{track.title}
						</Text>

						{track.artist && (
							<Text
								numberOfLines={1}
								style={{
									...styles.trackArtistText,
								}}
							>
								{track.artist}
							</Text>
						)}
					</View>

					<Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	content_Container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})

export default TracksListItem
