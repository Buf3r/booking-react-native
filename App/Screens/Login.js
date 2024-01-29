import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import img from "../../assets/images/img.png"
import Colors from '../../assets/shared/Colors';
import * as WebBrowser from "expo-web-browser";
import {useWarmUpBrowser} from "../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
//import SignInWithOAuth from '../Components/SigninWithOAuth';
WebBrowser.maybeCompleteAuthSession();

const Login = () => {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
                                                    //"oauth_facebook"
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
    return (
        <View style={{ alignItems: 'center', backgroundColor: Colors.ligh_gray }}>

            <Image source={require("../../assets/images/img.png")}
                style={styles.appImage}
            />

            <View style={{
                backgroundColor: Colors.primary, padding: 25, alignItems: 'center', marginTop: -60,
                borderTopLeftRadius: 20, borderTopRightRadius: 20
            }}>
                <Image source={require("../../assets/images/credery.png")}
                style={{width:120,height:50}}
            />
              
                <Text style={{ marginTop: 20, textAlign: 'center' }}>
                    Obten los mejores servicios, con las mejores opciones a credito y sin salir de casa
                   {/* agenda tu cita medica con especialistas de calidad con Credisalud, sin salir de casa*/}
                </Text>
                
                <TouchableOpacity style={styles.boton} onPress={onPress}>
                    <Text style={{textAlign:"center",fontSize:17,color:Colors.primary, fontWeight:"bold",padding:5}}>inicio </Text>
                </TouchableOpacity>
                {/* sign in button */}
                {/*  <SignInWithOAuth />*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appImage: {
        width: 300,
        height: 600,
        objectFit: 'cover',
        marginTop: 50,
        borderRadius: 20,
        borderWidth: 6,
        borderColor: '#000'
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold'
    },boton:{padding:10, backgroundColor:Colors.white,borderRadius:99,marginTop:10,marginBottom:30}
})

export default Login;