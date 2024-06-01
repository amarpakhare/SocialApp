import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/tabs/Home';
import Profile from '../screens/tabs/Profile';
import Login from '../screens/auth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

export type RootStackParamList = {
  Login: {
    title: string;
  };
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon name="home-outline" color="#000" size={20} />,
          headerShown: false,
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
          headerShown: false,
        }}
      />
    </Tab.Navigator>
    // ) : (
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         title: 'Login',
    //         headerShown: false,
    //       }}
    //     />
    //   </Stack.Navigator>
    // );
  );
};

export default Navigation;

const styles = StyleSheet.create({});
