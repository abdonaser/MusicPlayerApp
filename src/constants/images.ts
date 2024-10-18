import unknownArtistImage from '@/assets/unknown_artist.png'
import unknownTrackImage from '@/assets/unknown_track.png'
import { Image } from 'react-native'


export const unknownTrackImageUri = Image.resolveAssetSource(unknownTrackImage).uri
export const unknownArtistImageUri = Image.resolveAssetSource(unknownArtistImage).uri
 

/**
  Image.resolveAssetSource() is useful when dealing with static image assets.
The .uri provides the file path or URL of the image that React Native can use to render it.
The exported constants (unknownTrackImageUri and unknownArtistImageUri) can be used throughout the app wherever these image URIs are needed.
 */ 