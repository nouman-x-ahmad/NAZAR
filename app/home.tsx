// import React from 'react';
// import { Link } from 'expo-router';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { Button } from 'react-native';

// export default function Index() {
//   const navigation = useNavigation<NavigationProp<any>>();

//   return (
//     <View style={styles.container}>
//       {/* Login Button */}
//       {/* <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('login')}
//       >
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity> */}
      

//       <TouchableOpacity
//         style={styles.button}>
//             <Link href="/login" style={styles.buttonText}>
//               login
//             </Link>
//         </TouchableOpacity>

//       {/* Registration Button */}
//       {/* <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Registration')}
//       >
//         <Text style={styles.buttonText}>Registration</Text>
//       </TouchableOpacity> */}

//         <TouchableOpacity
//         style={styles.button}>
//             <Link href="/authregister" style={styles.buttonText}>
//               Registeration
//             </Link>

//         </TouchableOpacity>
          

      
//       {/* Guest User Button */}
//       {/* <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('user_menu')}
//       >
//         <Text style={styles.buttonText}>Guest User</Text>
//       </TouchableOpacity> */}



//         <TouchableOpacity
//         style={styles.button}>
//             <Link href="/user_menu" style={styles.buttonText}>
//               Guest user
//             </Link>

//         </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Center the buttons vertically
//     alignItems: 'center', // Center the buttons horizontally
//     backgroundColor: '#f5f5f5', // Light background color
//     padding: 20, // Add padding to the container
//   },
//   button: {
//     backgroundColor: '#4CAF50', // Button background color (Green)
//     padding: 15, // Button padding
//     margin: 10, // Space between buttons
//     borderRadius: 5, // Rounded corners
//     width: '80%', // Button width (80% of the screen width)
//     alignItems: 'center', // Center the text inside the button
//   },
//   buttonText: {
//     color: '#FFFFFF', // White text color
//     fontSize: 18, // Font size for the button text
//     fontWeight: 'bold', // Bold text
//   },
// });
// import React from 'react';
// import { Link } from 'expo-router';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { Button } from 'react-native';

// export default function Index() {
//   const navigation = useNavigation<NavigationProp<any>>();

//   return (
//     <View style={styles.container}>
//       {/* Login Button */}
//       {/* <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('login')}
//       >
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity> */}
      

//       <TouchableOpacity
//         style={styles.button}>
//             <Link href="/login" style={styles.buttonText}>
//               login
//             </Link>
//         </TouchableOpacity>

//       {/* Registration Button */}
//       {/* <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Registration')}
//       >
//         <Text style={styles.buttonText}>Registration</Text>
//       </TouchableOpacity> */}

//         <TouchableOpacity
//         style={styles.button}>
//             <Link href="/authregister" style={styles.buttonText}>
//               Registeration
//             </Link>

//         </TouchableOpacity>
          

      
//       {/* Guest User Button */}
//       {/* <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('user_menu')}
//       >
//         <Text style={styles.buttonText}>Guest User</Text>
//       </TouchableOpacity> */}



//         <TouchableOpacity
//         style={styles.button}>
//             <Link href="/user_menu" style={styles.buttonText}>
//               Guest user
//             </Link>

//         </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Center the buttons vertically
//     alignItems: 'center', // Center the buttons horizontally
//     backgroundColor: '#f5f5f5', // Light background color
//     padding: 20, // Add padding to the container
//   },
//   button: {
//     backgroundColor: '#4CAF50', // Button background color (Green)
//     padding: 15, // Button padding
//     margin: 10, // Space between buttons
//     borderRadius: 5, // Rounded corners
//     width: '80%', // Button width (80% of the screen width)
//     alignItems: 'center', // Center the text inside the button
//   },
//   buttonText: {
//     color: '#FFFFFF', // White text color
//     fontSize: 18, // Font size for the button text
//     fontWeight: 'bold', // Bold text
//   },
// });
// import React from 'react';
// import { Link } from 'expo-router';
// import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { BlurView } from 'expo-blur';

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />
      
//       {/* Main content container */}
//       <View style={styles.contentContainer}>
//         {/* Header with App Name and Buttons */}
//         <View style={styles.header}>
//           <Text style={styles.appName}>Nazar</Text>
          
