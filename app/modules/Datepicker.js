import React, { useState, useEffect } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import { RFValue } from 'react-native-responsive-fontsize';
import { verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

const FilterDate = ({ onDateSelect, reset, setReset }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedYear, setSelectedYear] = useState(moment().year());
    const [selectedMonth, setSelectedMonth] = useState(moment().month());

    useEffect(() => {
        if (reset) {
            setSelectedDate(null);
            onDateSelect(null);
            setReset(false);
        }
    }, [reset]);

    const generateMonthDates = (year, month) => {
        const dates = [];
        const startDate = moment().year(year).month(month).date(1);
        const daysInMonth = startDate.daysInMonth();

        for (let day = 1; day <= daysInMonth; day++) {
            dates.push(startDate.clone().date(day));
        }
        return dates;
    };

    const dates = generateMonthDates(selectedYear, selectedMonth);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        onDateSelect(date);
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

    // Generate year options from 2000 to current year + 2
    const yearOptions = Array.from({ length: moment().year() + 2 - 2000 + 1 }, (_, i) => 2000 + i);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={styles.filterDate}>
                    Calender: {selectedMonth + 1}/{selectedYear}
                </Text>
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => setModalVisible(true)}>
                    <Icon name="calendar-edit" size={24} />
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Year and Month</Text>
                        <View style={styles.selectorContainer}>
                            <View style={styles.yearMonthContainer}>
                                <Text>Year</Text>
                                <FlatList
                                    data={yearOptions}
                                    horizontal showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            onPress={() => setSelectedYear(item)}
                                            style={[
                                                styles.yearMonthItem,
                                                item === selectedYear && styles.selectedYearMonthItem,
                                            ]}
                                        >
                                            <Text style={[
                                                item === selectedYear && styles.selectedText,
                                            ]}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item) => item.toString()}
                                />
                            </View>
                            <View style={styles.yearMonthContainer}>
                                <Text>Month</Text>
                                <FlatList showsHorizontalScrollIndicator={false}
                                    data={moment.months()}
                                    horizontal
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity
                                            onPress={() => setSelectedMonth(index)}
                                            style={[
                                                styles.yearMonthItem,
                                                index === selectedMonth && styles.selectedYearMonthItem,
                                            ]}
                                        >
                                            <Text style={[
                                                index === selectedMonth && styles.selectedText,
                                            ]}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item) => item}
                                />
                            </View>
                        </View>
                        <Button buttonColor='#39c2c8' mode="contained" onPress={() => setModalVisible(false)}  >Generate Calender</Button>
                    </View>
                </View>
            </Modal>

            <FlatList
                data={dates}
                horizontal
                keyExtractor={(item) => item.toString()}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.listContainer, { marginTop: verticalScale(20) }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
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
        color: '#ffffff',
    },
    filterDate: {
        color: '#000',
        marginTop: verticalScale(15),
        fontSize: RFValue(13, 580),
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: RFValue(18, 780),
        marginBottom: 20,
        textAlign: 'center',
    },
    selectorContainer: {
        marginBottom: 20,
    },
    yearMonthContainer: {
        flexDirection: 'column',
        marginVertical: 10,
    },
    yearMonthItem: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedYearMonthItem: {
        backgroundColor: '#39c2c8',
        borderColor: '#39c2c8',
    },
    selectedText: {
        color: '#ffffff',
    },
});

export default FilterDate;
