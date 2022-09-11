import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import SafeAreaComp from '../component/SafeAreaComp';
import SeachListComp from '../component/SeachListComp';

function HomeScreen({navigation}) {
  return (
    <SafeAreaComp>
      <View style={styles.header}>
        <View style={{flex: 0.8}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{width: 30, height: 30}} source={require('../assets/back.png')} />
          </TouchableOpacity>
          <Text style={{fontSize: 17, marginTop: 10}}>Hello</Text>
          <Text style={styles.name}>Zain Ul Abideen</Text>
        </View>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Image style={{width: 40, height: 40}} source={require('../assets/avatar.png')} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.search}>
            <TextInput placeholder='search' />
            <Image style={{width: 20, height: 20}} source={require('../assets/search.png')} />
          </View>
          <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 30, height: 30}} source={require('../assets/filter.png')} />
          </View>
        </View>
        <View style={{paddingBottom: 10}}>
          <SeachListComp />
          <SeachListComp />
          <SeachListComp />
        </View>
      </View>
    </SafeAreaComp>
  )
}

const styles = StyleSheet.create({
  search: {
    flex: 0.8,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2C3E50'
  },
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 10,
  },
  header: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    color: '#2C3E50',
    fontWeight: 'bold'
  }
})


export default HomeScreen;