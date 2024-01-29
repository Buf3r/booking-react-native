import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, StyleSheet,RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import CabezeraPagina from '../Components/CabezeraPagina'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';
import dayjs from 'dayjs';
import Colors from '../../assets/shared/Colors';


export default function BookingScreen() {
  const { user } = useUser();
  const [agendaList, setAgendaList] = useState([]);
  const [actualizar, setActualizar] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    user && getUser();
  }, [user]);

  /** obtener usuario**/
  const getUser = () => {
    setActualizar(true);
    GlobalApi.getUser(user.primaryEmailAddress.emailAddress).then((resp) => {
      console.log("resp", resp);
      setAgendaList(resp.agendas);
      console.log("resp-agen", agendaList);
      setActualizar(false);
    });
  };


  const borrarAgenda = async (agendaId) => {
    // Llama a la función deleteAgenda pasando el id de la agenda
    const deleteResult = await GlobalApi.deleteAgenda(agendaId);

    console.log(deleteResult);

    // Vuelve a obtener la lista actualizada después de borrar
    getUser();
  };
  

  const navegar = useNavigation();

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}
          onPress={() => navegar.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Mis Pedidos</Text>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
          <TouchableOpacity style={{ marginTop: 15, marginLeft: 15 }} onPress={() => getUser()}>
            <Text style={{ marginLeft: 250, marginTop: -45, fontSize: 15, fontWeight: "bold" }}> Actualizar <FontAwesome name="refresh" size={24} color="green" /></Text>

          </TouchableOpacity>
        </View >
        <View>
          <Text style={{ textAlign: "center", fontStyle: "italic", color: "gray" }}>deslizar abajo para actualizar</Text>
          <FlatList
            data={agendaList}
            onRefresh={() => getUser()}
            refreshing={actualizar}
            renderItem={({ item }) => {
              // Crea una nueva fecha sumando 7 días
              const fechaNueva = dayjs(item.fecha).add(7, 'days');

              // Convierte la fecha a un formato simple
              const fechaSimple = fechaNueva.format('DD/MM/YYYY');

              return (
                <View
                  style={styles.container}
                  onPress={() => console.log("click")}
                >
                  <Text style={{fontWeight:"bold",fontSize:17}}>Codigo Confirmacion:</Text>
                  <Text>{item.servicio?.id}</Text>
                  <Text style={styles.textcar}>Fecha Cuota N° 1</Text>
                  <Text>{fechaSimple}</Text>
                  <Text style={styles.textcar}>Fecha Cuota N° 2</Text>
                   <Text>{dayjs(item.fecha).add(14, 'days').format('DD/MM/YYYY')}</Text>
                  <Text style={styles.textcar}>Fecha Cuota N° 3</Text>
                  <Text>{dayjs(item.fecha).add(21, 'days').format('DD/MM/YYYY')}</Text>
                  
                  <Text style={styles.textcar}>Hora Pedido</Text>
                  <Text style={styles.hora}>{item.hora}</Text>
                  <Text>{item.usuarioEmail}</Text>
                  <Text style={styles.estado}>{item.agendarStatus}</Text>
                  <Text>{console.log("hora", item.servicio)}</Text>
                  <Image
                    source={{ uri: item.servicio?.image[0]?.url || '<Text>vacio</Text>' }}
                    style={styles.listado}
                  />
                </View>
              )
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  listado: {
    backgroundColor: "gray",
    width: 150,
    height: 150, borderRadius: 15,


  }, container: {
    padding: 10, backgroundColor: Colors.primary, borderRadius: 15, margin: 20,
    display: "flex", flexDirection: "column"
  }, texto: { minWidth: 2, marginLeft: 5, marginRight: 150 },
  titulo: { fontWeight: "bold", fontSize: 15, margin: 2 }, estado: {
    fontSize: 10, padding: 3, color: "white", borderRadius: 4,
    alignSelf: "flex-start", paddingHorizontal: 7, backgroundColor: "green"
  }, hora: {
    fontSize: 15, padding: 3, color: "green", borderRadius: 4,
    alignSelf: "flex-start", paddingHorizontal: 7, backgroundColor: "yellow"
  },textcar: { color: 'white', fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 },
  confirmar: {
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
    padding: 13,
    borderRadius: 99,
    elevation: 4,
  }
})