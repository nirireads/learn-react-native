import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from '../components/App2/FlatCards';
import ElevatedCards from '../components/App2/ElevatedCards';
import FancyCard from '../components/App2/FancyCard';
import ActionCard from '../components/App2/ActionCard';
import ContactList from '../components/App2/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
