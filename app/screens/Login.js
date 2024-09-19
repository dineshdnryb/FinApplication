import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Login=()=>{
    const navigation=useNavigation();
    const [phoneNumber, setPhoneNumber] = useState("");
    const showAlert = () => {
        Alert.alert(
          "Alert Title",
          "Alert Message",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      };
    const handlePress = () => {
        if (phoneNumber.length === 10) {
            navigation.navigate("Otpscreen");
        } else {
            showAlert();
        }  
    };
    return(
        <View style={styles.container}>
            <View style={styles.containertwo}>
            <Text style={styles.appname}>Minty</Text>
            <Text style={styles.slogan}>Building your wealth ,Together</Text>
                {/* <Text style={styles.slogan}>Login</Text> */}
                <Text style={styles.content}>By entering a valid phone number,you can easily log in and get access</Text>
                <View style={styles.phfield}>
            <Text style={styles.phnofield} >+91 |</Text>
            <TextInput keyboardType="numeric" onChangeText={setPhoneNumber} maxLength={10} style={[styles.mobilenofield, { outlineStyle: 'none' }]} placeholderTextColor={"grey"} placeholder="Enter Phone Number" ></TextInput>
            </View>
            <TouchableOpacity onPress={handlePress} style={styles.continuebtn}>
                <Text style={styles.continuetext}>Get OTP</Text>
            </TouchableOpacity>
            </View>
           
            <View style={styles.termssection}>
                <Text style={styles.continuingtext}>By continuing,you agree to our</Text>
                <View style={styles.termspolicydiv}>
                <Text style={styles.terms} >Terms of Use</Text>
                <Text style={styles.and} > & </Text>
                <Text style={styles.policy} >Privacy Policy</Text>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        width: '100%',
        flex: 3,
        justifyContent: 'space-between',
        paddingHorizontal:20,
    },

    containertwo: {
      height: '60%',    
      justifyContent: 'center',
    },
   
    appname:{
        color:"#000",
        fontSize:RFValue(35,685),
    },
    content:{
        color:"#000",
        fontSize:RFValue(15,685),
        marginTop:verticalScale(20),

    },
    slogan:{
        color:"#000",
        fontSize:RFValue(25,900),
        marginTop:verticalScale(10),
    },
    phfield:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        // marginHorizontal:scale(25),
        marginTop:verticalScale(20),
        borderRadius:15,
        paddingVertical:verticalScale(12),
        borderWidth:1,
        width: '100%'
    },
    mobilenofield:{
        paddingLeft:moderateScale(10),
        fontSize:RFValue(16,680),
        color:"#000",
    },
    phnofield:{
        alignSelf:'center',
        paddingLeft:scale(10),
        fontSize:RFValue(16,680),
        color:"#000",
        fontWeight:'500'
    },
    continuebtn:{
        backgroundColor:"#39c2c8",
        width: '100%',
        borderRadius:15,
        marginTop:verticalScale(22),
        alignItems:'center',
        alignSelf:'center',
    },
    continuetext:{
        paddingVertical:9,
        fontSize:RFValue(16,680),
        color:"#ffffff",
        fontWeight:"bold"
    },
   
    continuingtext:{
        fontSize:RFValue(16,680),
        color:"#000",
    },
    termspolicydiv:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'center'
    },
    terms:{
        color:"#39c2c8",
        fontSize:RFValue(14,680),
        fontWeight:'bold'
    },
    and:{
        color:"#000",
        fontSize:RFValue(14,680),
    },
    policy:{
        color:"#39c2c8",
        fontSize:RFValue(14,680),
        fontWeight:'bold',
    },
    termssection:{
        // flex: 1,
        marginBottom:verticalScale(42),
        alignSelf:'center',
        justifyContent:'end'
    }
})
export default Login;