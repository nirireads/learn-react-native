import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

export default function ControlCenter() {
  const playbackState = usePlaybackState();

  // Skip to the next track
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  // Skip to the previous track
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  // Toggle playback
  const togglePlayback = async (playback: State | undefined) => {
    const currentTrack = await TrackPlayer.getActiveTrack();
    if (currentTrack !== null && playback !== undefined) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else if (playback === State.Playing) {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Skip to previous */}
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>

      {/* Play/Pause toggle */}
      <Pressable onPress={() => togglePlayback(playbackState.state)}>
        <Icon
          style={[styles.icon, styles.playButton]}
          name={playbackState.state === State.Playing ? 'pause' : 'play-arrow'}
          size={75}
        />
      </Pressable>

      {/* Skip to next */}
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
