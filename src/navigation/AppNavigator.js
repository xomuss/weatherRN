import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WeatherScreen from '../containers/WeatherScreen';
import TimerScreen from '../containers/TimerScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray'}}
    >
      <Tab.Screen name="Home" component={WeatherScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
