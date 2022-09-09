import React from 'react';
import TabStack from './TabStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLOR_WHITE} from '../constants/Colors';
import SplashScreen from '../screens/main/SplashScreen';
import LoginScreen from '../screens/register/LoginScreen';
import SignupScreen from '../screens/register/SignupScreen';
import ForgotScreen from '../screens/main/ForgotScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, statusBarColor: COLOR_WHITE}}
        initialRouteName="Login">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="Tabs" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
