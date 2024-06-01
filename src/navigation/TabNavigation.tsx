import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/tabs/Home';
import Profile from '../screens/tabs/Profile';

export type RootTabParamList = {
  Home: {
    title: string;
    tabBarIcon: () => JSX.Element;
  };
  Profile: {
    title: string;
    tabBarIcon: () => JSX.Element;
  };
};
const Tab = createBottomTabNavigator<RootTabParamList>();
const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon name="home-outline" color="#000" size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: () => (
            <Icon name="person-outline" color="#000" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
