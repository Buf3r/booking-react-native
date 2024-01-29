import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ServicioListaItem({servicios}) {

  const navegar=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() =>navegar.push("Detalle-Servicios",
    {servicios:servicios}
  )}>
    
    <Image  source={{uri:servicios?.image[0]?.url}} style={styles.listado}/>
        <View>
    <Text style={styles.titulo}>{servicios.name}</Text> 
    
    <Text style={styles.texto}>🔎📌{servicios.sede}</Text> 
    <Text style={{fontSize: 20, padding:20}}>Precio 💲{(servicios.precio*0.55).toFixed(1)}</Text> 
   

       </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  listado:{backgroundColor:"green",
      width:150,
      height:150,borderRadius:15,
      
      
  },container:{padding:10, backgroundColor:Colors.primary, borderRadius:15, marginBottom:15,
display:"flex", flexDirection:"row"},texto:{minWidth:2, marginLeft:5, marginRight:150},
titulo:{fontWeight:"bold", fontSize:15, margin:2}
})