import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import MusicPlayer from './screens/MusicPlayer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
