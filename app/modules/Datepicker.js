import React, { useState, useEffect } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import DateTimePicker from 'react-native-ui-datepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';

const FilterDate = ({ onDateSelect, reset, setReset, currentDate }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(dayjs());
    const [showPicker, setShowPicker] = useState(false);

    
    useEffect(() => {
        if (reset) {
            // setSelectedDate(null);
            // onDateSelect(null);
            setReset(false);
        }
    }, [reset]);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    const generateDates = () => {
        const dates = [];
        for (let i = -2; i <= 10; i++) {
            dates.push(moment().add(i, 'days'));
        }
        return dates;
    };

    const dates = generateDates();

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        // onDateSelect(selectedDate);
        // setShowPicker(false); 
      };

    const renderItem = ({ item }) => {
        const isSelected = item.isSame(selectedDate, 'day');

        return (
            <TouchableOpacity onPress={() => handleDateSelect(item)}>
                <View style={[styles.dateItem, isSelected && styles.selectedDate]}>
                    <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
                        {item.format('ddd')}
                    </Text>
                    <Text style={[styles.dayText, isSelected && styles.selectedDateText]}>
                        {item.format('DD')}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {currentDate &&(
                <FlatList
                    data={dates}
                    horizontal
                    keyExtractor={(item) => item.toString()}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.listContainer, { marginTop: verticalScale(20), }]}
                />
            )}
            {!currentDate && (
                <TouchableOpacity onPress={togglePicker} style={styles.filterBtn}>
                    <Icon name="calendar-search" size={30} color="#000" />
                </TouchableOpacity>
            )}
            {selectedDate && (
                <Text style={styles.filterDate}>
                    Filter Date: {selectedDate.format('DD-MM-YYYY')}
                </Text>
            )}
            <Modal transparent={true} animationType="fade" visible={showPicker} onRequestClose={togglePicker} >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <DateTimePicker date={date}
                            mode="single" onChange={(params) => handleDateChange(params.date)}
                        />
                        <TouchableOpacity onPress={togglePicker} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',

    },
    listContainer: {
        // paddingHorizontal: 10,
    },
    dateItem: {
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedDate: {
        backgroundColor: '#39c2c8',
        borderColor: '#39c2c8',
    },
    dateText: {
        fontSize: RFValue(13, 780),
    },
    dayText: {
        marginTop: verticalScale(4),
        fontSize: RFValue(13, 580),
    },
    selectedDateText: {
        color: '#ffffff'
    },

    filterDate: {
        color: '#000',
        marginTop: verticalScale(15),
        fontSize: RFValue(13, 580),
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    closeButtonText: {
        color: 'white',
    },
    selectedDatesTitle: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    dateText: {
        marginVertical: 2,
    },
    filterBtn: {
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row', 
        padding: 6,
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
    
    }
});

export default FilterDate;
