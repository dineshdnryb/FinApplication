import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';

export default function Customer() {
    const navigation = useNavigation();

    const setFilter = (filter) => {
        navigation.navigate('Customer', { filter });
      };
    return (
        <View style={styles.Container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button,styles.activeButton]}
                    onPress={() => setFilter('Total')}>
                    <View style={styles.cardOut}>
                        <Icon name="list-alt" size={40} color='#fff' />
                        <Text style={styles.buttonText}>Total</Text>
                    </View>
                    <View style={styles.cardOut}>
                      <Text style={[styles.buttonText,{marginTop: verticalScale(15)}]}>120</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,styles.activeComplete]}
                    onPress={() => setFilter('Complete')}>
                    <View style={styles.cardOut}>
                        <Icon name="check-circle-outline" size={40} color='#fff' />
                        <Text style={styles.buttonText}>Complete</Text>
                    </View>
                    <View style={styles.cardOut}>
                        <Text style={[styles.buttonText,{marginTop: verticalScale(15)}]}>120</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,styles.activePending]}
                    onPress={() => setFilter('Pending')}>
                    <View style={styles.cardOut}>
                        <Icon name="access-time" size={35} color='#fff' />
                        <Text style={styles.buttonText}>Pending</Text>
                    </View>
                    <View style={styles.cardOut}>
                        <Text style={[styles.buttonText,{marginTop: verticalScale(15)}]}>120</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#ffffff',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        padding: 10,
        width: '48%',
        marginTop: verticalScale(15),
        borderBottomWidth: 5,

    },
    activeButton: {
        borderBottomColor: '#39c2c8',
        backgroundColor: '#88e6eb',
    },

    activeComplete: {
        borderBottomColor: '#11ed53',
        backgroundColor: '#83f2a4',
    },
    activePending: {
        borderBottomColor: '#ed4040',
        backgroundColor: '#ed7777',
    },
    buttonText: {
        fontSize: RFValue(12, 480),
        color: '#ffffff',
    },
    cardOut: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: verticalScale(15),
        justifyContent: 'space-between',
    }
});


