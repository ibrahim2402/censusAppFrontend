import React from  'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const NotificationScreen = () => {

    return (
      <View style={styles.container}>
        <Text>Notification Page!</Text>
        <Button title= 'View settings' onPress={() => alert('Button Clicked')}/>
        <StatusBar style="auto" />
      </View>
    );
  }
   export default NotificationScreen;

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });