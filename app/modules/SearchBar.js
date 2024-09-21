import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

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
        <View style={styles.searchContainer}>
            <Icon name="search" size={25} color="#888" style={styles.icon} />
            <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChangeText={handlesearch} />
            {searchTerm.length > 0 && (
            <TouchableOpacity onPress={clearSearch}>
                <Icon name="close" size={25} color="#888" />
            </TouchableOpacity>
            )}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginTop:verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5, 
    },
    shadowOpacity: 0.9,
    shadowRadius: 10, 
    elevation: 3, 
    margin: 1,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize:RFValue(16,680),

  },
  icon: {
    marginRight: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
 
});

export default SearchBar;
