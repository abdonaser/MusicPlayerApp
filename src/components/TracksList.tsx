import { FlatList, FlatListProps, StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import library from "@/assets/data/library.json"
import TracksListItem from './TracksListItem'
import { utilsStyles } from '@/styles'
import TrackPlayer, { Track } from 'react-native-track-player'
import { unknownTrackImageUri } from '@/constants/images'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}

const ItemDivider = () => {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 10, marginLeft: 60 }} />
}

const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
	const handelTrackSelect = async (track: Track) => {
		await TrackPlayer.load(track)
		await TrackPlayer.play()
	}
	return (
		<FlatList
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
			data={tracks}
			renderItem={({ item: track }) => (
				<TracksListItem track={track} onTrackSelect={handelTrackSelect} />
			)}
			ItemSeparatorComponent={ItemDivider}
			ListEmptyComponent={
				<View style={styles.emptyContainer}>
					<Text style={utilsStyles.emptyContentText}>No songs found</Text>
					<Image
						source={{ uri: unknownTrackImageUri }}
						style={[utilsStyles.emptyContentImage, { opacity:  0.6 }]}
						resizeMode="cover"
					/>
				</View>
			}
			ListFooterComponent={ItemDivider}
			{...flatlistProps}
			scrollEnabled={false}
		/>
	)
}
 
const styles = StyleSheet.create({
	emptyContainer:{
		alignItems:"center",
		justifyContent:"center"
	}
})
export default TracksList