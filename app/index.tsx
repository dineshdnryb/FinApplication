import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "./screens/Login";
import Otp from "./screens/Otp"
import Userdetails from "./screens/Userdetails"
import Material from "./screens/Material" 
import AppLayout from './modules/AppLayout';
import Customerprofile from './modules/Customerprofile';
import CustomerView from './modules/CustomerView';
const Stack=createStackNavigator(); 
const Index=()=>{
  return(
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="AppLayout" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Otpscreen" component={Otp}/>
        <Stack.Screen name="Userdetails" component={Userdetails}/>
        <Stack.Screen name="AppLayout" component={AppLayout}/>
        <Stack.Screen name="CustomerProfile" component={Customerprofile}/>
        <Stack.Screen name="CustomerView" component={CustomerView}/>

      </Stack.Navigator>
    // </NavigationContainer> 
  )
}

export default Index;