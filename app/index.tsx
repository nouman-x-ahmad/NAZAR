// import React from 'react';
// import { Link } from 'expo-router';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationProp, useNavigation } from '@react-navigation/native';

// export default function SplashScreen() {
//   const navigation = useNavigation<NavigationProp<any>>();

//   return (
//     <View style={styles.container}>
//       {/* Title "NAZAR" */}
//       <Text style={styles.title}>NAZAR</Text>

      
//       {/* <TouchableOpacity onPress={() => navigation.navigate('home')}>
//         <Text style={styles.linkText}>continue</Text>
//       </TouchableOpacity> */}

//       <Link href="/home" style={styles.linkText}>
//               Go to APP
//       </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Center vertically
//     alignItems: 'center', // Center horizontally
//     backgroundColor: '#4CAF50', // Green background color
//   },
//   title: {
//     fontSize: 48, 
//     color: '#FFFFFF', 
//     fontWeight: 'bold', 
//     marginBottom: 20, 
//   },
//   linkText: {
//     fontSize: 24, 
//     color: '#FFFFFF', 
//     textDecorationLine: 'underline', 
//   },
// });
import React, { useEffect, useRef } from 'react';
import { Link } from 'expo-router';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated, 
  Dimensions, 
  SafeAreaView 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const navigation = useNavigation();
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    // Initial fade and scale in
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();
    
    // Continuous pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ])
    ).start();
  }, []);
  
  return (
    <LinearGradient
      colors={['#0A1E40', '#112240', '#1A365D']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Logo and Title */}
          <Animated.View 
            style={[
              styles.logoContainer, 
              { 
                opacity: fadeAnim, 
                transform: [
                  { scale: scaleAnim }
                ] 
              }
            ]}
          >
            <LinearGradient
              colors={['rgba(108, 71, 255, 0.8)', 'rgba(108, 71, 255, 0.2)']}
              style={styles.logoGradient}
            >
              <Animated.View style={[styles.logoInner, { transform: [{ scale: pulseAnim }] }]}>
                <Ionicons name="eye" size={80} color="white" />
              </Animated.View>
            </LinearGradient>
            
            <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
              NAZAR
            </Animated.Text>
            <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
              AI-Powered Eye Diagnosis
            </Animated.Text>
          </Animated.View>
          
          {/* Action Button */}
          <Animated.View 
            style={{ 
              opacity: fadeAnim, 
              transform: [{ translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0]
              })}] 
            }}
          >
            <Link href="/home" asChild>
              <TouchableOpacity style={styles.actionButton}>
                <BlurView intensity={20} tint="dark" style={styles.buttonBlur}>
                  <LinearGradient
                    colors={['#6C47FF', '#5034d0']}
                    style={styles.gradientButton}
                  >
                    <Text style={styles.buttonText}>Get Started</Text>
                    <Ionicons name="arrow-forward" size={20} color="white" />
                  </LinearGradient>
                </BlurView>
              </TouchableOpacity>
            </Link>
          </Animated.View>
          
          {/* Footer text */}
          <Animated.Text 
            style={[
              styles.footerText, 
              { 
                opacity: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.7]
                }) 
              }
            ]}
          >
            Detect eye conditions with the power of AI
          </Animated.Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1E40',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoGradient: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(108, 71, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    letterSpacing: 1,
  },
  actionButton: {
    width: width * 0.7,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 40,
  },
  buttonBlur: {
    flex: 1,
  },
  gradientButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  footerText: {
    position: 'absolute',
    bottom: 50,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
});