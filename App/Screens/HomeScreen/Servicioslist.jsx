import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../../Utils/GlobalApi'
import ServListIcon from './ServListIcon'
import { useNavigation } from '@react-navigation/native'

// slider de abajo la ultima
const Servicioslist = () => {
  const navegar = useNavigation();
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getServlistado().then(resp => {
      // Obtener los servicios y luego mezclarlos de forma aleatoria
      const servicios = resp?.servicios || [];
      const serviciosAleatorios = servicios.sort(() => Math.random() - 0.5);

      setSlider(serviciosAleatorios);
    });
  };

  return (
    <View style={{ marginTop: 10, marginBottom:30 }}>
      <Heading text={"Listado Servicios"} isViewAll={true} />

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={slider}
        renderItem={({ item, index }) => (
          <View
            onPress={() =>
              navegar.push("serviciosCategoria", {
                category: item.name,
              })
            }
          >
            <View style={{ marginRight: 20 }}>
              <ServListIcon servicios={item} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Servicioslist;
