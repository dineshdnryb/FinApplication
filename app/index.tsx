import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native"; 
import Login from "./screens/Login";
import Otp from "./screens/Otp"
const Stack=createStackNavigator(); 
const Index=()=>{
  return(
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Otpscreen" component={Otp}/>
      </Stack.Navigator>
    // {/* </NavigationContainer> */}
  )
}

export default Index;