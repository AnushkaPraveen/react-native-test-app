import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import CreateAccount from './screens/createAccount';
import Address from './screens/address';
import Form from './screens/form';




export default function App() {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
       <Stack.Screen name="CreateAccount" options={{ title: 'Create your account' }} component={CreateAccount} /> 
       <Stack.Screen name="Address" options={{ title: 'Create your account' }} component={Address} /> 
       <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  </NavigationContainer>
  
   
  )
}


