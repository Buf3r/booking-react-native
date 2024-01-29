import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../Screens/Home'
import Appointement from '../../Screens/Appointement'
import Profile from '../../Screens/Profile'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation'
import Carrito from "../../Screens/Carrito"
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../assets/shared/Colors'



const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary}}>

      <Tab.Screen name="Home" component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Carrito " component={Carrito}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color}/>
          )
        }}
      />


      <Tab.Screen name="Agenda" component={Appointement}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color}/>
            
          )
        }}
      />
      <Tab.Screen name="Perfil" component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          )
        }}
      />

    </Tab.Navigator>
  )
}

