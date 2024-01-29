import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../../assets/shared/Colors';

const Caty = () => {

    const [cate, setCate]=useState([]);
    const navegacion=useNavigation();
    const [leermas,setLeermas]=useState(false);
    
    useEffect(()=>{
        getCategoria()
    },[])

    const getCategoria=()=>{
        GlobalApi.getCate().then(resp=>{
            console.log("resp", resp.categorias)
            setCate(resp?.categorias)
        })
        
    }
  return (
    <View style={{marginTop:5}} >
      <Heading text={"Categorias"} isViewAll={true}/>
      <FlatList
      numColumns={3}
        data={cate}
        renderItem={({item,index})=>index<=5&&(
            
                <TouchableOpacity style={styles.container} 
                onPress={()=>navegacion.push("serviciosCategoria",{
                  category:item.name
                })}>
                    <View style={styles.categoria}>
                        <Image source={{uri:item?.image?.url}}
                        style={{width:50,height:50,borderRadius:20,objectFit:"contain",}}
                        />
                    </View>
                    <Text style={{fontWeight:"800", fontSize:15,}}>{item.name}</Text>
                </TouchableOpacity>
        )}
      />
    </View>
  )
}
const styles=StyleSheet.create({
    categoria:{backgroundColor:Colors.primary,
        padding: 17,
        borderRadius:99,
        marginBottom:10,
        
        
    },
    container:{flex:1,alignItems:"center"}
})
export default Caty