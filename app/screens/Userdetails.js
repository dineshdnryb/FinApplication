import React ,{useState}from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View,ScrollView } from "react-native";
import Inputfield from "../reusable/Inputfield";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Button } from 'react-native-paper';


const Userdetails=()=>{
    const navigation=useNavigation();
    const [loading, setLoading] = useState(false);

    const handlePress = () => {
  
    };
    const handlepage = () => {
        navigation.navigate("Login");
    };
    return(
        
        <View style={styles.container}> 
            <View style={styles.regcontainers}>
                <Text style={styles.regtext}>Registration</Text>
                <Inputfield title={"Name"}/>
                {/* <Inputfield title={"Username"} placeh={"Enter Username"}/> */}
                <Inputfield title={"Email Address"} />
                <Inputfield title={"Mobile Number"} />
                <Inputfield title={"Date of Birth"} />
                {/* <Inputfield title={"Address"} placeh={"Enter Firstname"}/> */}
                  <View style={{maginTop: verticalScale(25),flexDirection:'row',justifyContent:'space-between'}}>
                    <Button buttonColor='#ffffff' style={[styles.continuebtn,{borderWidth:2,borderColor:'#666'}]} labelStyle={[styles.continuetext,{color:'#666'}]} loading={loading} mode="contained" onPress={handlePress}>Cancel</Button>
                    <Button buttonColor='#39c2c8' style={styles.continuebtn} labelStyle={styles.continuetext} loading={loading} mode="contained" onPress={handlePress}>Register</Button>
                  </View>
                <View style={styles.termssection}>
                    <View style={styles.termspolicydiv}>
                    <Text style={styles.continuingtext} >Already have an account?</Text>
                    <Text style={styles.and} >  </Text>
                    <TouchableOpacity onPress={handlepage} >
                    <Text style={styles.policy}>Login</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
container:{
    paddingHorizontal:scale(28),
    backgroundColor:'#ffffff',
    flex:1,
},

regcontainer:{
   flex:1,
   justifyContent:'center'
},
regtext:{
    marginTop:verticalScale(32),
    color: "#483248",
    fontSize: RFValue(35, 685),
    fontWeight: "bold"
},
and:{
    color:"#000",
    fontSize:RFValue(14,680),
},
policy:{
    color:"#39c2c8",
    fontSize:RFValue(14,580),
},
termssection:{
    marginTop:verticalScale(42),
    alignSelf:'center',
    justifyContent:'end'
},
termspolicydiv: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
},
continuingtext:{
    fontSize:RFValue(14,580),
},
continuebtn: {
    borderRadius: 6,
    height: 50,
    justifyContent:'center',
    width: '48%'
},
continuetext: {
    fontSize: RFValue(14, 580),
},
})

export default Userdetails;

