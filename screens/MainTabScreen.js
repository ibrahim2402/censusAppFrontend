import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import RegisterScreen from './RegistrationScreen';
import AddressScreen from './AddressScreen';
import FamilyScreen from './FamilyDetailScreen';
import HomeScreen from './HomeScreen';
import DiscoverScreen from './Discover';
import ProfileScreen from './Profile';
import NotificationScreen from './Notification';

const HomeStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const AddressStack = createStackNavigator();
const FamilyStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const DiscoverStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (

        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverStackScreen}
            options={{
              tabBarLabel: 'Discover',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );

export default MainTabScreen;

const HomeStackScreen = ({navigation})  => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'green'},
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold'}
    }}>

      <HomeStack.Screen name='HomeScreen' component= {HomeScreen} options={{
        title: 'LaunchPage',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='green'
          onPress={() => navigation.openDrawer()}/>
        )
      }}/>
    
    </HomeStack.Navigator>

);

const RegisterStackScreen = ({navigation})  => (
  <RegisterStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: 'green'},
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold'}
  }}>

    <RegisterStack.Screen name='Home' component= {RegisterScreen} options={{
      title: 'RegistrationPage',
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25} backgroundColor='green'
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  
  </RegisterStack.Navigator>

);

const AddressStackScreen = ({navigation})  => (
  <AddressStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: 'green'},
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold'}
  }}>

    <AddressStack.Screen name='Home' component= {AddressScreen} options={{
      title: 'AddressPage',
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25} backgroundColor='green'
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  
  </AddressStack.Navigator>

);

const FamilyStackScreen = ({navigation})  => (
  <FamilyStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: 'green'},
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold'}
  }}>

    <FamilyStack.Screen name='Home' component= {FamilyScreen} options={{
      title: 'FamilyDetailPage',
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25} backgroundColor='green'
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  
  </FamilyStack.Navigator>

);

const ProfileStackScreen = ({navigation})  => (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'green'},
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold'}
    }}>
  
      <ProfileStack.Screen name='Home' component= {ProfileScreen} options={{
        title: 'ProfilePage',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='green'
          onPress={() => navigation.openDrawer()}/>
        )
      }}/>
    
    </ProfileStack.Navigator>
  
  );
  const NotificationStackScreen = ({navigation})  => (
    <NotificationStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'green'},
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold'}
    }}>
  
      <NotificationStack.Screen name='Home' component= {NotificationScreen} options={{
        title: 'NotificationPage',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='green'
          onPress={() => navigation.openDrawer()}/>
        )
      }}/>
    
    </NotificationStack.Navigator>
  
  );
  const DiscoverStackScreen = ({navigation})  => (
    <DiscoverStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'green'},
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold'}
    }}>
  
      <DiscoverStack.Screen name='Home' component= {DiscoverScreen} options={{
        title: 'DiscoverPage',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='green'
          onPress={() => navigation.openDrawer()}/>
        )
      }}/>
    
    </DiscoverStack.Navigator>
  
  );