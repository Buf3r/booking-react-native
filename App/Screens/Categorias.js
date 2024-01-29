import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const Categorias = () => {
    const sliderList = [
        {
            nombre: "GINECOLOGIA consulta citologia y eco",
            categoria: "Especialidades  Medicas",
            imagen: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
            precio: 30,
            descripcion: "En CREDISALUD te ofrecemos este servicio y nuestros Laboratorios, atienden de LUNES a SABADO desde las 07:30 am. RECUERDA QUE SE ATIENDE POR ORDEN DE LLEGADA, NO REQUIERE DE AYUNO Y SE ENTREGA EN UN DIA HABIL, Campo de la medicina que se especializa en la atención de las mujeres durante el embarazo y el parto, y en el diagnóstico y tratamiento de enfermedades de los órganos reproductivos femeninos."
        }, {
            nombre: "TRAUMATOLOGIA",
            categoria: "Servicios de Laboratorios",
            imagen: "https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg",
            precio: 30,
            descripcion: "En CREDISALUD te ofrecemos este servicio y nuestros Laboratorios, atienden de LUNES a SABADO desde las 07:30 am. RECUERDA QUE SE ATIENDE POR ORDEN DE LLEGADA, NO REQUIERE DE AYUNO Y SE ENTREGA EN UN DIA HABIL, es la disciplina de la medicina que se encarga del tratamiento de las lesiones traumáticas de los huesos, los músculos, las articulaciones y los tendones."
        }, {
            nombre: "TRAUMATOLOGIA",
            categoria: "Servicios u Otros",
            imagen: "https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg",
            precio: 30,
            descripcion: "En CREDISALUD te ofrecemos este servicio y nuestros Laboratorios, atienden de LUNES a SABADO desde las 07:30 am. RECUERDA QUE SE ATIENDE POR ORDEN DE LLEGADA, NO REQUIERE DE AYUNO Y SE ENTREGA EN UN DIA HABIL, es la disciplina de la medicina que se encarga del tratamiento de las lesiones traumáticas de los huesos, los músculos, las articulaciones y los tendones."
        },{
            nombre: "Traslados",
            categoria: "Servicios u Otros",
            imagen: "https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg",
            precio: 30,
            descripcion: "En CREDISALUD te ofrecemos este servicio y nuestros Laboratorios, atienden de LUNES a SABADO desde las 07:30 am. RECUERDA QUE SE ATIENDE POR ORDEN DE LLEGADA, NO REQUIERE DE AYUNO Y SE ENTREGA EN UN DIA HABIL, es la disciplina de la medicina que se encarga del tratamiento de las lesiones traumáticas de los huesos, los músculos, las articulaciones y los tendones."
        },

    ];
  return (
    <View>
        <View>
         <Text style={{fontWeight:"900",marginHorizontal:2, marginVertical:5, padding:5}}>CATEGORIAS</Text>
      </View>
      <FlatList 
      data={sliderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TouchableOpacity activeOpacity={0.8} style={{marginTop:5}}>
            <View style={{marginHorizontal:10, marginVertical:5, padding:5, backgroundColor:"green", borderRadius:7}}>
                <Text style={{color:"white", paddingHorizontal:5, fontWeight:"800", fontSize:15}}>{item?.categoria} </Text>
            </View>
        </TouchableOpacity>
      )}
          
           
          />
    </View>
  )
}

export default Categorias