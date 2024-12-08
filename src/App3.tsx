import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    StyleSheet,
  } from 'react-native';
  import React, {useState} from 'react';
  import * as Yup from 'yup';
  import {Formik} from 'formik';
  import BounchCheckbox from 'react-native-bouncy-checkbox';
  
  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Should be min of 4 characters')
      .max(16, 'Should be max of 16 characters')
      .required('Length is required'),
  });
  
  const App = () => {
    const [password, setPassword] = useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
  
    const generatePasswordString = (passwordLength: number) => {
      let charactersList = '';
      const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?";
      if (upperCase) {
        charactersList += upperCase;
      }
      if (lowerCase) {
        charactersList += lowerCase;
      }
      if (numbers) {
        charactersList += numbers;
      }
      if (symbols) {
        charactersList += symbols;
      }
  
      const passwordResult = createPassword(charactersList, passwordLength);
      setPassword(passwordResult);
      setIsPasswordGenerated(true);
    };
  
    const createPassword = (characters: string, passwordLength: number) => {
      let result = '';
      for (let i = 0; i < passwordLength; i++) {
        const charaterIndex = Math.round(Math.random() * characters.length);
        result += characters.charAt(charaterIndex);
      }
      return result;
    };
  
    const resetPasswordState = () => {
      setPassword('');
      setIsPasswordGenerated(false);
      setLowerCase(true);
      setUpperCase(false);
      setNumbers(false);
      setSymbols(false);
    };
  
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length:</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BounchCheckbox
                    useBuiltInState={false}
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="green"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BounchCheckbox
                    useBuiltInState={false}
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="green"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include numers</Text>
                  <BounchCheckbox
                    useBuiltInState={false}
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="green"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Sylbom</Text>
                  <BounchCheckbox
                    useBuiltInState={false}
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="green"
                  />
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.primaryBtnTxt}> Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
  
          {isPasswordGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long Press to copy</Text>
              <Text selectable={true} style={styles.generatePassword}>
                {password}
              </Text>
            </View>
          ) : null}
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f9fa', // Light background color for readability
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#21209c', // Primary color for the title
      textAlign: 'center',
      marginBottom: 20,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    inputColumn: {
      flex: 1,
    },
    heading: {
      fontSize: 16,
      fontWeight: '600',
      color: '#23120b', // Black color for headings
      marginBottom: 5,
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: '#d9d9d9', // Light gray border
      borderRadius: 8,
      padding: 10,
      flex: 1,
      color: '#21209c', // Primary text color
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 5,
    },
    formActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    primaryBtn: {
      backgroundColor: '#21209c', // Primary button color
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    primaryBtnTxt: {
      color: '#f8f9fa', // White text color for primary button
      fontSize: 16,
      textAlign: 'center',
    },
    secondaryBtn: {
      backgroundColor: '#d9d9d9', // Secondary button background
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    secondaryBtnTxt: {
      color: '#23120b', // Black text color for secondary button
      fontSize: 16,
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#ffffff', // White background for card
      borderRadius: 8,
      padding: 15,
      marginTop: 20,
    },
    cardElevated: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    subTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#21209c', // Primary color for subtitle
      marginBottom: 10,
    },
    description: {
      fontSize: 14,
      color: '#525252', // Dark gray for additional description
      marginBottom: 10,
    },
    generatePassword: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#23120b', // Black text for password
      backgroundColor: '#f1f1f1',
      padding: 10,
      borderRadius: 8,
      textAlign: 'center',
    },
  });
  