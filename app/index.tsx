import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      {/* Title "NAZAR" */}
      <Text style={styles.title}>NAZAR</Text>

      
      {/* <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text style={styles.linkText}>continue</Text>
      </TouchableOpacity> */}

      <Link href="/home" style={styles.linkText}>
              Go to APP
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#4CAF50', // Green background color
  },
  title: {
    fontSize: 48, 
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  linkText: {
    fontSize: 24, 
    color: '#FFFFFF', 
    textDecorationLine: 'underline', 
  },
});
