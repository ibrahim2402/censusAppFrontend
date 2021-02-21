import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import SupportScreen from './screens/Support';
import SettingsScreen from './screens/SettingsScreen';

import {AuthContext} from './components/Context'

import RootStackScreen from './screens/RootStackScreen';
import { useEffect } from 'react';


const Drawer = createDrawerNavigator();
const SupportStack = createStackNavigator();
const SettingStack = createStackNavigator();



export default function App() {
 /* const [isLoading, setIsLoading] = React.useState(true);
 const [userToken, setUserToken] = React.useState(null); */

const initialLoginState = {
   isLoading: true,
   userName: null,
   userToken: null,
};

const loginReducer = (prevState, action) => {
    switch(action.type){
      case'RETRIEVE':
      return{
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
      case'LOGIN':
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
      case'LOGOUT':
      return{
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
      case'REGISTER':
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };

    }
};

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

const authContext = React.useMemo(() => ({

  signIn: async(foundUser) => {
    // setUserToken('abcd');
    // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try{
          await AsyncStorage.setItem('userToken', userToken);

        } catch(e){
          console.log(e);
        }
  
    /*  if (username ==='1234' && password ==='asas') {
          console.log("3 is greater than 1");
          userToken = 'asdgnk'
        } */
    console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
  },

  signOut: async() => {
    // setUserToken(null);
    // setIsLoading(false);
    try {
      await AsyncStorage.removeItem('userToken');
    } catch(e) {
      console.log(e);
    }

    dispatch({type: 'LOGOUT' });
  },
  signUp: () => {
    // setUserToken('fhkk');
    // setIsLoading(false);
  },


}), []);

    useEffect(() =>  {
      setTimeout(async () => {
        let userToken;
        userToken = null;
        try {
          userToken = await AsyncStorage.getItem('userToken');
        } catch(e) {
          console.log(e);
        }
        //console.log('user token: ', userToken);
        dispatch({type: 'RETRIEVE', token: userToken});
      }, 1000);
   }, []);

 if(loginState.isLoading){

   return(
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <ActivityIndicator size='large'/>
     </View>
   );
 }

    return(
   <AuthContext.Provider  value={authContext}>
       <NavigationContainer>

          { loginState.userToken !== null ? (
         <Drawer.Navigator drawerContent ={props => <DrawerContent {...props}/>} >

              <Drawer.Screen name= 'HomeScreen' component={MainTabScreen}/>
              <Drawer.Screen name= 'SettingsScreen' component={SettingStackScreen}/>
              <Drawer.Screen name= 'SupportScreen' component={SupportStackScreen}/>

        </Drawer.Navigator> 
    )
    : <RootStackScreen/>
  }
      {/*  <Stack.Navigator screenOptions={{
         headerStyle: { backgroundColor: 'green'},
         headerTintColor: '#fff',
         headerTitleStyle: { fontWeight: 'bold'}
       }}>
          <Stack.Screen name= 'LaunchPage' component={HomeScreen} />
          <Stack.Screen name= 'RegisterPage' component={RegisterScreen} options={ {title: 'Personal Details'}}/>
          <Stack.Screen name= 'AddressPage' component={AddressScreen}/>
          <Stack.Screen name= 'FamilyPage' component={FamilyScreen}/>
       </Stack.Navigator>   */}  
  </NavigationContainer>
  </AuthContext.Provider>
);
 
}

const SupportStackScreen = ({navigation})  => (
  <SupportStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: 'green'},
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold'}
  }}>

    <SupportStack.Screen name='SupportScreen' component= {SupportScreen} options={{
      title: 'SupportPage',
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25} backgroundColor='green'
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  
  </SupportStack.Navigator>

);

const SettingStackScreen = ({navigation})  => (
  <SettingStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: 'green'},
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold'}
  }}>

    <SettingStack.Screen name='SettingsScreen' component= {SettingsScreen} options={{
      title: 'SettingPage',
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25} backgroundColor='green'
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  
  </SettingStack.Navigator>

);