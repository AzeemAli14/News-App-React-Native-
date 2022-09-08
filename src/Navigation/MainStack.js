import React from 'react';
import TabStack from './TabStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { COLOR_WHITE } from '../constants/Colors';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, statusBarColor: COLOR_WHITE }} initialRouteName='Tabs'>
        <Stack.Screen name="Tabs" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
