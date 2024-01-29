import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../assets/shared/Colors'

export default function ServListIcon({ servicios }) {
    return (
    <View style={styles.container}>
      <Image source={{uri:servicios?.image[0]?.url}}
      style={styles.image}/>
        <View>
        <Text style={styles.titulo}>{servicios?.name} </Text>
        <View > 
        <Text style={styles.texto}>{servicios?.categoria} </Text>
        <Text style={styles.precio}>Precio 💲{(servicios?.precio*0.55).toFixed(1)} </Text>
        </View>
    </View>
    
       
    </View>
    )
}

const styles = StyleSheet.create({
    image: { width: 160, height: 100, borderRadius: 10 },
    container: { padding: 5, backgroundColor:Colors.primary, borderRadius: 10,alignItems:"center" },
    texto:{color:"black", alignItems:"center", fontSize:14},
    titulo:{color:"white"},precio:{backgroundColor:"yellow",borderRadius:4, paddingHorizontal:7,
    alignSelf:"flex-start",fontSize:20},
    
})