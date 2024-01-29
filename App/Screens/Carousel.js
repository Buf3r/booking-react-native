import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react';


let CurrentSlide = 0;
let IntervalTime = 4000;


const Carousel = () => {

    const sliderList = [
        {
            nombre: "GINECOLOGIA consulta citologia y eco",
            categoria: "Especialidades  Medicas",
            imagen: "https://scontent.fccs6-1.fna.fbcdn.net/v/t39.30808-6/240387445_104783738605677_3555102783770140097_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Fm35X1K_DX8AX8FnW2i&_nc_ht=scontent.fccs6-1.fna&oh=00_AfBMYyAPLsr_U09VGjm4JJ3XUKRwwh4q1bA8UfolkCahtg&oe=65A7DDA2",
            precio: 30,
            descripcion: "En CREDISALUD te ofrecemos este servicio y nuestros Laboratorios, atienden de LUNES a SABADO desde las 07:30 am. RECUERDA QUE SE ATIENDE POR ORDEN DE LLEGADA, NO REQUIERE DE AYUNO Y SE ENTREGA EN UN DIA HABIL, Campo de la medicina que se especializa en la atención de las mujeres durante el embarazo y el parto, y en el diagnóstico y tratamiento de enfermedades de los órganos reproductivos femeninos."
        }, {
            nombre: "TRAUMATOLOGIA",
            categoria: "Especialidades  Medicas",
            imagen: "https://elestimulo.com/wp-content/uploads/2018/05/MINAS-1100x572.jpg",
            precio: 30,
            descripcion: "En CREDISALUD te ofrecemos este servicio y nuestros Laboratorios, atienden de LUNES a SABADO desde las 07:30 am. RECUERDA QUE SE ATIENDE POR ORDEN DE LLEGADA, NO REQUIERE DE AYUNO Y SE ENTREGA EN UN DIA HABIL, es la disciplina de la medicina que se encarga del tratamiento de las lesiones traumáticas de los huesos, los músculos, las articulaciones y los tendones."
        }, {
            nombre: "NEFROLOGIA",
            categoria: "Especialidades  Medicas",
            imagen: "https://periodismo001.files.wordpress.com/2012/05/inauguracic3b3n-alcaldc3ada-de-baruta-004.jpg?w=640",
            precio: 30,
            descripcion: "En CREDISALUD te ofrecemos este servicio y nuestros Laboratorios, atienden de LUNES a SABADO desde las 07:30 am. RECUERDA QUE SE ATIENDE POR ORDEN DE LLEGADA, NO REQUIERE DE AYUNO Y SE ENTREGA EN UN DIA HABIL, es la especialidad médica que estudia la anatomía de los riñones y sus funciones. Tiene como campo la prevención, el diagnóstico y el tratamiento de las enfermedades del riñón y sus consecuencias que en resumen es: HTA y daño vascular."
        }, {
            nombre: "PSICOLOGIA",
            categoria: "Especialidades  Medicas",
            imagen: "https://www.ccscity450.com/wp-content/uploads/1949/09/00-urb-03-649x433.jpg",
            precio: 20,
            descripcion: "En CREDISALUD te ofrecemos este servicio y nuestros Laboratorios, atienden de LUNES a SABADO desde las 07:30 am. RECUERDA QUE SE ATIENDE POR ORDEN DE LLEGADA, NO REQUIERE DE AYUNO Y SE ENTREGA EN UN DIA HABIL, La psicología es la ciencia que estudia los procesos mentales. La palabra proviene del griego: psico- (alma o actividad mental) y -logía (estudio). Esta disciplina analiza las tres dimensiones de los mencionados procesos: cognitiva, afectiva y conductual."
        }, 

    ];
  return (
    
    <View>
       <View>
         <Text style={{fontWeight:"900",marginHorizontal:2, marginVertical:5, padding:5}}>NUESTRAS SEDES</Text>
      </View>
      <FlatList
      data={sliderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
      renderItem={({ item }) => (
          <Image
              
              source={{ uri:item?.imagen }}
              style={{
                  width: Dimensions.get('screen').width * 0.9,
                  height: 170,
                  margin: 2,

                  borderRadius: 10,
                  objectFit: 'contain'
              }}
          />  
      )}
     /><View>
     
     </View>
    </View>
  )
}

export default Carousel;