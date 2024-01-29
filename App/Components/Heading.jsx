 import { View, Text, StyleSheet } from 'react-native'
 import React from 'react'
 
 export default function Heading({text, isViewAll=false}) {
   return (
     <View style={styles.contenedor}>
       <Text style={styles.heading}>{text}</Text>
        {isViewAll&& <Text >Ver Todo</Text>}
     </View>
   )
 }
 const styles=StyleSheet.create({
    heading:{fontSize:20,
          marginBottom:10,
        
    },contenedor:{
       display:"flex",
       flexDirection:"row" ,
       alignItems:"center",
       justifyContent:"space-between"
    }
})