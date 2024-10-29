import { FlatList, FlatListProps, StyleSheet, View } from 'react-native'
import React from 'react'
import library from "@/assets/data/library.json"
import TracksListItem from './TracksListItem'
import { utilsStyles } from '@/styles'


export type TrackListProps =Partial<FlatListProps<unknown>> 
const ItemDivider =()=>{
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 10, marginLeft: 60 }} />
}
const TracksList = ({ ...flatlistProps }: TrackListProps) => {
	return (
		<FlatList
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
			data={library}
			renderItem={({ item: track }) => (
				<TracksListItem track={{ ...track, image: track.artwork }} />
			)}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}  
			{...flatlistProps}
			scrollEnabled={false}
		/>
	)
}
 
export default TracksList
