import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const HomeScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text>Population Census app here we come app!</Text>
        <Button title= 'Go to registration' onPress={() => navigation.navigate('RegisterPage')}/>
        <StatusBar style="auto" />
      </View>
    );
  }
   export default HomeScreen;

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });