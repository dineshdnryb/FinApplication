import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { verticalScale } from 'react-native-size-matters';

const ServicePage = () => {
  const navigation = useNavigation();

  // Sample data for the FlatList
  const services = [
    { id: '1', title: 'Add New', icon: 'plus', navigate: 'CustomerProfile' },
    { id: '2', title: 'Today Task', icon: 'calendar-today', navigate: 'Customer' },
    { id: '3', title: 'Customers', icon: 'account-group-outline', navigate: 'Customer' },
    { id: '4', title: 'Employers', icon: 'briefcase-account', navigate: 'Employer' },
    { id: '5', title: 'Profile', icon: 'account-circle', navigate: 'Profile' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <IconButton
        containerColor="#39c2c82b"
        icon={item.icon}
        size={35}
        iconColor="#39c2c8"
        mode="contained-tonal"
        onPress={() => {
          const filter = new Date(); 
          if (item.id === '2') {
            navigation.navigate(item.navigate, { filter }); 
          } else {
            navigation.navigate(item.navigate);
          }
        }}
      />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={services}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(20),
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
});

export default ServicePage;
