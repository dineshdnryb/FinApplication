import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Collection from './Collection';

export default function Home() {

    return (
        <ScrollView style={styles.Container}>
          <View style={styles.card} >
              <View style={styles.content}>
                <View style={styles.textContainer}>
                  <Text style={styles.date}>12-09-2024</Text>
                  <Text style={styles.collection}>Collection: </Text>
                </View>
                <View style={styles.loanDetails}>
                  <Text style={styles.collection}>Loan:</Text>
                  <Text style={styles.collection}>Expenses: </Text>
                </View>
              </View>
           </View>
           <View style={styles.serviceContainer}>
               <Text style={styles.servicetitle}>Services</Text>
           </View>
            <View style={styles.serviceContainer}>
               <Text style={styles.servicetitle}>Collection</Text>
               <Collection/>
           </View>
            <View style={styles.serviceContainer}>
               <Text style={styles.servicetitle}>Collection Details</Text>
               <Collection/>
           </View>
            <View style={styles.serviceContainer}>
               <Text style={styles.servicetitle}>Collection Details</Text>
               <Collection/>
      </View>
        </ScrollView> 
    );
        
}

const styles = StyleSheet.create({ 
  Container:{
    backgroundColor:'#ffffff',
    padding: 10,
  },
  card: {
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#39c2c8',
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2, 
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row', 
    padding: 10,
  },
  content:{
     width:'100%',
  },
  loanDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  date:{
    color:'#ffffff',
    fontSize:RFValue(13,480),
    marginTop:verticalScale(10),
  },
  
  collection:{
    color:'#ffffff',
    marginTop:verticalScale(10),
    fontSize:RFValue(12,480),

  },
  serviceContainer:{
    marginTop:verticalScale(30),
    
  },

  servicetitle:{
    color:'#000',
    fontSize: RFValue(12,420),
  }
})