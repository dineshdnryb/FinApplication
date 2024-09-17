
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Material=({placeh,title})=>{
    return(
        <View>
            <Text style={styles.lable}>{title}</Text>
            <TextInput placeholderTextColor={"#000"} placeholder={placeh} style={styles.input}></TextInput>
        </View>
    )
}

const styles=StyleSheet.create({
input:{
    borderWidth:1.2,
    marginTop:moderateScale(8),
    borderRadius:20,
    marginHorizontal:verticalScale(25),
    paddingVertical:verticalScale(8),
    paddingHorizontal:scale(15),
    fontSize:RFValue(17,680)
},
lable:{
    marginLeft:scale(35),
    fontSize:RFValue(17,680)
}
})

export default Material;