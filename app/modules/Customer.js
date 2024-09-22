import React, { useState,useCallback } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useNavigation,useRoute,useFocusEffect } from '@react-navigation/native';
import FilterDate from './Datepicker';
import moment from 'moment';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import SearchBar from './SearchBar'

const allCards = [
  { id: 'ID1', name: 'John Doe', status: 'Complete', collectionDate: '2024-09-21' },
  { id: 'ID2', name: 'Jane Smith', status: 'Pending', collectionDate: '2024-09-20' },
  { id: 'ID3', name: 'Mike Johnson', status: 'Complete', collectionDate: '2023-09-20' },
  { id: 'ID4', name: 'Emily Davis', status: 'Pending', collectionDate: '2023-09-25' },
];

export default function Customer() {
  const navigation = useNavigation();
  const route = useRoute();
  const { filter } = route.params || { filter: 'Total' }; 
  const [currentFilter, setCurrentFilter] = useState('Total');
  const [selectedDate, setSelectedDate] = useState(null); 
  const [resetDate, setResetDate] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(null); 
  const [searchBarOpen, setsearchBarOpen] = useState(false); 
  const [calenderOpen, setcalenderOpen] = useState(false); 

  useFocusEffect(
    useCallback(() => {
      setCurrentFilter(filter);
    setResetDate(true);
    }, [filter])
  );

  const toggleSearch = () => {
    setsearchBarOpen(!searchBarOpen);
}; 

const toggleCalender = () => {
    setcalenderOpen(!calenderOpen);
};

  const handleSearch = (date) => {
    setSearchTerm(date);
  };
  
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    console.log(date)
  };

  const filteredCards = allCards.filter(card =>
    (currentFilter === 'Total' || card.status === currentFilter) &&
    (!selectedDate || moment(card.collectionDate).isSame(selectedDate, 'day')),
    
  );
  console.log(filteredCards)
  
  const handleReset = () => {
    setCurrentFilter('Total');
    setSelectedDate(null); 
    setResetDate(true);
  };

    return (
    <ScrollView style={styles.Container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.title}>{currentFilter}</Text>
        <View style={styles.FilterContainer}>
            <TouchableOpacity style={styles.filterBtn} onPress={toggleSearch}>
              <Icon name="filter-outline" size={30} color="#000" /> 
           </TouchableOpacity> 
           { searchBarOpen && (
             <TouchableOpacity onPress={toggleCalender} style={{marginLeft: 10}}>
             <FilterDate currentDate={false} onDateSelect={handleDateSelect} reset={resetDate} setReset={setResetDate} />
          </TouchableOpacity>
           )}
            {selectedDate !==null && ( 
              <TouchableOpacity style={[styles.filterBtn,{marginLeft: 10}]} onPress={handleReset}>
                <Icon name="refresh" size={30} color="#000" /> 
                </TouchableOpacity>
            )}
        </View>
      </View>
      { searchBarOpen && (
        <View>
          <SearchBar onSearch={handleSearch}/>
          <FilterDate currentDate={true} onDateSelect={handleDateSelect} reset={resetDate} setReset={setResetDate} />
        </View>
    )}
      
      {filteredCards.map((card, index) => (
        <TouchableOpacity style={styles.card} >
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.id}>{card.collectionDate}</Text>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.name}>Collection Date</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.status}>{card.status}</Text>
              <Icon name="chevron-right" size={24} />
            </View>
          </View>
        </TouchableOpacity>
      ))}
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
    borderColor: '#ddd',
    flexDirection: 'row',
    padding: 10,
    marginTop: verticalScale(20),
    borderLeftWidth: 4,
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
  name: {
    fontSize: RFValue(13, 580),
    marginTop: verticalScale(15),
    color: '#666',

  },
  id: {
    fontSize: RFValue(12, 500),
    color: '#39c2c8',
  },
  title: {
    fontSize: RFValue(12, 400),
    color: '#000',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    color: '#000',
    marginRight: 5,
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
  FilterContainer:{
    flexDirection:'row',
    
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


