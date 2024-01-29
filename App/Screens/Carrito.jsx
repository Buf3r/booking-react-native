import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import CabezeraPagina from '../Components/CabezeraPagina';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../assets/shared/Colors';


const RadioButtons = ({ sedesOptions, selectedSede, handleSedeSelection }) => {
  return (
    <View style={styles.radioContainer}>
      {sedesOptions.map((sede, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.radioButton,
            {width: 80,height:80,borderRadius:30, backgroundColor: selectedSede === sede ? "#1b19bd" : 'white' },
          ]}
          onPress={() => handleSedeSelection(sede)}
        >
          <Text style={{height:80, color: selectedSede === sede ? 'white' : 'black' }}>
            {sede}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function Carrito() {
  const { user } = useUser();
  const [agendaList, setAgendaList] = useState([]);
  const [actualizar, setActualizar] = useState(false);
  const [totalPrecio, setTotalPrecio] = useState(0);
  const [selectedSede, setSelectedSede] = useState('');
  const sedesOptions = ['📲 Pago movil', '🏦 Transferencia', '🪙 Zelle', '💲 Binance'];
  const [textoSeleccionado, setTextoSeleccionado] = useState('');
  const [comprobante, setComprobante] = useState('');


  

  useEffect(() => {
    user && getUser();
  }, [user]);

  const getUser = () => {
    setActualizar(true);
    GlobalApi.getUser(user.primaryEmailAddress.emailAddress).then(resp => {
      setAgendaList(resp.agendas);

      const sumaPrecios = resp.agendas.reduce((total, agenda) => {
        const precio = agenda.servicio?.precio || 0;
        return total + (precio * 0.55);
      }, 0);

      setTotalPrecio(sumaPrecios.toFixed(1));
      setActualizar(false);
    });
  };

  const navegar = useNavigation();

  const borrarAgenda = async agendaId => {

    const deleteResult = await GlobalApi.deleteAgenda(agendaId);
    getUser();
  };

  const handleSedeSelection = sede => {
    setSelectedSede(sede);

    // Asignar texto correspondiente a la opción seleccionada
    switch (sede) {
      case '📲 Pago movil':
        setTextoSeleccionado('Banco Mercantil Telf: 0412-372.28.66 C.I: 10.486.971');
        break;
      case '🏦 Transferencia':
        setTextoSeleccionado('Banesco Cta. Corriente 0101201205012 / 17923890');
        break;
        case '🪙 Zelle':
        setTextoSeleccionado('zellecredisalud@gmail.com');
        break;
        case '💲 Binance':
        setTextoSeleccionado('xmorillocdx@gmail.com');
        break;
      // Agrega más casos según tus opciones de pago
      default:
        setTextoSeleccionado('');
    }
  };

  const handleComprobanteChange = (text) => {
    setComprobante(text);
  };

  return (
    <View>
      <ScrollView style={{ height: '93%' }}>
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}
            onPress={() => navegar.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Mi Carrito</Text>
          </TouchableOpacity>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 15, marginLeft: 15 }} onPress={() => getUser()}>
              <Text style={{ marginLeft: 250, marginTop: -45, fontSize: 15, fontWeight: 'bold' }}>
                {' '}
                Actualizar <FontAwesome name="refresh" size={24} color="green" />
              </Text>
            </TouchableOpacity>
          </View>
         
          <View>
            <FlatList
              data={agendaList}
              onRefresh={() => getUser()}
              refreshing={actualizar}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <Text style={styles.textcar}>Fecha Cita</Text>
                  <Text>{item.fecha}</Text>
                  <Text style={styles.textcar}>Hora Cita</Text>
                  <Text style={styles.hora}>{item.hora}</Text>
                  <Text>{item.usuarioEmail}</Text>
                  <Text style={styles.textcar}>
                    Precio 💲{(item.servicio?.precio * 0.55).toFixed(1) || 'No disponible por favor contactar al soporte tecnico en el apartado de perfil'}
                  </Text>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TouchableOpacity>
                      <Text style={styles.estado} onPress={() => navegar.goBack()}>
                        agregar +
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.borrar} onPress={() => borrarAgenda(item.id)}>
                        borrar -
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image source={{ uri: item.servicio?.image[0]?.url || '<Text>vacio</Text>' }} style={styles.listado} />
                </View>
              )}
            />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={{ justifyContent: 'center', textAlignVertical: 'center', marginRight: 15 }}>
            Total CREDISALUD. 💲{totalPrecio}
          </Text>
          <Text style={{ justifyContent: 'center', textAlignVertical: 'center', marginRight: 15 }}>
            Total Contado. 💲{totalPrecio}
          </Text>
        </View>
          <RadioButtons
            sedesOptions={sedesOptions}
            selectedSede={selectedSede}
            handleSedeSelection={handleSedeSelection}
          />
          <Text style={{fontSize:20,fontWeight:"bold", padding:20}}>Metodo de Pago</Text>
          <Text style={{fontSize:15, padding:20, color: 'green', fontStyle: 'italic', fontWeight: 'bold', fontSize: 20,backgroundColor:"yellow" }}>{textoSeleccionado}</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 20 }}>Comprobante</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 20,
            padding: 10,
            borderRadius:30
          }}
          placeholder="Ingresa el N° de comprobante"
          onChangeText={handleComprobanteChange}
          value={comprobante}
        />
      </ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ marginTop: 0, paddingLeft:10 }} onPress={() => console.log('click')}>
          <Text style={styles.confirmar}>Pagar.</Text>
        </TouchableOpacity>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={{ justifyContent: 'center', textAlignVertical: 'center', marginRight: 15 }}>
            Inicial CREDISALUD. 💲{totalPrecio}
          </Text>
          <Text style={{ justifyContent: 'center', textAlignVertical: 'center', marginRight: 15 }}>
            Precio Contado
            
            . 💲{(totalPrecio * 1.93).toFixed(1)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listado: {
    backgroundColor: Colors.primary,
    width: 80,
    height: 80,
    borderRadius: 15,
    marginTop: -80,
  },
  container: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  texto: { minWidth: 2, marginLeft: 5, marginRight: 150 },
  titulo: { fontWeight: 'bold', fontSize: 15, margin: 2 },
  estado: {
    fontSize: 10,
    padding: 10,
    color: 'white',
    borderRadius: 4,
    margin: 10,
    marginTop: 50,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    backgroundColor: 'green',
  },
  hora: {
    fontSize: 15,
    padding: 3,
    color: 'green',
    borderRadius: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    backgroundColor: 'yellow',
  },
  borrar: {
    fontSize: 10,
    padding: 10,
    color: 'white',
    borderRadius: 4,
    margin: 10,
    marginTop: 50,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    backgroundColor: 'red',
  },
  textcar: { color: 'white', fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 },
  confirmar: {
    textAlign: 'center',
    backgroundColor: Colors.primary,
    color: 'white',
    fontSize: 20,
    padding: 13,
    borderRadius: 99,
    elevation: 4,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
  },
});
