import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View,ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

const Login = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const handlepage = () => {
        navigation.navigate("Userdetails");
    };
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
    return (
        <View style={styles.container}>
            <View style={styles.containertwo}>
                <Text style={styles.appname}>Login</Text>
                <Text style={styles.content}>By entering a registered phone number,you can easily log in and get access</Text>
                <TextInput style={styles.phfield} mode="outlined" label="Enter Mobile Number" keyboardType="phone-pad" onChangeText={setPhoneNumber} maxLength={10} left={<TextInput.Affix text="+91" />}
                    theme={{
                        colors: {
                            primary: '#39c2c8',
                            underlineColor: 'transparent',
                            background: '#ffffff'
                        },
                    }} outlineStyle={styles.borderst} />
                <Button buttonColor='#39c2c8' style={styles.continuebtn} labelStyle={styles.continuetext} loading={loading} mode="contained" onPress={handlePress}>Get OTP</Button>
            </View>

            <View style={styles.termssection}>
                <View style={styles.termspolicydiv}>
                    <Text style={styles.continuingtext} >Don't have an account?</Text>
                    <Text style={styles.and} >  </Text>
                    <TouchableOpacity onPress={handlepage} >
                        <Text style={styles.policy}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: '100%',
        flex: 3,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    containertwo: {
        height: '60%',
        justifyContent: 'center',
    },

    appname: {
        color: "#483248",
        fontSize: RFValue(35, 685),
        // marginTop: verticalScale(58),
        fontWeight: "bold"
    },
    content: {
        color: "#000",
        fontSize: RFValue(15, 685),
        marginTop: verticalScale(20),

    },
    slogan: {
        color: "#000",
        fontSize: RFValue(25, 900),
        marginTop: verticalScale(10),
    },
    phfield: {
        marginTop: verticalScale(20),
    },

    borderst: {

    },
    mobilenofield: {
        paddingLeft: moderateScale(10),
        fontSize: RFValue(16, 680),
        color: "#000",
    },
    phnofield: {
        alignSelf: 'center',
        paddingLeft: scale(10),
        fontSize: RFValue(16, 680),
        color: "#000",
        fontWeight: '500'
    },
    continuebtn: {
        borderRadius: 6,
        marginTop: verticalScale(22),
        height: 50,
        justifyContent:'center',
    },
    continuetext: {
        fontSize: RFValue(14, 580),
        color: "#ffffff",
    },

    continuingtext: {
        fontSize: RFValue(16, 680),
        color: "#000",
    },
    termspolicydiv: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    terms: {
        color: "#39c2c8",
        fontSize: RFValue(14, 680),
        fontWeight: 'bold'
    },
    and: {
        color: "#000",
        fontSize: RFValue(14, 680),
    },
    policy: {
        color: "#39c2c8",
        fontSize: RFValue(14, 580),
    },
    termssection: {
        marginBottom: verticalScale(42),
        alignSelf: 'center',
        justifyContent: 'end'
    }
})
export default Login;