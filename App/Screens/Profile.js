import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../assets/shared/Colors';



export default function Profile() {
  const navegar = useNavigation();


  const { isSignedIn, isLoaded, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View>
    <View style={{ padding: 20 , backgroundColor: Colors.primary,}}>

      <TouchableOpacity style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}
        onPress={() => navegar.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Perfil</Text>

      </TouchableOpacity>
      
      <View style={{ marginTop: 5, display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'space-between' }}>
               <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
          <Image source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }} />

          </View>
          <View>
            <Text style={{color:"white",fontSize:20}}>Hola, 👋</Text>
            <Text style={{ fontSize: 25,color:"white"}}>{user.fullName}</Text>
          </View>
              

        


      </View>
          
     </View>
       
       <View style={{padding:20}}>
            <Text style={{color:"black",fontSize:15}}>Nombre Usuario:</Text>
            <Text style={{ fontSize: 25,color:"black"}}>{user.fullName}</Text>
     </View>
     <View style={{padding:20}}>
            <Text style={{color:"black",fontSize:15}}>Email Usuario:</Text>
            <Text style={{ fontSize: 25,color:"black"}}>{user.primaryEmailAddress.emailAddress}</Text>
     </View>
     </View>

  )
}