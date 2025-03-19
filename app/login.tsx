import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Install expo-linear-gradient if you're using Expo
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<any>>(); // Initialize navigation
  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success

  
  
  useEffect(() => {
    if (!navigation) {
      console.error('Navigation object is not initialized');
    }
  }, [navigation]);
  const handleLogin = async () => {
    if (!navigation) {
      Alert.alert('Navigation Error', 'Navigation object is not initialized');
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      Alert.alert('Login Successful', `Welcome back, ${email}!`);
      // Navigate to home page
      // navigation.navigate('home');
      setLoginSuccess(true);

    } catch (error) {
      Alert.alert('Login Error', (error as Error).message);
    }
  };

  return (
    <LinearGradient
      // Background gradient
      colors={['#4CAF50', '#4CAF50']}
      style={styles.container}
    >
      <View style={styles.loginBox}>
        {/* Login Title */}
        <Text style={styles.title}>Welcome Back!</Text>

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

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient
            colors={['#4CAF50', '#4CAF50']}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
          
        </TouchableOpacity>



        {loginSuccess && (
          <Link href="/user_menu" style={styles.linkText}>
            Go to Home
          </Link>
        )}

        {/* Forgot Password Text */}
        <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
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
  linkText: {
    marginTop: 15,
    color: '#4CAF50',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  forgotText: {
    marginTop: 15,
    color: '#4CAF50',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});