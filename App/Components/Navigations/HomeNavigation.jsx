import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import ServiciosListaCategoriaScreen from '../../Screens/ServiciosxCategoria/ServiciosListaCategoriaScreen';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';
import ServiciosDetallesScreen from '../../Screens/ServiciosDetalles/ServiciosDetallesScreen';

export default function HomeNavigation() {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="serviciosCategoria" component={ServiciosListaCategoriaScreen} />
    <Stack.Screen name="Detalle-Servicios" component={ServiciosDetallesScreen} />
    <Stack.Screen name="Profile" component={Profile} />
    
  </Stack.Navigator>
  )
}