import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View, Text, Image, TextInput,StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/shared/Colors';



const Header = () => {

    const { isSignedIn, isLoaded, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return user&&(
        <View style={styles.container} >
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 17, alignItems: 'center' }}>
                    <Image source={{ uri: user.imageUrl }}
                        style={{ width: 45, height: 45, borderRadius: 99 }} />

                    <View>
                        <Text style={{ fontWeight: "bold" }}>Hola, 👋</Text>
                        <Text style={{ fontSize: 18, }}>{user.fullName}</Text>
                    </View>
               
                <Text style={{
                    fontSize: 20, color: "green", borderRadius: 4, margin: 10, marginTop: 10,
                    alignSelf: "flex-start", paddingHorizontal: 19,marginLeft:90, backgroundColor: "yellow"
                }}>$50</Text>
                    
                </View>

                {/* <Ionicons name="notifications-outline" size={32} color="black" style={{backgroundColor:"yellow",
        padding: 1,
        borderRadius:99,
    marginBottom:10}} />*/}
                    
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, borderColor: Colors.gray, padding: 8, borderRadius: 30}} >
                    <AntDesign name="search1" size={24} color={Colors.primary} />
                    <TextInput
                        placeholder='Search'
                        onChangeText={(value) => setSearchInput(value)}
                        onSubmitEditing={() => setSearchText(searchInput)}
                        style={{ width: '100%',backgroundColor:Colors.white,padding:7,paddingHorizontal:16,
                        borderRadius:9,width:"80%",marginRight:15, marginLeft:-25
                    }}
                    
                    /><AntDesign name="search1" size={24} color={Colors.primary} style={{backgroundColor:"white",borderRadius:9,padding:5}} />
                </View>
            
        </View >
        </View >
    );
}

const styles=StyleSheet.create({
    container:{ backgroundColor: Colors.primary, padding: 20, paddingTop: 40, borderBottomLeftRadius: 25, borderBottomRightRadius: 25,
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}
})

export default Header;