import React from 'react'
import { View, Text, Image } from 'react-native'
import { APP_STRINGS } from '../helper/appStrings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import UploadScreen from '../screens/UploadScreen'

const Tab = createBottomTabNavigator();

function DashboardScreen({navigation}) {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,
      tabBarActiveTintColor: '#3800EC', tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
        <Image style={{width: 20, height: 20, marginTop: 5}}
        source={require('../assets/home.png')} />),
      }}
      name="Home"
      component={HomeScreen} />

      <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
        <Image style={{width: 20, height: 20, marginTop: 5}}
        source={require('../assets/upload.png')} />),
      }}
      name="Upload"
      component={UploadScreen} />

      <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
        <Image style={{width: 20, height: 20, marginTop: 5}}
        source={require('../assets/user.png')} />),
      }}
      name="Profile"
      component={ProfileScreen} />

    </Tab.Navigator>
  )
}


export default  DashboardScreen;