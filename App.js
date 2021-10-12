import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';
import { Movies } from './src/Pages/Movies';

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar style="inverted" />
      <Routes />
    </NavigationContainer>
  );
};

