import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

export default function ServiciosFotos(servicios) {
  return (
    <View>
      <Heading text={"Fotos"}/>
      <FlatList
      data={servicios.image}
      renderItem={({item})=>(
        <Image source={{ uri:item.url }}
        style={{width:"100%",height:120, backgroundColor:"green"}}/>
      )}
      />
    </View>
  )
}