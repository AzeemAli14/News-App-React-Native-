import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import Business from '../screens/main/Business';
import HealthScreen from '../screens/main/HealthScreen';
import SportsScreen from '../screens/main/SportsScreen';
import TechScreen from '../screens/main/TechScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabStack = () => {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Business"
          component={Business}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="trending-down" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Health"
          component={HealthScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="sick" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Sports"
          component={SportsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="sports-cricket" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tech"
          component={TechScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="api" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({});
