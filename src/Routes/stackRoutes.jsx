import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen Satcks
import { Home } from '../Pages/Home';
import { Details } from '../Pages/Details';
import { Search } from '../Pages/Search';

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

    <Satck.Screen
        options={{
        headerShown: true,
        title: "Sua busca",
        headerTintColor: "#FFF",
        
        headerStyle: {
          backgroundColor: "#141a29"
        }
        }}
        name="Search"
        component={ Search } 
      />
    </Satck.Navigator>
  )
}