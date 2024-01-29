import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native';
import SignInWithOAuth from './App/Components/SigninWithOAuth';
import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Components/Navigations/TabNavigation';
import HomeNavigation from './App/Components/Navigations/HomeNavigation';





export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_*************************************api personal"}>
      <SafeAreaView style={styles.container}>
      <StatusBar hidden />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

   

  },
});
