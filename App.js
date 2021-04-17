import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default function App() {
  return (
    
      <SignupLoginScreen/>
   
  );
}


const Navigator=createBottomTabNavigator({
  ExchangeScreen:{screen:ExchangeScreen},
  HomeScreen:{screen:HomeScreen}
})


// const styles = StyleSheet.create({
  // container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  // },
// });
