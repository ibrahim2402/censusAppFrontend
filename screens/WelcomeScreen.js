import React from  'react';
import { StyleSheet, StatusBar, Text, View, Button, Dimensions, Image, TouchableOpacity } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';



const WelcomeScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='green' barStyle='light-content'/>
        <View style={styles.header}>
            <Animatable.Image
            animation='bounceIn'
             
            source= {require('../assets/ng_logo3.jpg')}
            style= {styles.logo}
            resizeMode= 'stretch'
            />
        </View>
        <Animatable.View style={styles.footer}
              animation='fadeInUpBig'>
              <Text style={styles.title}>Population Census</Text>
              <Text style={styles.text}>Be counted for...</Text>
        <View style={styles.button}>
            <TouchableOpacity onPress= {() => navigation.navigate('SignInScreen')}>
                    <LinearGradient 
                    colors={['green', '#01ab9d']}
                    style= {styles.signIn}>
                        <Text style= {styles.textSign}>Get Started</Text>
                        <MaterialIcons name='navigate-next' color='#fff' size={20}/>
                    </LinearGradient>
            </TouchableOpacity>
        </View>
          

        </Animatable.View>
      </View>
    );
  }
   export default WelcomeScreen;

   const {height} = Dimensions.get('screen');
   const height_logo = height * 0.28;

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: height_logo / 2
    },
    title:{
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });