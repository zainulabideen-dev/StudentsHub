import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { APP_STRINGS } from './src/helper/appStrings';

import SignInScreen from './src/screens/SignInScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={APP_STRINGS.screens.welcome}>
        
        <Stack.Screen name={APP_STRINGS.screens.welcome} component={WelcomeScreen}
        options={{headerShown: false,}}/>

        <Stack.Screen name={APP_STRINGS.screens.siginIn} component={SignInScreen}
        options={{headerShown: false,}}/>

        <Stack.Screen name={APP_STRINGS.screens.signUp} component={SignUpScreen}
        options={{headerShown: false,}}/>

        <Stack.Screen name={APP_STRINGS.screens.dashboard} component={DashboardScreen}
        options={{headerShown: false,}}/>

        <Stack.Screen name={APP_STRINGS.screens.home} component={HomeScreen}
        options={{headerShown: false,}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
