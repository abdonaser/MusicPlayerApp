import {FlatList, FlatListProps } from 'react-native'
import React from 'react'
import library from "@/assets/data/library.json"
import TracksListItem from './TracksListItem'


export type TrackListProps =Partial<FlatListProps<unknown>> 
const TracksList = ({ ...flatlistProps }: TrackListProps) => {
	return (
		<FlatList
			data={library}
			renderItem={({ item: track }) => (
				<TracksListItem track={{ ...track, image: track.artwork }} />
			)}
			{...flatlistProps}
		/>
	)
}

export default TracksList
