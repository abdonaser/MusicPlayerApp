import { View, Text, TouchableOpacity, Image, StyleSheet, ViewProps } from 'react-native'
import React from 'react'
import { useActiveTrack } from 'react-native-track-player'
import { unknownTrackImageUri } from '@/constants/images'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { PlayPauseButton, SkipToNextButton } from './PlayerControls'
import { useLastActiveTrack } from '@/hooks/UseLastActivetrack'

const FloatingPlayer = ({ style }: ViewProps) => {
    const activeTrack = useActiveTrack()
    const lastActiveTrack = useLastActiveTrack()


    const displayedTrack = activeTrack ?? lastActiveTrack

    if (!displayedTrack) return null
    return (
        <TouchableOpacity activeOpacity={0.9} style={[styles.container, style]}>
            <>
                <Image
                    source={{ uri: displayedTrack.artwork || unknownTrackImageUri }}
                    style={[styles.trackArtworkImage]}
                    resizeMode="cover"
                />
                <View style={styles.trackTitleContainer}>
                    <Text
                        numberOfLines={1}
                        style={{
                            ...styles.trackTitle,
                            color: colors.text,
                        }}
                    >
                        {displayedTrack.title}
                    </Text>
                </View>
                <View style={styles.trackControlsContainer}>
                    <PlayPauseButton iconSize={24} />
                    <SkipToNextButton iconSize={22} />
                </View>
            </>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252525',
        padding: 8,
        borderRadius: 12,
        paddingVertical: 8,
    },
    trackArtworkImage: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    trackTitleContainer: {
        flex: 1,
        overflow: 'hidden',
        marginLeft: 10,
    },
    trackTitle: {
        ...defaultStyles.text,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
    },
    trackControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        marginRight: 16,
        paddingLeft: 16,
    },
})
export default FloatingPlayer