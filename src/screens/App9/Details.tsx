import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// navigation
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route}: DetailsProps) {
  const {productId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details {productId}</Text>
      <Button title="go home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  smallText: {
    color: '#000000',
  },
});
