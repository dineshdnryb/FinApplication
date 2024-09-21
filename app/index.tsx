import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native"; 
import Login from "./screens/Login";
import Otp from "./screens/Otp"
<<<<<<< HEAD
import Userdetails from "./screens/Userdetails"
import Material from "./screens/Material"
=======
import AppLayout from './modules/AppLayout';
>>>>>>> fb14343acd7c87d79726fe3d39def0d9ec8579e9
const Stack=createStackNavigator(); 
const Index=()=>{
  return(
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Userdetails" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Otpscreen" component={Otp}/>
<<<<<<< HEAD
        <Stack.Screen name="Userdetails" component={Userdetails}/>
=======
        <Stack.Screen name="AppLayout" component={AppLayout}/>
>>>>>>> fb14343acd7c87d79726fe3d39def0d9ec8579e9
      </Stack.Navigator>
    // </NavigationContainer> 
  )
}

export default Index;