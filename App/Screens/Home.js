import { View, Text, Button, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Carousel from './Carousel';
import Categorias from './Categorias';
import info from '../hooks/Datos';
import { FontAwesome } from '@expo/vector-icons';
import Sliders from './HomeScreen/Sliders';
import Caty from './HomeScreen/Caty';
import Servicioslist from './HomeScreen/Servicioslist';






export default function Home() {
  const { isLoaded, signOut } = useAuth();

  return (
    
    <ScrollView style={{ paddingTop:0 }}>
      <Header />
      {/*<SearchBar />*/}
        <View style={{marginTop:10, padding:20}}>
          <Sliders />
      <Caty/>
      <Servicioslist/>
        </View>
    
      {/*
        <Button
        title="Sign Out"
        onPress={() => (signOut())}
      />*/}
    </ScrollView>
      
  )
}