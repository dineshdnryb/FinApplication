import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Collection from './Collection';
import ServicePage from './ServicePage';

export default function Home() {

  return (
    <ScrollView style={styles.Container}>
      <View style={{marginBottom: verticalScale(30)}}>
        <View style={styles.card} elevation={4}>
          <View style={styles.content}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: RFValue(13, 500), color: '#ffffff', fontWeight: '600' }}>Hi! Name</Text>
              <Text style={styles.date}>20/02/2023</Text>
            </View>
            <View style={styles.loanDetails}>
              <Text style={styles.titleText}>Total Loan Amount</Text>
              <Text style={styles.amountText}><Icon name="currency-inr" size={20}></Icon>3,30,330</Text>
            </View>
            <View style={styles.loanDetails}>
              <Text style={styles.titleText}>Total Collection</Text>
              <Text style={styles.amountText}><Icon name="currency-inr" size={20}></Icon>3,30,330</Text>
            </View>
            <View style={styles.loanDetails}>
              <Text style={styles.titleText}>Today's Collection</Text>
              <Text style={styles.amountText}>2/10</Text>
            </View>
          </View>
        </View>
        <View style={styles.serviceContainer}>
          <Text style={styles.servicetitle}>Services</Text>
           <ServicePage />
        </View>
        <View style={styles.serviceContainer}>
          <Text style={styles.servicetitle}>Collection</Text>
          <Collection />
        </View>
      </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#39c2c8',
    shadowColor: '#000',
    borderColor: '#39c2c8',
    flexDirection: 'row',
    padding: 10,
    margin: 1,
    marginTop: verticalScale(15),
  },
  content: {
    width: '100%',
  },
  loanDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },

  date: {
    color: '#ffffff',
    fontSize: RFValue(16, 800),
  },

  titleText: {
    color: '#ffffff',
    marginTop: verticalScale(10),
    fontSize: RFValue(12, 680),
  },
  serviceContainer: {
    marginTop: verticalScale(30),

  },
  amountText: {
    marginTop: verticalScale(4),
    fontSize: RFValue(13, 500),
    color: '#ffffff',
    fontWeight: '600',
  },
  servicetitle: {
    color: '#000',
    fontSize: RFValue(12, 420),
  }
})