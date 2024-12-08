import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  export default function App() {
    const [randomBg, setRandomBg] = useState('#ffffff');
    const generateColor = () => {
      const hexRange = '0123456789ABCDEF';
      let color = '#';
  
      for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16)];
      }
      setRandomBg(color);
    };
  
    return (
      <>
        <StatusBar backgroundColor={'black'} />
        <View style={[styles.container, , {backgroundColor: randomBg}]}>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press Me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionBtn: {
      borderRadius: 12,
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 40,
    },
    actionBtnTxt: {
      fontSize: 24,
      color: 'black',
    },
  });
  