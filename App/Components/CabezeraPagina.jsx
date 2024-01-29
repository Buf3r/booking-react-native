import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'

export default function CabezeraPagina(titular) {  /*cabezera poner (titulo) y en texto {titulo*/

const navegar = useNavigation();
const param = useRoute().params;
  return (
    <TouchableOpacity style={{display:"flex", flexDirection:"row", gap:10, alignItems:"center"}}
        onPress={()=>navegar.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
       <Text style={{fontSize:25, fontWeight:"bold"}}>{param?.category}</Text>

      </TouchableOpacity>
  )
}

//este el el header clon que deberia quedar