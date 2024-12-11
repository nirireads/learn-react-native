import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {playListData} from '../constants';
import SongInfo from '../components/MusicPlayer/SongInfo';
import SongSlider from '../components/MusicPlayer/SongSlider';
import ControlCenter from '../components/MusicPlayer/ControlCenter';
const {width} = Dimensions.get('window');

export default function MusicPlayer() {
  const [track, setTrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        // const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        const playingTrack = await TrackPlayer.getActiveTrack();
        setTrack(playingTrack);
        break;
    }
  });

  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              source={{
                uri: track?.artwork.toString(),
              }}
            />
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id}
      />
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});
