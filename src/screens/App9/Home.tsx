import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import ProductItem from '../../components/App9/ProductItem';
import Seprator from '../../components/App9/Seprator';
import {PRODUCTS_LIST} from '../../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seprator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Details', {product: item})}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  smallText: {
    color: '#000000',
  },
});
