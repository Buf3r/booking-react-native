import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import CabezeraPagina from '../../Components/CabezeraPagina'
import { useNavigation, useRoute } from '@react-navigation/native'
import CalendarPicker from "react-native-calendar-picker";
import { AntDesign } from '@expo/vector-icons';
import Heading from '../../Components/Heading';
import GlobalApi from '../../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import Categorias from '../Categorias';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function AgendarModal(ServiciosId) {
  const navegar = useNavigation();
  const navigation = useNavigation();
  const param = useRoute().params;
  console.log("param", param);
  
  
/*  const navegar = useNavigation();
  const param = useRoute().params;
  
  const ServiciosId = param?.servicios?.id;
  ; */
console.log("servi", ServiciosId)
  const [timeList, setTimeList] = useState();
  const [horaSelecionada, setHoraSelecionada] = useState();
  const [diaSelecionado, setDiaSelecionado] = useState();
  const [nota, setNota] = useState();
  console.log("hora", horaSelecionada);
  console.log("dia", diaSelecionado);
 // console.log("nota", nota);
  console.log("id", ServiciosId.ServiciosId);
  const { user } = useUser();
  useEffect(() => {
    getTime();
  }, [])

  const getTime = () => {

    const timeList = [];
    for (let i = 8; i < 12; i++) {

      timeList.push({
        time: i + ":00 am"
      })
      timeList.push({
        time: i + ":30 am"
      })

    }
    for (let i = 1; i < 6; i++) {

      timeList.push({
        time: i + ":00 pm"
      })
      timeList.push({
        time: i + ":30 pm"
      })

    }
    setTimeList(timeList);
  }

  const crearNuevaAgenda = () => {

    if (!horaSelecionada || !diaSelecionado || !ServiciosId) {
      ToastAndroid.show("elige un Dia y una Hora", ToastAndroid.LONG)
      return;

    }
    const data = {
      usuario: user?.fullName,
      usuarioEmail: user?.primaryEmailAddress.emailAddress,
      hora: horaSelecionada,
      fecha: diaSelecionado,
      nota: nota,
      ServiciosId: ServiciosId.ServiciosId, //lo lograste con chapgpt

      
    };

    //agendar metodo
    GlobalApi.createAgenda(data).then(resp => {
      console.log("resp", resp);
      ToastAndroid.show("agenda creada", ToastAndroid.LONG)
      console.log("hora", horaSelecionada,);
      console.log("usuario", user?.fullName);
      console.log(user?.primaryEmailAddress.emailAddress);

      

      navigation.goBack();

    })
    

    
  }
  return (
    /*este scroll view y keyavoid sirven para siempre hacer scroll sin tener que darle a cerrar a lo que se
  esta haciendo*/
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>

        <TouchableOpacity style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}
          onPress={() => navegar.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>"Agendar"</Text>

        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Heading text={"SELECCIONE EL DIA"} />
        </View>
        <View style={styles.container}>
          <CalendarPicker onDateChange={setDiaSelecionado}
            width={380} minDate={Date.now()} selectDayColor={{ backgroundColor: "green" }} />

        </View>

        <View style={{ marginTop: 20 }}>
          <Heading text={"SELECCIONE LA HORA"} />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{ marginRight: 10 }}
                onPress={() => setHoraSelecionada(item.time)}>
                <Text style={[horaSelecionada == item.time ? styles.horaselec : styles.horanoselec]}>{item.time}</Text>

              </TouchableOpacity>
            )}
          />
        </View>

      {/*  <View style={{ paddingTop: 20 }}>
          <Heading text={"Algun Comentario/Sugerencia?"} />
          <TextInput placeholder='Nota' style={styles.nota} numberOfLines={4} multiline={true}
            onChange={(text) => setNota(text)}
          />
            </View>*/}

        {/*Boton confirmar*/}
        <TouchableOpacity style={{ marginTop: 15 }}
          onPress={() => crearNuevaAgenda()}
          
        >
          <Text style={styles.confirmar}>
            Confirmar & Agendar
          </Text>

        </TouchableOpacity>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {

    backgroundColor: "#beedca", padding: 20, paddingTop: 10, marginTop: 20, borderRadius: 10

  }, horaselec: {
    padding: 10, paddingHorizontal: 18, borderWidth: 2, borderColor: "green", backgroundColor: "green", borderRadius: 99,
    color: "white"
  }, horanoselec: {
    padding: 10, paddingHorizontal: 18, borderWidth: 2, borderColor: "green",
    borderRadius: 99,
    color: "green"
  }, nota: {
    borderWidth: 2, borderRadius: 15, textAlignVertical: "top", padding: 20,
    fontSize: 16, borderColor: "green"
  }, confirmar: {
    textAlign: "center", backgroundColor:Colors.primary, color: "white",
    fontSize: 20, padding: 13, borderRadius: 99, elevation: 4
  }

});