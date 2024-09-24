import React, { useState, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import FilterDate from './Datepicker';
import moment from 'moment';
import SearchBar from './SearchBar'

const allCards = [
  { id: '34', name: 'John Doe', status: 'Complete', collectionDate: '2024-09-21',collectionDay:'Tuesday' },
  { id: '49', name: 'Jane Smith', status: 'Pending', collectionDate: '2024-09-20',collectionDay:'Sunday' },
  { id: 'ID3', name: 'Mike Johnson', status: 'Complete', collectionDate: '2023-09-20',collectionDay:'Monday' },
  { id: 'ID4', name: 'Emily Davis', status: 'Pending', collectionDate: '2023-09-25',collectionDay:'Monday' },
];

export default function Customer() {
  const navigation = useNavigation();
  const route = useRoute();
  const { filter } = route.params || { filter: 'Total' };
  const [currentFilter, setCurrentFilter] = useState('Total');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [resetDate, setResetDate] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBarOpen, setsearchBarOpen] = useState(false);
  const [calenderOpen, setcalenderOpen] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setCurrentFilter(filter);
      setResetDate(true);
      if(filter != 'Complete' && filter != 'Pending' &&  filter != 'Total') {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = dayNames[filter.getDay()];
        setSelectedDay(today)
       }
  
    }, [filter])
  );

  //open search bar
  const toggleSearch = () => {
    setsearchBarOpen(!searchBarOpen);
  };

  //open calender
  const toggleCalender = () => {
    setcalenderOpen(!calenderOpen);
  };

  //search
  const handleSearch = (date) => {
    setSearchTerm(date);
  };

  //date search 
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  //filter
  const filteredCards = allCards.filter(card =>
    (currentFilter === 'Total' || card.status === currentFilter) &&
    (!selectedDate || moment(card.collectionDate).isSame(selectedDate, 'day')) &&
    (card.id.includes(searchTerm.toLowerCase()) ||
      (card.name && card.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (card.status && card.status.toLowerCase().includes(searchTerm.toLowerCase()))) ||
    (card.collectionDay.toLowerCase() === selectedDay.toLowerCase())
  );

  // filter reset
  const handleReset = () => {
    setCurrentFilter('Total');
    setSelectedDate(null);
    setSearchTerm('');
    setResetDate(true);
  };

  // profile navigation
  const handleProfile = (cardId) => {
    navigation.navigate('CustomerView');  
  };

  return (
    <ScrollView style={styles.Container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>Customer Details</Text>
        <View style={styles.FilterContainer}>
          <TouchableOpacity style={styles.filterBtn} onPress={toggleSearch}>
            <Icon name="filter-outline" size={30} color="#000" />
          </TouchableOpacity>
          {(selectedDate !== null || searchTerm !== '') && (
            <TouchableOpacity style={[styles.filterBtn, { marginLeft: 10 }]} onPress={handleReset}>
              <Icon name="refresh" size={30} color="#000" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {searchBarOpen && (
        <View>
          <SearchBar onSearch={handleSearch} reset={resetDate} setReset={setResetDate} />
          <FilterDate currentDate={true} onDateSelect={handleDateSelect} reset={resetDate} setReset={setResetDate} />
        </View>
      )}

      <View style={{ marginTop: verticalScale(10), marginBottom: verticalScale(10) }}>
        {filteredCards.map((card, index) => (
          <TouchableOpacity style={[styles.card, { borderLeftColor: card.status === 'Complete' ? '#11ed53' : '#FFA500' }]} onPress={() => handleProfile(card.id)} >
            <View style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={styles.id}>{card.id}</Text>
                <Text style={styles.title}>{card.name}</Text>
                <Text style={styles.datetext}>{card.collectionDate}</Text>
              </View>
              <View style={styles.statusContainer}>
                <Text style={[styles.status, { color: "#ffffff", backgroundColor: card.status === 'Complete' ? '#11ed53' : '#FFA500' }]}>{card.status}</Text>
                <Icon name="chevron-right" size={24} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {filteredCards.length == 0 && (
        <View style={styles.norecord}>
          <Icon name='file-account-outline' size={100}></Icon>
          <Text style={{ fontSize: RFValue(12, 500), }}>No Records</Text>
        </View>
      )}


    </ScrollView>
  );

}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ffffff',
    padding: 10,
  },

  card: {
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderRightColor: '#ddd',
    borderBottomColor: '#ddd',
    borderTopColor: '#ddd',
    flexDirection: 'row',
    padding: 10,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    borderLeftWidth: 6,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },

  id: {
    fontSize: RFValue(12, 500),
    color: '#39c2c8',
    fontWeight: 'bold',
  },
  title: {
    fontSize: RFValue(12, 500),
    color: '#000',
    fontWeight: 'bold',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(4),
  },

  datetext: {
    fontSize: RFValue(13, 700),
    color: '#666',
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontSize: 13,
    fontWeight: 600,
    color: '#000',
    marginRight: 5,
    padding: 6,
    borderRadius: 5,
  },
  cardOut: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  resetbtn: {
    color: '#000',
    fontSize: RFValue(13, 650),
    backgroundColor: '#ffffff',
  },
  FilterContainer: {
    flexDirection: 'row',

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

  },
  norecord: {
    alignItems: 'center',
  }
});


