import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../components/Context';


export function DrawerContent(props){

  const [isScreenMode, setIsScreenMode] = React.useState(false);
  const {signOut}  = React.useContext(AuthContext);

  const toggleTheme = () => {
       setIsScreenMode(!isScreenMode);
  }

    return(
       <View style={{flex:1}}>
           <DrawerContentScrollView {...props}>
               <View style=  {styles.drawerContent}>
                   <View style= {styles.userInfoSection}>
                       <View style={{flexDirection: 'row', marginTop: 15}}>
                           <Avatar.Image 
                           source={{
                               uri:  ''
                           }} 
                           size= {50}/>
                           <View style={{marginLeft: 15, flexDirection: 'column'}}>
                               <Title style={styles.title}>SomeOne Name</Title>
                               <Caption style={styles.caption}>someone@email.com
                               </Caption>
                           </View>
                       </View>
                      <View style={styles.row}>
                          <View style={styles.section}>
                             <Paragraph style={[styles.paragraph, 
                                styles.caption]}>4</Paragraph>
                             <Caption style={styles.caption}>Children</Caption>
                          </View>
                          <View style={styles.section}>
                             <Paragraph style={[styles.paragraph, 
                                styles.caption]}>4210</Paragraph>
                             <Caption style={styles.caption}>Household</Caption>
                          </View>
                      </View>
                        
                   </View>
                   <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem icon={({color, size}) => (
                          <Icon name='home-outline' color={color} size={size} />
                         )} 
                           label= 'Home'
                           onPress= { () => {props.navigation.navigate('Home')}} />

                        <DrawerItem icon={({color, size}) => (
                          <Icon name='account-outline' color={color} size={size} />
                         )} 
                           label= 'Profile'
                           onPress= { () => {props.navigation.navigate('Profile')}} />

                        <DrawerItem icon={({color, size}) => (
                          <Icon name='account-check-outline' color={color} size={size} />
                         )} 
                           label= 'Support'
                           onPress= { () => {props.navigation.navigate('SupportScreen')}} />

                        <DrawerItem icon={({color, size}) => (
                          <Icon name='settings-outline' color={color} size={size} />
                         )} 
                           label= 'Settings'
                           onPress= { () => {props.navigation.navigate('SettingsScreen')}} />
                   </Drawer.Section>
                   <Drawer.Section title='Preferences'>
                         <TouchableRipple onPress={() => {toggleTheme()}}>
                             <View style={styles.preference}>
                                 <Text>Screen Mode</Text>
                                  <View pointerEvents='none'>
                                  <Switch value={isScreenMode}/>
                                  </View>
                             </View>
                         </TouchableRipple>
                   </Drawer.Section>
               </View>
           </DrawerContentScrollView>
           
           <Drawer.Section style={styles.bottomDrawerSection}>
               <DrawerItem icon={({color, size}) => (
                   <Icon name='exit-to-app' color={color} size={size} />
               )} 
               label= 'sign out'
               onPress= { () => {signOut()}}
               />
           </Drawer.Section>
           
       </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection:  {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection:  {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
});