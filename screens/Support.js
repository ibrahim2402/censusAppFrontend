import React from  'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const SupportScreen = () => {

    return (
      <View style={styles.container}>
        <Text>Support Page!</Text>
        <Button title= 'View settings' onPress={() => alert('Button Clicked')}/>
        <StatusBar style="auto" />
      </View>
    );
  }
   export default SupportScreen;

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });