import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import SafeAreaComp from '../component/SafeAreaComp'
import { APP_STRINGS } from '../helper/appStrings'
import ButtonComp from '../component/ButtonComp'
import ButtonOutline from '../component/ButtonOutline'

function WelcomeScreen({navigation}) {
  return (
    <SafeAreaComp>
        <View style={{flex: 1, padding: 15, justifyContent: 'center'}}>
          <Image style={styles.image} source={require('../assets/welcome.jpg')} />
          <Text style={styles.text}>Welcome !</Text>
          <Text style={styles.smallText}>{APP_STRINGS.welcome_small_det}</Text>
          <ButtonComp title={'LOGIN'} mL={20} mR={20} mT={40} onPress={() => navigation.navigate(APP_STRINGS.screens.siginIn)} />
          <ButtonOutline title={'SIGN UP'} mT={10} onPress={() => navigation.navigate(APP_STRINGS.screens.signUp)} />
        </View>
    </SafeAreaComp>
  )
}

const styles = StyleSheet.create({
  smallText: {
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    color: '#2C3E50',
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10
  }
})


export default WelcomeScreen;