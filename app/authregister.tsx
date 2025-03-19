import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Install expo-linear-gradient if you're using Expo
import { auth, firestore } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app'; // Import FirebaseError
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Import useNavigation

export default function register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<any>>(); // Initialize navigation

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user details to Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        email: user.email,
        // Add other user details here
      });

      Alert.alert('Registration Successful', `Welcome, ${email}!`);
      // directly take him to login page
      navigation.navigate('login');
      


    } catch (error) {
      const firebaseError = error as FirebaseError; // Assert error type
      Alert.alert('Registration Error', firebaseError.message);
    }
  };

  return (
    <LinearGradient
      // Background gradient
      colors={['#4CAF50', '#4CAF50']}
      style={styles.container}
    >
      <View style={styles.loginBox}>
        {/* Registration Title */}
        <Text style={styles.title}>Create Account</Text>

        {/* Email Input */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        {/* Register Button */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <LinearGradient
            colors={['#4CAF50', '#4CAF50']}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background color
  },
  loginBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent background
    width: '90%',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10, // For Android shadow
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f7f7f7',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  button: {
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden', // So the gradient stays inside the button border
  },
  buttonBackground: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});