//           <View style={styles.headerButtons}>
//             <TouchableOpacity style={styles.loginButton}>
//               <Link href="/login" style={styles.loginButtonText}>
//                 Login
//               </Link>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.signUpButton}>
//               <Link href="/authregister" style={styles.signUpButtonText}>
//                 Sign Up
//               </Link>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Welcome Text */}
//         <View style={styles.welcomeContainer}>
//           <Text style={styles.welcomeTitle}>Welcome to{'\n'}Nazar</Text>
//           <Text style={styles.welcomeSubtitle}>Cataracts Screening App</Text>
//         </View>
        
//         {/* Glass Card */}
        
//         {/* Guest Button - Hidden at bottom for navigation compatibility */}
//         <Link href="/user_menu" asChild>
//           <TouchableOpacity style={styles.glassCard}>
//             <View style={styles.cardContent}>
//               <View style={styles.iconPlaceholder}>
//                 <Text style={styles.iconText}>👤</Text>
//               </View>
//               <Text style={styles.cardTitle}>Guest User</Text>
//               <Text style={styles.cardDescription}>Continue as a guest user to access the app</Text>
//             </View>
//           </TouchableOpacity>
//         </Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0A1E40', // Dark blue background
//   },
//   contentContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 80,
//   },
//   appName: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   headerButtons: {
//     flexDirection: 'row',
//   },
//   loginButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     paddingVertical: 10,
//     paddingHorizontal: 24,
//     borderRadius: 24,
//     marginRight: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   signUpButton: {
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     paddingHorizontal: 24,
//     borderRadius: 24,
//   },
//   signUpButtonText: {
//     color: '#6C47FF', // Purple color
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginBottom: 50,
//   },
//   welcomeTitle: {
//     fontSize: 42,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   welcomeSubtitle: {
//     fontSize: 20,
//     color: 'rgba(255, 255, 255, 0.8)',
//     textAlign: 'center',
//   },
//   glassCard: {
//     borderRadius: 24,
//     overflow: 'hidden',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   cardContent: {
//     alignItems: 'center',
//     padding: 30,
//   },
//   iconPlaceholder: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: 'rgba(255, 255, 255, 0.5)',
//     borderStyle: 'dashed',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   iconText: {
//     fontSize: 24,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   cardTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 10,
//   },
//   cardDescription: {
//     fontSize: 16,
//     color: 'rgba(255, 255, 255, 0.7)',
//     textAlign: 'center',
//   },
//   hiddenButton: {
//     position: 'absolute',
//     bottom: -50, // Hide off screen but keep accessible
//     alignSelf: 'center',
//     opacity: 0,
//   },
//   hiddenButtonText: {
//     color: 'transparent',
//   },
// });

import React from 'react';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Background Gradient */}
      <LinearGradient
        colors={['#0A1E40', '#172E63', '#1D387A']}
        style={styles.backgroundGradient}
        start={{ x: 0.4, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      />
      
      {/* Main content container */}
      <View style={styles.contentContainer}>
        {/* Header with App Name and Buttons */}
        <View style={styles.header}>
          <Text style={styles.appName}>Nazar</Text>
          
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.loginButton}>
              <Link href="/login" style={styles.loginButtonText}>
                Login
              </Link>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.signUpButton}>
              <Link href="/authregister" style={styles.signUpButtonText}>
                Sign Up
              </Link>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Welcome Text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome to{'\n'}Nazar</Text>
          <Text style={styles.welcomeSubtitle}>Cataracts Screening App</Text>
        </View>
        
        {/* Glass Card with improved touchability */}
        <Link href="/user_menu" asChild>
          <TouchableOpacity style={styles.touchableCard}>
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.05)']}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <BlurView intensity={20} style={styles.blurView}>
                <View style={styles.cardContent}>
                  <View style={styles.iconPlaceholder}>
                    <Text style={styles.iconText}>👤</Text>
                  </View>
                  <Text style={styles.cardTitle}>Guest User</Text>
                  <Text style={styles.cardDescription}>Continue as a guest user to access the app</Text>
                </View>
              </BlurView>
            </LinearGradient>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 80,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginRight: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  signUpButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  signUpButtonText: {
    color: '#6C47FF', // Purple color
    fontSize: 16,
    fontWeight: '600',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  welcomeTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  touchableCard: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  cardGradient: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  blurView: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  cardContent: {
    alignItems: 'center',
    padding: 30,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
});