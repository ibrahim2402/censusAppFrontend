import React from  'react';
import { StyleSheet, 
  Text, 
  StatusBar, 
  View, 
  Button, 
  TouchableOpacity, 
  Dimensions, Platform, TextInput, Alert
} from 'react-native';


import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'

import {AuthContext} from '../components/Context';
import {Users}  from '../model/users';

const SignInScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });

  const {signIn}  = React.useContext(AuthContext);

  const textInputChange = (val) =>{
      if( val.length != 0){
        setData({
          ...data,
          username: val,
          check_textInputChange: true
        });
      }
      else{
        setData({
          ...data,
          username: val,
          check_textInputChange: false
        });
      }
  }

     const loginHandle = (pass, userName) => {

      const foundUser = Users.filter( item => {
         pass = item.password;
        userName = item.username;

        console.log('Array: ', item.password);
        return [pass, userName]

       // return userName=== two && pass===one;
        
        //return userName == item.username, pass == item.password;
        
        
    } ); 
    console.log(foundUser)
    
    //console.log('Array1: ', foundUser[1].password);

   /*  if ( data.username.length == 0 || data.password.length == 0 ) {
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
            {text: 'Okay'}
        ]);
        return;
    }
    console.log('2nd out: ',foundUser)

    if ( foundUser.length == 0 ) {
        Alert.alert('Invalid User!', 'Username or password is incorrect.', [
            {text: 'Okay'}
        ]);
        return;
    } */
        console.log('UserCred: ', foundUser);
        signIn(foundUser);
     }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='green' barStyle='light-content'/>
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View style={styles.footer}
        animation='fadeInUpBig'>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
              <FontAwesome
              name='user-o'
              color='#05375a'
              size={20}/>
              <TextInput
              placeholder= 'Your Email'
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(val) => textInputChange(val)}/>

              {data.check_textInputChange ? 
              <Animatable.View>
              <Feather
              name='check-circle'
              color= 'green'
              size={30}/> 
              </Animatable.View>
              : null}
              
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
          <View style={styles.action}>
              <FontAwesome
              name='lock'
              color='#05375a'
              size={20}/>
              <TextInput
              placeholder= 'Your Paasword'
              
              style={styles.textInput}
              autoCapitalize='none'/>
              
          </View>

          <TouchableOpacity>
            <Text style= {{color:  '#009387', marginTop: 15}}> Forget Password</Text>
          </TouchableOpacity>

          <View style={styles.button}>
            <TouchableOpacity 
            style= {styles.signIn}
            secureTextEntry='true'
            onPress={() => {loginHandle(data.username, data.password)}}>
              
                <LinearGradient
                  colors={['green', '#01ab9d']}
                  style={styles.signIn}>
                <Text style={[styles.text_sign, 
              {color: '#fff'}]}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
             style= {[styles.signIn, {
               borderColor: '#009387',
               borderWidth: 1,
               marginTop: 15
             }]}>
              <Text style={[styles.text_sign, 
                {color: '#009387'}]}>Register</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
        
      </View>
    );
  }
   export default SignInScreen;

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
     
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
    },
    footer:  {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
    },
    text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize:30
    },
    text_footer: {
      color: '#05375a',
      fontSize: 18
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
    },
    textInput: {
      flex: 1,
      marginRight: Platform.OS == 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a'
    },
    button: {
      alignItems:  'center',
      marginTop: 50
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    text_sign: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  });