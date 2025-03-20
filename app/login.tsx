// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient'; // Install expo-linear-gradient if you're using Expo
// import { auth } from '../config/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { Link } from 'expo-router';

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation<NavigationProp<any>>(); // Initialize navigation
//   const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success

  
  
//   useEffect(() => {
//     if (!navigation) {
//       console.error('Navigation object is not initialized');
//     }
//   }, [navigation]);
//   const handleLogin = async () => {
//     if (!navigation) {
//       Alert.alert('Navigation Error', 'Navigation object is not initialized');
//       return;
//     }
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       Alert.alert('Login Successful', `Welcome back, ${email}!`);
//       // Navigate to home page
//       // navigation.navigate('home');
//       setLoginSuccess(true);

//     } catch (error) {
//       Alert.alert('Login Error', (error as Error).message);
//     }
//   };

//   return (
//     <LinearGradient
//       // Background gradient
//       colors={['#4CAF50', '#4CAF50']}
//       style={styles.container}
//     >
//       <View style={styles.loginBox}>
//         {/* Login Title */}
//         <Text style={styles.title}>Welcome Back!</Text>

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

//         {/* Login Button */}
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <LinearGradient
//             colors={['#4CAF50', '#4CAF50']}
//             style={styles.buttonBackground}
//           >
//             <Text style={styles.buttonText}>Login</Text>
//           </LinearGradient>
          
//         </TouchableOpacity>



//         {loginSuccess && (
//           <Link href="/user_menu" style={styles.linkText}>
//             Go to Home
//           </Link>
//         )}

//         {/* Forgot Password Text */}
//         <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
//           <Text style={styles.forgotText}>Forgot Password?</Text>
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
//   linkText: {
//     marginTop: 15,
//     color: '#4CAF50',
//     fontSize: 14,
//     textDecorationLine: 'underline',
//   },
//   forgotText: {
//     marginTop: 15,
//     color: '#4CAF50',
//     fontSize: 14,
//     textDecorationLine: 'underline',
//   },
// });
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();
  const [loginSuccess, setLoginSuccess] = useState(false);

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
      setLoginSuccess(true);
    } catch (error) {
      Alert.alert('Login Error', (error as Error).message);
    }
  };

  return (
    <LinearGradient
      colors={['#0A1E40', '#0A1E40']}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}
      >
        <BlurView intensity={20} tint="dark" style={styles.loginBox}>
          {/* Fingerprint Icon */}
          <View style={styles.iconContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Ionicons name="finger-print" size={64} color="rgba(255,255,255,0.9)" />
            </View>
          </View>
          </View>

          {/* Welcome Text */}
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>

          {/* Email Input */}
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="rgba(255,255,255,0.7)" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="rgba(255,255,255,0.5)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          {/* Password Input */}
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="help-circle-outline" size={20} color="rgba(255,255,255,0.7)" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="rgba(255,255,255,0.5)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="rgba(255,255,255,0.7)" 
              />
            </TouchableOpacity>
          </View>

          {/* Remember Me & Forgot Password */}
          <View style={styles.optionsRow}>
            <TouchableOpacity 
              style={styles.checkboxContainer} 
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxActive]}>
                {rememberMe && <Ionicons name="checkmark" size={16} color="#fff" />}
              </View>
              <Text style={styles.checkboxLabel}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
          
          {loginSuccess && (
            <Link href="/user_menu" style={styles.linkText}>
              Go to Home
            </Link>
          )}

          {/* Social Login Section */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.divider} />
          </View>

          

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Link href="/authregister" style={styles.signUpLink}>
              Sign up
            </Link>
          </View>
        </BlurView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardAvoidView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '90%',
    maxWidth: 400,
    borderRadius: 30,
    overflow: 'hidden',
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: 'rgba(55, 73, 107, 0.6)', // Semi-transparent background
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  fingerprint: {
    width: 70,
    height: 70,
    tintColor: 'black',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 40,
    textAlign: 'center',
  },
  iconBackground: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(108, 71, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(108, 71, 255, 0.3)',
  },
  inputLabel: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 14,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: 'white',
    fontSize: 16,
  },
  eyeIcon: {
    padding: 8,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxActive: {
    backgroundColor: '#6C47FF',
    borderColor: '#6C47FF',
  },
  checkboxLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  forgotText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  signInButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#6C47FF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 10,
    color: '#6C47FF',
    fontSize: 14,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  dividerText: {
    color: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    marginRight: 5,
  },
  signUpLink: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});