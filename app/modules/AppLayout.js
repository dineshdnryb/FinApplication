import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Customer from './Customer';
import Employer from './Employer';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const CustomHeader = () => (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => console.log('Image clicked')}>
      <Image
        source={{ uri: '' }}
        style={styles.headerImage}
      />
    </TouchableOpacity>
    {/* <Text style={styles.headerTitle}>Your App</Text> */}
    <TouchableOpacity onPress={() => console.log('Notification clicked')}>
      <Icon name="notifications" size={24} color="#888888" />
    </TouchableOpacity>
  </View>
  );
export default function AppLayout() {
  return (
    <Tab.Navigator screenOptions={{
        header: () => <CustomHeader />,
        tabBarStyle: {
          backgroundColor: '#ffffff', 
          borderTopColor: '#e0e0e0',
          borderTopWidth: 1,
          height: 70, 
          borderRadius:0,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarIconStyle: {
          marginBottom: 0, 
        },
        tabBarActiveTintColor: '#39c2c8',  
        tabBarInactiveTintColor: '#888888', 
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size ,focused}) => (
            <Icon name="home" color={color} size={30}  style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}/>
          ),
        }}
      />
      <Tab.Screen
        name="Customer"
        component={Customer}
        options={{
          tabBarIcon: ({ color, size,focused }) => (
            <Icon name="person" color={color} size={30}  style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}/>
          ),
        }}
      />
       
      <Tab.Screen
        name="Employer"
        component={Employer}
        options={{
          tabBarIcon: ({ color, size,focused }) => (
            <Icon name="work" color={color} size={30}  style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size ,focused}) => (
            <Icon name="person-outline" color={color} size={30}  style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',

  },
  headerImage: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    color: '#0eb9b3',
    fontSize: 18,
  },
});