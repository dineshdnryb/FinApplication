import React from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Profile() {

    return (
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Home Screen Content</Text>
      
      <Text style={styles.text}>Home Screen Content</Text>
     
     
    </ScrollView>
    );
        
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});
