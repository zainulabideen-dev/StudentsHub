import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { CommonActions } from '@react-navigation/native'

import SafeAreaComp from '../component/SafeAreaComp'
import ButtonComp from '../component/ButtonComp'
import { APP_STRINGS } from '../helper/appStrings'

function SignInScreen({navigation}) {

  function moveToNext(){
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: APP_STRINGS.screens.dashboard }
        ],
      })
    );
  }

  return (
    <SafeAreaComp>
      <View style={styles.mainContainer}>
        <Image style={{width: 30, height: 30}} source={require('../assets/back.png')} />
        <Text style={styles.text}>Students Hub</Text>
        <Text style={styles.subHead}>Signin to continue</Text>
        <View style={{flex: 1}}>
          <View style={{flex: 0.9, justifyContent: 'center'}}>
            
            <TextInput placeholder='email' keyboardType='email-address' />
            <View style={styles.line}/>
            <TextInput secureTextEntry={true} placeholder='password' style={{marginTop: 10}} />
            <View style={styles.line}/>
            <ButtonComp title={'LOGIN'} mT={30} onPress={() => moveToNext()} />
            <Text style={{textAlign: 'center', marginTop: 5, fontWeight: 'bold'}}>Forgot Password?</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
              <View style={{backgroundColor: '#ABB2B9', height: 2, flex: 0.4}} />
              <Text style={{fontWeight: 'bold', flex: 0.2, textAlign: 'center'}}>or</Text>
              <View style={{backgroundColor: '#ABB2B9', height: 2, flex: 0.4}} />
            </View>
            
            <Text style={styles.textSocial}>Continue With Social Media Signin</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
              <Image style={{width: 30, height: 30}} source={require('../assets/google.png')} />
              <Image style={{width: 30, height: 30, marginLeft: 20}} source={require('../assets/facebook.png')} />
            </View>

          </View>

          <View style={{flex: 0.1}}>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
              <View  style={{flexDirection: 'row'}}>
                <Text>Don't have account?</Text>
                <Text style={{marginLeft: 10, fontWeight: 'bold', color: '#3800EC'}}>Signup</Text>
              </View>
            </View>
          </View>


        </View>
      </View>
    </SafeAreaComp>
  )
}

const styles = StyleSheet.create({
  textSocial: {
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 15
  },
  mainContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
  line: {
    backgroundColor: '#ABB2B9',
    width: '100%',
    height: 2
  },
  subHead: {
    fontSize: 16,
    color: '#ABB2B9',
    fontWeight: 'bold',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 25,
    marginTop: 10,
    color: '#2C3E50',
    fontWeight: 'bold'
  },
})

export default SignInScreen;