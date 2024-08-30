import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Login=()=>{
    const navigation=useNavigation();
    return(
        <View style={styles.container}>
        {/* <ImageBackground style={styles.bg} source={require("../pics/app_bg.jpeg")}>  */}
        <View >
            <Text style={styles.appname}>Fin</Text>
            <Text style={styles.slogan}>Building your wealth ,Together</Text>
            
            <View style={styles.phfield}>
            <Text style={styles.phnofield} >+91 |</Text>
            <TextInput keyboardType="numeric" maxLength={10} style={styles.mobilenofield} placeholderTextColor={"grey"} placeholder="Enter Phone Number" ></TextInput>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Otpscreen")} style={styles.continuebtn}>
                <Text style={styles.continuetext}>Get OTP</Text>
            </TouchableOpacity>
            <View style={styles.termssection}>
                <Text style={styles.continuingtext}>By continuing,you agree to our</Text>
                <View style={styles.termspolicydiv}>
                <Text style={styles.terms} >Terms of Use</Text>
                <Text style={styles.and} > & </Text>
                <Text style={styles.policy} >Privacy Policy</Text>
                </View>
            </View>
            </View>
        {/* </ImageBackground> */}
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    bg:{
        height:verticalScale(685),
        opacity:0.8
    },
    // overlay:{
    //     ...StyleSheet.absoluteFillObject,
    //     backgroundColor:'rgba(0,0,0,0.8)'
    // },
    appname:{
        color:"#000",
        fontSize:RFValue(35,685),
        marginTop:verticalScale(58),
        marginLeft:moderateScale(25),
    },
    slogan:{
        color:"#000",
        marginLeft:moderateScale(25),
        fontSize:RFValue(35,680),
        marginTop:verticalScale(10)
    },
    phfield:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        marginHorizontal:scale(25),
        borderRadius:15,
        marginTop:verticalScale(40),
        paddingVertical:verticalScale(12),
        borderWidth:1
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
        backgroundColor:"#D6C7E9",
        height:verticalScale(35),
        width:scale(140),
        borderRadius:15,
        marginTop:verticalScale(22),
        alignItems:'center',
        alignSelf:'center',
    },
    continuetext:{
        paddingVertical:9,
        fontSize:RFValue(16,680),
        color:"#000",
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
        color:"#52327a",
        fontSize:RFValue(14,680),
        fontWeight:'bold'
    },
    and:{
        color:"#000",
        fontSize:RFValue(14,680),
    },
    policy:{
        color:"#52327a",
        fontSize:RFValue(14,680),
        fontWeight:'bold'
    },
    termssection:{
        alignSelf:'center',
        marginTop:verticalScale(275)
    }
})
export default Login;