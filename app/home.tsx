import React from 'react';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export default function Index() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      {/* Login Button */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}
      

      <TouchableOpacity
        style={styles.button}>
            <Link href="/login" style={styles.buttonText}>
              login
            </Link>
        </TouchableOpacity>

      {/* Registration Button */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.buttonText}>Registration</Text>
      </TouchableOpacity> */}

        <TouchableOpacity
        style={styles.button}>
            <Link href="/authregister" style={styles.buttonText}>
              Registeration
            </Link>

        </TouchableOpacity>
          

      
      {/* Guest User Button */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('user_menu')}
      >
        <Text style={styles.buttonText}>Guest User</Text>
      </TouchableOpacity> */}



        <TouchableOpacity
        style={styles.button}>
            <Link href="/user_menu" style={styles.buttonText}>
              Guest user
            </Link>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the buttons vertically
    alignItems: 'center', // Center the buttons horizontally
    backgroundColor: '#f5f5f5', // Light background color
    padding: 20, // Add padding to the container
  },
  button: {
    backgroundColor: '#4CAF50', // Button background color (Green)
    padding: 15, // Button padding
    margin: 10, // Space between buttons
    borderRadius: 5, // Rounded corners
    width: '80%', // Button width (80% of the screen width)
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 18, // Font size for the button text
    fontWeight: 'bold', // Bold text
  },
});
