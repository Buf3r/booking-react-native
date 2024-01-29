import { View, Text, StyleSheet, Image,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../Utils/GlobalApi'
import Heading from '../../Components/Heading';


const Sliders = () => {

    const [slider, setSlider]=useState([]);
    useEffect(()=>{
        getSliders()
    },[])

    const getSliders=()=>{
        GlobalApi.getSliders().then(resp=>{
            console.log("resp", resp.sliders)
            setSlider(resp?.sliders)
        })
    }
  return (
    <View style={{}}>
        <Heading text={"Ofertas"}/>
      <FlatList
      horizontal ={true}
      showsHorizontalScrollIndicator={false}
       data={slider}
       renderItem={({item, index})=>(
           <View style={{marginRight:20}}>
              <Image source={{uri:item?.image?.url}} 
              style={styles.sliderImagen}/>  
           </View>
       )}   
          
      />
    </View>
  )
}

const styles=StyleSheet.create({
    heading:{fontSize:20,
        
        marginBottom:10,
        
    },
    sliderImagen:{width:220,height:170,borderRadius:20,objectFit:"contain",}
})

export default Sliders