import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/Routes'


export default function App() {

  return (
    <NavigationContainer>
        <StatusBar />
          <Routes />
    </NavigationContainer>
  );
}

