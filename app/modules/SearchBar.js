import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { verticalScale } from "react-native-size-matters";
import { Searchbar } from 'react-native-paper';

const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handlesearch = (data) => {
    setSearchTerm(data);
    onSearch(data)
  }; 
  
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <View style={styles.container}>
        <Searchbar mode='bar'
      placeholder="Search" showDivider={true}
      onChangeText={handlesearch}
      value={searchTerm} style={[styles.searchBar,styles.shadowProp]}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: verticalScale(20)
  },
  searchBar:{
      backgroundColor:'#f8f8f8',
      borderColor:'#f8f8f8',
      borderWidth:1,
  },
  shadowProp: {
    shadowColor: '#666',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 3,
    elevation: 20,
  },
});

export default SearchBar;
