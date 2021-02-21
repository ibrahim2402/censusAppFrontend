import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const RegisterScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text>Start Registration!</Text>
        <br/>
        <Button title='NEXt' onPress={() => navigation.navigate('AddressPage')}/>
        <StatusBar style="auto" />
      </View>
    );
  }
  export default RegisterScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });