import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'John Doe',
      status: 'Online',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      uid: '2',
      name: 'Jane Smith',
      status: 'Away',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      uid: '3',
      name: 'Michael Brown',
      status: 'Offline',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      uid: '4',
      name: 'Emily Davis',
      status: 'Busy',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View style={styles.userCard} key={uid}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />

            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  container: {paddingHorizontal: 16, marginBottom: 3},
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 8,
    borderRadius: 4,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {fontSize: 16, fontWeight: '600', color: 'white'},
  userStatus: {fontSize: 12},
});
