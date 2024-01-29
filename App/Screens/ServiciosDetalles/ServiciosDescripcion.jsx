import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Heading from '../../Components/Heading';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ServiciosDescripcion({servicios}) {

    const [leermas,setLeermas]=useState(false);
    const param = useRoute().params;

    const [serviCCiosli, setServList] = useState(param.servicios);
    useEffect(() => {
        console.log(param?.servicios)
    }, [param])


  return servicios&&(
    <View>
                <Heading text={"Descripcion"}/>
        
                
                <Text style={styles.texto} numberOfLines={leermas?20:5}>{servicios.descripcion}</Text>
                <TouchableOpacity onPress={() => setLeermas(!leermas)}>
                <Text style={{color:Colors.primary, fontSize:18}}>{leermas?"Leer menos":"Leer mas.."}</Text>
                </TouchableOpacity>
                </View>
  )
}
const styles = StyleSheet.create({
    listado: {
        backgroundColor: Colors.primary,
        width: "100%",
        height: 300,

    }, container: {
        padding: 10, backgroundColor: Colors.primary, borderRadius: 15, marginBottom: 15,
        display: "flex", flexDirection: "row"
    }, texto: { minWidth: 2, marginLeft: 5, marginRight: 10, fontSize: 16, },
    titulo: { fontWeight: "bold", fontSize: 30, margin: 10, marginRight: 10 },detail:{padding:20,display:"flex",gap:7}
})