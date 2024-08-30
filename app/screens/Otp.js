import React, { version } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { RFValue } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";
const Otp=()=>{
    return(
        <View style={styles.container}>
        <Text style={styles.otpheading}>Enter OTP sent to your mobile</Text>
        <OTPTextView tintColor={"grey"} offTintColor={"#52327a"} inputCount={4} containerStyle={styles.otpcontainer} textInputStyle={styles.otpfield}/>
        <TouchableOpacity>
            <Text style={styles.resendtext}>Resend OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.verifybtn}>
            <Text style={styles.verifytext}>Verify</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    otpheading:{
        fontSize:RFValue(18,680),
        marginTop:verticalScale(160),
        textAlign:"center"
    },
    otpcontainer:{
        alignSelf:"center",
        top:verticalScale(14)
    },
    otpfield:{
        borderWidth:1.5,
        height:verticalScale(45),
        width:scale(45),
        borderRadius:15,
        fontSize:RFValue(25,680),
        textAlign:'center',
        color:"#52327a"
    },
    resendtext:{
        fontSize:RFValue(15,680),
        marginTop:verticalScale(28),
        textAlign:"center",
        color:"#52327a",
        // textDecorationLine:'underline'
    },
    verifybtn:{
        backgroundColor:"#52327a",
        width:scale(125),
        height:verticalScale(35),
        marginTop:20,
        alignSelf:"center",
        borderRadius:15,
        marginTop:verticalScale(18)
    },
    verifytext:{
        color:"#fff",
        alignSelf:'center',
        fontSize:RFValue(17,680),
        marginTop:9,
    }
})

export default Otp;