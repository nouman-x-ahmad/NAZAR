// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient'; // Install expo-linear-gradient if you're using Expo
// import { auth, firestore } from '../config/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { FirebaseError } from 'firebase/app'; // Import FirebaseError
// import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
// import { useNavigation, NavigationProp } from '@react-navigation/native'; // Import useNavigation

// export default function register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation<NavigationProp<any>>(); // Initialize navigation

//   const handleRegister = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Add user details to Firestore
//       await setDoc(doc(firestore, 'users', user.uid), {
//         email: user.email,
//         // Add other user details here
//       });

//       Alert.alert('Registration Successful', `Welcome, ${email}!`);
//       // directly take him to login page
//       navigation.navigate('login');
      


//     } catch (error) {
//       const firebaseError = error as FirebaseError; // Assert error type
//       Alert.alert('Registration Error', firebaseError.message);
//     }
//   };

//   return (
//     <LinearGradient
//       // Background gradient
//       colors={['#4CAF50', '#4CAF50']}
//       style={styles.container}
//     >
//       <View style={styles.loginBox}>
//         {/* Registration Title */}
//         <Text style={styles.title}>Create Account</Text>

//         {/* Email Input */}
//         <TextInput
//           placeholder="Email"
//           placeholderTextColor="#999"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           style={styles.input}
//         />

//         {/* Password Input */}
//         <TextInput
//           placeholder="Password"
//           placeholderTextColor="#999"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />

//         {/* Register Button */}
//         <TouchableOpacity style={styles.button} onPress={handleRegister}>
//           <LinearGradient
//             colors={['#4CAF50', '#4CAF50']}
//             style={styles.buttonBackground}
//           >
//             <Text style={styles.buttonText}>Register</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5', // Light background color
//   },
//   loginBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent background
//     width: '90%',
//     padding: 20,
//     borderRadius: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 10, // For Android shadow
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#f7f7f7',
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginBottom: 20,
//     fontSize: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 5, // For Android shadow
//   },
//   button: {
//     width: '100%',
//     borderRadius: 25,
//     overflow: 'hidden', // So the gradient stays inside the button border
//   },
//   buttonBackground: {
//     paddingVertical: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { auth, firestore } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();

  const handleRegister = async () => {
    if (!agreeToTerms) {
      Alert.alert('Terms Required', 'Please agree to the Terms & Conditions to continue.');
      return;
    }

    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      Alert.alert('Missing Information', 'Please fill in all fields to create your account.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user details to Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        email: user.email,
        firstName,
        lastName,
        phoneNumber,
        createdAt: new Date(),
      });

      Alert.alert('Registration Successful', `Welcome, ${firstName}!`);
      navigation.navigate('login');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      Alert.alert('Registration Error', firebaseError.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LinearGradient
      colors={['#0a192f', '#112240', '#1a365d']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <BlurView intensity={20} tint="dark" style={styles.glassContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us today</Text>
          
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Ionicons name="person-outline" size={40} color="#333" />
            </View>
            <View style={styles.cameraIconContainer}>
              <Ionicons name="camera" size={20} color="#fff" />
            </View>
          </View>
          
          <View style={styles.nameContainer}>
            <View style={styles.nameInput}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#aaa"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
              />
            </View>
            
            <View style={styles.nameInput}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#aaa"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.inputWithIcon}
            />
            <TouchableOpacity 
              style={styles.eyeIcon} 
              onPress={togglePasswordVisibility}
            >
              <Ionicons 
                name={showPassword ? "eye-off" : "eye"} 
                size={24} 
                color="#555" 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#aaa"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <View style={styles.termsContainer}>
            <TouchableOpacity 
              style={[
                styles.checkbox, 
                agreeToTerms ? styles.checkboxChecked : null
              ]} 
              onPress={() => setAgreeToTerms(!agreeToTerms)}
            >
              {agreeToTerms && <Ionicons name="checkmark" size={18} color="#fff" />}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I agree to the Terms & Conditions
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleRegister}
            disabled={!agreeToTerms}
          >
            <LinearGradient
              colors={['#6c63ff', '#5c50ff']}
              style={styles.buttonBackground}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.divider} />
          </View>

          

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.loginLink}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  glassContainer: {
    width: '90%',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#6c63ff',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  nameContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nameInput: {
    width: '48%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#fff',
  },
  inputWithIcon: {
    width: '100%',
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingRight: 50,
    fontSize: 16,
    color: '#fff',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6c63ff',
    backgroundColor: 'transparent',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#6c63ff',
  },
  termsText: {
    color: '#ddd',
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 55,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 25,
  },
  buttonBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dividerText: {
    color: '#ddd',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 25,
  },
  socialButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#ddd',
    fontSize: 14,
  },
  loginLink: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});