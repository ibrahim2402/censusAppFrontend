import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import AddressScreen from './AddressScreen';
import FamilyDetailScreen from './FamilyDetailScreen';
import EmploymentScreen from './EmploymentScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (

    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <RootStack.Screen name='SignInScreen' component={SignInScreen}/>
        <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>
        <RootStack.Screen name='AddressScreen' component={AddressScreen}/>
        <RootStack.Screen name='FamilyDetailScreen' component={FamilyDetailScreen}/>
        <RootStack.Screen name='EmploymentScreen' component={EmploymentScreen}/>
    </RootStack.Navigator>

);
export default RootStackScreen;