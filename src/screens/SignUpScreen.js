import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import SafeAreaComp from '../component/SafeAreaComp'
import ButtonComp from '../component/ButtonComp'

function SignUpScreen() {
  return (
  <SafeAreaComp>
    <View style={styles.mainContainer}>
      <Image style={{width: 30, height: 30}} source={require('../assets/back.png')} />
      <Text style={styles.text}>Students Hub</Text>
      <Text style={styles.subHead}>Create a new account</Text>
      <View style={{flex: 1}}>
        <View style={{flex: 0.9, justifyContent: 'center'}}>
          
          <TextInput placeholder='email' keyboardType='email-address' />
          <View style={styles.line}/>
          <TextInput secureTextEntry={true} placeholder='password' style={{marginTop: 10}} />
          <View style={styles.line}/>
          <ButtonComp title={'SIGN UP'} mT={30} />

        </View>

        <View style={{flex: 0.1}}>
          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <View  style={{flexDirection: 'row'}}>
              <Text>Already have an account?</Text>
              <Text style={{marginLeft: 10, fontWeight: 'bold', color: '#3800EC'}}>Signin</Text>
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


export default SignUpScreen;