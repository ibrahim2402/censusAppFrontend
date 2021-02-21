import React from  'react';
import { StyleSheet, ScrollView,  Text, StatusBar, View, Button, TouchableOpacity, Dimensions, Platform, TextInput
} from 'react-native';


import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';



const AddressScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    email: '',
    check_textInputChange: false
  });

  const textInputChange = (val) =>{
      if( val.length != 0){
        setData({
          ...data,
          email: val,
          check_textInputChange: true
        });
      }
      else{
        setData({
          ...data,
          email: val,
          check_textInputChange: false
        });
      }
  }

    return (
      <ScrollView style={styles.scrollView}>

      <View style={styles.container}>
        <StatusBar backgroundColor='green' barStyle='light-content'/>
        <View style={styles.header}>
          <Text style={styles.text_header}>Residence Details</Text>
        </View>
        <Animatable.View style={styles.footer}
        animation='fadeInUpBig'>
          <Text style={styles.text_footer}>Country</Text>
          <View style={styles.action}>
              <FontAwesome
              name='user-o'
              color='#05375a'
              size={20}/>
              <TextInput
              placeholder= 'Country'
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
          <Text style={styles.text_footer}>State</Text>
          <View style={styles.action}>
              <FontAwesome
              name='user-o'
              color='#05375a'
              size={20}/>
              <TextInput
              placeholder= 'State'
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

          <Text style={styles.text_footer}>LGA</Text>
          <View style={styles.action}>
              <FontAwesome
              name='user-o'
              color='#05375a'
              size={20}/>
              <TextInput
              placeholder= 'Local Area'
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

          <Text style={styles.text_footer}>Street</Text>
          <View style={styles.action}>
              <FontAwesome
              name='user-o'
              color='#05375a'
              size={20}/>
              <TextInput
              placeholder= 'Street Name'
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

          <Text style={[styles.text_footer, {marginTop: 35}]}>NIN</Text>
          <View style={styles.action}>
              <FontAwesome
              name='lock'
              color='#05375a'
              size={20}/>
              <TextInput
              placeholder= 'Your Paasword'
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize='none'/>
              
          </View>

          <View style={styles.button}>
            
            <LinearGradient
            colors={['green', '#01ab9d']}
            style={styles.signIn}>
            <Text style={[styles.text_sign, 
              {color: '#fff'}]}>BACK</Text>
            </LinearGradient>
          
           
              <TouchableOpacity onPress={() => navigation.navigate('FamilyDetailScreen')}
                style= {[styles.signIn, {
                borderColor: '#009387',
                borderWidth: 1
             }]}>
              <Text style={[styles.text_sign, 
                {color: '#009387'}]}>NEXT</Text>
             </TouchableOpacity>
           
            
          </View>
        </Animatable.View>
        
      </View>
      </ScrollView>
    );
  }
   export default AddressScreen;

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
     
    },
    scrollView:{
      height: '100%',
      width: '100%',
      margin: 0,
      alignSelf: 'center',
      padding: 0,
      borderWidth: 1,
      borderRadius: 5,
      borderColor:  'transparent'
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
    },
    footer:  {
      flex: 4,
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
      flexDirection: 'row',
      marginTop: 50,
      justifyContent: 'space-between'
    },
    button2:{
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    signIn: {
      width: '30%',
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