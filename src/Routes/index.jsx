import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from "@expo/vector-icons";

//screens
import { StackRoutes } from '../Routes/stackRoutes';
import { Movies } from '../Pages/Movies';

const Drawer = createDrawerNavigator();

export function Routes(){
  return(
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        //cor de fundo
        drawerStyle:{
          backgroundColor: "#090A0E",
          paddingTop: 20
        },
        //configuracao navegacao ativa ou nao
        drawerActiveBackgroundColor: "#E72F48",
        drawerActiveTintColor: "#FFF",
        drawerInactiveTintColor:"#FFF",
      }}
    >
      <Drawer.Screen 
      options={{
        title: "Home",
        drawerIcon: ({focused ,color, size})=> (
          <MaterialCommunityIcons
            name={ focused ? "movie-open" : "movie-outline"}
            size={ size }
            color={ color }
          />
        )
      }}
        name="HomeDrawer"
        component={ StackRoutes }
      />

      <Drawer.Screen 
      options={{
        title: "Home",
        drawerIcon: ({focused ,color, size})=> (
          <MaterialCommunityIcons
            name={ focused ? "archive" : "archive-outline"}
            size={ size }
            color={ color }
          />
        )
      }}
        name="Movies"
        component={ Movies }
      />
    </Drawer.Navigator>
  );
};