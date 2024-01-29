import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import GlobalApi from '../../../Utils/GlobalApi';
import ServicioListaItem from './ServicioListaItem';
import CabezeraPagina from '../../Components/CabezeraPagina';

const ServiciosListaCategoriaScreen=()=>{
  const param = useRoute().params;
  const navegar=useNavigation();

  const [servicioslistado, setServList] =useState();
  useEffect(() => {
   param&&getServxCate()
    console.log("categoria",param.category)
    
  },[param])

  const getServxCate=()=>{
    GlobalApi.getServiciosCategoria(param.category)
    .then(resp=>{
     // setServList(resp.servlist);
      setServList(resp.servicios)
    
    })
  }
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <CabezeraPagina/>
      <TouchableOpacity style={{display:"flex", flexDirection:"row", gap:10, alignItems:"center"}}
        onPress={()=>navegar.goBack()}
      >
   {/*     <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{fontSize:25, fontWeight:"bold"}}>{param?.category}"</Text> */}

      </TouchableOpacity>
       {servicioslistado?.length>0?  <FlatList 
      data={servicioslistado}
      style={{marginTop:15}}
      renderItem={({item, index})=>(
        <ServicioListaItem servicios={item}/>

      )}/>:
      <Text style={{fontWeight:"800", fontSize:30, color:"gray", textAlign:"center",marginTop:"40%"}}>No Hay Servicios</Text>      }

    </View>
  )
}
export default ServiciosListaCategoriaScreen