import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import Heading from '../../Components/Heading';
import ServiciosFotos from './ServiciosFotos';
import ServiciosDescripcion from './ServiciosDescripcion';
import AgendarModal from './AgendarModal';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ServiciosDetallesScreen() {

    const param = useRoute().params;
    const navegar = useNavigation();
    const [showModal,setShowModal]=useState(false);
    

    const [servicios, setServList] = useState(param.servicios);
    useEffect(() => {
        console.log(param?.servicios)
    }, [param])
    return servicios && (
        <View>
        <ScrollView style={{height:"93%"}}>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", zIndex: 10, position: "absolute", padding: 20 }}
                onPress={() => navegar.goBack()}
            >
                <AntDesign name="arrowleft" size={30} color="white" />
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>{param?.category}</Text>

            </TouchableOpacity>
            <Image source={{ uri: servicios?.image[0]?.url }} style={styles.listado} />

            <View style={styles.detail}>
                <Text style={styles.titulo}>{servicios.name}</Text>

                <Text style={styles.texto}>Sedes: 🔎📌{servicios.sede}</Text>
                <Text style={{ fontSize: 20, padding: 10, fontWeight:"bold" }}>Inicial Credisalud💲{(servicios.precio*0.55).toFixed(1)}</Text>
                <Text style={{ fontSize: 20, padding: 10, fontWeight:"bold" }}>Precio de Contado 💲{servicios.precio}</Text>
                <Text >_______________</Text>

                <ServiciosDescripcion servicios={servicios}/>
                
                
            </View>
        </ScrollView>
        <View style={{display:"flex",flexDirection:"row"}}>
            
             <TouchableOpacity style={styles.msj}>
             <Text style={{padding:10,fontSize:18, textAlign:"center"
            ,borderRadius:99,borderColor:"yellow",backgroundColor:"#f0ebdd",borderWidth:3}}>Mensaje</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.btn}
             onPress={() => setShowModal(true)}
             >
             <Text style={{padding:10,backgroundColor: Colors.primary,color:"white",fontSize:18, textAlign:"center"
            ,borderRadius:99,borderColor:"yellow",borderWidth:3}}>Agendar</Text>
             </TouchableOpacity>

        </View>
        <Modal
        animationType="slide"
        visible={showModal}
        >
            <AgendarModal 
            ServiciosId={servicios.id}
            hideModal={() => setShowModal(false)}/>
        </Modal>

    </View>
    )
}

const styles = StyleSheet.create({
    listado: {
        backgroundColor: "green",
        width: "100%",
        height: 300,

    }, container: {
        padding: 10, backgroundColor: "#beedca", borderRadius: 15, marginBottom: 15,
        display: "flex", flexDirection: "row"
    }, texto: { minWidth: 2, marginLeft: 5, marginRight: 10, fontSize: 16, },
    titulo: { fontWeight: "bold", fontSize: 30, margin: 10, marginRight: 10 },detail:{padding:20,display:"flex",gap:7},
    btn:{padding:1,flex:1}, msj:{padding:1,flex:1,backgroundColor:"white",color:"green", borderRadius:99}

})