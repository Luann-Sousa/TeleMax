import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen Satcks
import { Home } from '../Pages/Home';
import { Details } from '../Pages/Details';

const Satck = createNativeStackNavigator();

export function StackRoutes(){
  return(
    <Satck.Navigator>
      <Satck.Screen
        options={{
        headerShown: false,
        }}
        name="Home"
        component={ Home } 
      />

    <Satck.Screen
        options={{
        headerShown: false,
        }}
        name="Detalhes"
        component={ Details } 
      />
    </Satck.Navigator>
  )
}