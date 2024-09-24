import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

export default function Customer() {
    const navigation = useNavigation();
    const [today, setToday] = useState(new Date())
    const setFilter = (filter) => {
        navigation.navigate('Customer', { filter });
    };
    return (
        <View style={styles.Container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFilter('Total')}>
                    <View style={styles.cardOut}>
                        <Icon name="card-account-details-outline" style={styles.activeButton} size={40} color='#fff' />
                        {/* <Text style={styles.buttonText}>Total</Text> */}
                    </View>
                    <View style={styles.cardOut}>
                        <Text style={[styles.buttonText, { marginTop: verticalScale(15) }]}>Total Profiles</Text>
                        <Text style={[styles.buttonText,{fontWeight: 600}]}>120</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFilter('Complete')}>
                    <View style={styles.cardOut}>
                        <Icon name="cash-check" style={styles.activeComplete} size={40} color='#fff' />
                    </View>
                    <View style={styles.cardOut}>
                        <Text style={[styles.buttonText, { marginTop: verticalScale(15) }]}>Complete</Text>
                        <Text style={[styles.buttonText,{fontWeight: 600}]}>120</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFilter('Pending')}>
                    <View style={styles.cardOut}>
                        <Icon name="clock-outline" style={styles.activePending} size={40} color='#fff' />
                    </View>
                    <View style={styles.cardOut}>
                        <Text style={[styles.buttonText, { marginTop: verticalScale(15) }]}>Pending</Text>
                        <Text style={[styles.buttonText,{fontWeight: 600}]}>120</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFilter(today)}>
                    <View style={styles.cardOut}>
                        <Icon name="cash-plus" style={styles.activeToday} size={40} color='#fff' />
                    </View>
                    <View style={styles.cardOut}>
                        <Text style={[styles.buttonText, { marginTop: verticalScale(15) }]}>Today collection</Text>
                        <Text style={[styles.buttonText,{fontWeight: 600}]}>120</Text>
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
        marginHorizontal: 2,
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
        borderWidth: 1,
        borderColor: '#ddd'
    },
    activeButton: {
        color: '#3232e6ed',
        backgroundColor: '#3737be45',
        padding: 10,
        borderRadius: 50,
    },

    activeComplete: {
        color: '#11ed53',
        backgroundColor: '#11ed5336',
        padding: 10,
        borderRadius: 50,
    },
    activePending: {
        color: '#FFA500',
        backgroundColor: '#ffde213b',
        padding: 10,
        borderRadius: 50,
    },
    activeToday: {
        color: '#39c2c8',
        backgroundColor: '#39c2c82b',
        padding: 10,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: RFValue(12, 480),
        color: '#666666',
    },
    cardOut: {
        flexDirection: 'column',
        alignItems: 'center',
        // marginTop: verticalScale(15),
        justifyContent: 'space-between',
    }
});


