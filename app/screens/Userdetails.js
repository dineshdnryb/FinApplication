import React from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import Inputfield from "../reusable/Inputfield"
import { verticalScale } from "react-native-size-matters";
const Userdetails=()=>{
    return(
        
        <View style={styles.container}> 
            <Inputfield title={"Firstname"} placeh={"Enter Firstname"}/>
            <Inputfield title={"Lastname"} placeh={"Enter Lastname"}/>
            <Inputfield title={"Username"} placeh={"Enter Username"}/>
            <Inputfield title={"Email Address"} placeh={"Enter Email Address"}/>
            <Inputfield title={"Date of Birth"} placeh={"Enter Date of Birth"}/>
            <Inputfield title={"City"} placeh={"Enter Firstname"}/>
            <Inputfield title={"Address"} placeh={"Enter Firstname"}/>
        </View>
    )
}
const styles=StyleSheet.create({
container:{
    marginTop:verticalScale(55)
}
})

export default Userdetails;

