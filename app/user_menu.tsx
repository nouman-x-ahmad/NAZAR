import React from 'react';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function user_menu() {
  const navigation = useNavigation<NavigationProp<any>>();
    //remove the goback functionality and icon
    
    
    
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("camera")}
      >
        <Text style={styles.buttonText}>Camera</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button}>
      <Link href="/camera" style={
        styles.buttonText
      }>
              camera
      </Link>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("map")}
      >
        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button}>
      <Link href="/map" style={
        styles.buttonText
      }>
              map
      </Link>
      </TouchableOpacity>
      <TouchableOpacity>
      <Link href="/gallery" style={
        styles.buttonText
      }>
              map
      </Link>
      </TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Align children in a row
    justifyContent: 'center', // Center the buttons
    alignItems: 'center', // Center vertically
    padding: 20, // Add padding to the container
  },
  button: {
    backgroundColor: '#4CAF50', // Button background color
    padding: 15, // Button padding
    margin: 10, // Spacing between buttons
    borderRadius: 5, // Rounded corners
    width: 100, // Fixed width for uniform button size
    alignItems: 'center', // Center text in the button
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 16, // Text size
    fontWeight: 'bold', // Bold text
  },
});

