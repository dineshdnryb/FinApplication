import React, { version,useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { RFValue } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

const Otp=()=>{
    const navigation = useNavigation();
    const [otp, setOtp] = useState("");

    const handleVerify = () => {
        if (otp.length === 4) {
            navigation.navigate('AppLayout'); 
        } else {
            Alert.alert('Please 4 digit OTP')
        }  
    };

    const handleOtpChange = (otp) => {
        setOtp(otp); 
      };

    const backTologin = () => {
        navigation.navigate('Login'); 
      };
    
    const handleResendOtp = () => {
        Alert.alert('OTP Resent', 'A new OTP has been sent to your phone.');
    };


    return(
        // <View style={styles.container}>
        // <Text style={styles.otpheading}>Verification</Text>
        // <Text style={styles.otpheading}>Enter OTP sent to your mobile</Text>
        // <OTPTextView tintColor={"grey"} offTintColor={"#52327a"} inputCount={6} containerStyle={styles.otpcontainer} textInputStyle={styles.otpfield}/>
        // <TouchableOpacity>
        //     <Text style={styles.resendtext}>Didn't got OTP? Resend OTP</Text>
        // </TouchableOpacity>
        // <TouchableOpacity style={styles.verifybtn} onPress={handleVerify}>
        //     <Text style={styles.verifytext}>Verify</Text>
        // </TouchableOpacity>
        // </View>
        <View style={styles.container}>
                 <View style={styles.verfication}>
                 <TouchableOpacity onPress={backTologin} style={styles.backBtn}>
                    <Icon name="navigate-before" size={40} color="#000" /> 
                    <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.textcontainer}>
                        <Text style={styles.otpheading}>Verification</Text>
                        <Text style={styles.otpheadingtwo}>We have send the 4 digit code to +91-1234567890  <Icon name="edit" onPress={backTologin} size={20} color="#000" /> </Text>
                        <OTPTextView handleTextChange={handleOtpChange} tintColor={"#39c2c8"} offTintColor={"gray"} inputCount={4} containerStyle={styles.otpcontainer} textInputStyle={styles.otpfield}/>
                        <TouchableOpacity onPress={handleResendOtp} style={{ marginTop: verticalScale(28),flexDirection:'row',justifyContent:'center' }}>
                            <Text style={styles.resendcont}>Didn't got OTP? </Text>
                            <Text style={styles.resendtext}>Resend OTP</Text>           
                       </TouchableOpacity>
                        <TouchableOpacity style={styles.verifybtn} onPress={handleVerify}>
                            <Text style={styles.verifytext}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
    )
}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:1,
      },
  
      textcontainer:{
          flex:1,
          justifyContent:'center',
      },
  
       backBtn: {
          marginTop:verticalScale(28),
         flexDirection: 'row',
         alignItems: 'center',
         flex: .3,
         marginLeft: -10,
      },
      backText:{
          fontSize:RFValue(14,480),
      },
      otpheading:{
          fontSize:RFValue(20,480),
      },
      otpheadingtwo:{
          fontSize:RFValue(15,680),
          marginTop:verticalScale(6),
      },
      otpcontainer:{
          marginTop:verticalScale(28),
      },
      verfication:{
          flex: 0.8,
          width: '85%',
  
      },
      otpfield:{
          borderWidth:1.5,
          borderRadius:15,
          fontSize:RFValue(25,680),
          textAlign:'center',
          color:"#000",
          outlineStyle:'none',
          margin: 0,
      },
      resendcont:{
          fontSize:RFValue(15,680),
          textAlign:"center",
          color:"#000",
      },
       resendtext:{
          fontSize:RFValue(15,680),
          textAlign:"center",
          color:"#39c2c8",
         textDecorationLine:'underline'
      },
      verifybtn:{
          backgroundColor:"#39c2c8",
          width:'100%',
          height:verticalScale(40),
          marginTop:20,
          alignSelf:"center",
          borderRadius:15,
          marginTop:verticalScale(18),
          justifyContent: 'center',
  
      },
      verifytext:{
          color:"#fff",
          alignSelf:'center',
          fontSize:RFValue(17,680),
          // marginTop:9,
      }
})

export default Otp;