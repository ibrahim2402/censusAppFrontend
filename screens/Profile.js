import React from  'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const ProfileScreen = () => {

    return (
      <View style={styles.container}>
        <Text>Profile Page!</Text>
        <Button title= 'View settings' onPress={() => alert('Button Clicked')}/>
        <StatusBar style="auto" />
      </View>
    );
  }
   export default ProfileScreen;

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });