import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Seprator() {
  return (
    <View style={styles.seprator}>
      <Text>Seprator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  seprator: {
    height: 0.8,
    backgroundColor: '#CAD5E2',
  },
});
