// import React from 'react';
// import { Link } from 'expo-router';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationProp, useNavigation } from '@react-navigation/native';

// export default function user_menu() {
//   const navigation = useNavigation<NavigationProp<any>>();
//     //remove the goback functionality and icon
    
    
    
//   return (
//     <View style={styles.container}>
//       {/* <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("camera")}
//       >
//         <Text style={styles.buttonText}>Camera</Text>
//       </TouchableOpacity> */}
//       <TouchableOpacity style={styles.button}>
//       <Link href="/camera" style={
//         styles.buttonText
//       }>
//               camera
//       </Link>
//       </TouchableOpacity>
//       {/* <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("map")}
//       >
//         <Text style={styles.buttonText}>Map</Text>
//       </TouchableOpacity> */}
//       <TouchableOpacity style={styles.button}>
//       <Link href="/map" style={
//         styles.buttonText
//       }>
//               map
//       </Link>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}>
//       <Link href="/gallery" style={
//         styles.buttonText
//       }>
//               gallery
//       </Link>
//       </TouchableOpacity>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row', // Align children in a row
//     justifyContent: 'center', // Center the buttons
//     alignItems: 'center', // Center vertically
//     padding: 20, // Add padding to the container
//   },
//   button: {
//     backgroundColor: '#4CAF50', // Button background color
//     padding: 15, // Button padding
//     margin: 10, // Spacing between buttons
//     borderRadius: 5, // Rounded corners
//     width: 100, // Fixed width for uniform button size
//     alignItems: 'center', // Center text in the button
//   },
//   buttonText: {
//     color: '#FFFFFF', // Text color
//     fontSize: 16, // Text size
//     fontWeight: 'bold', // Bold text
//   },
// });
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#0a192f', '#112240', '#1a365d']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <BlurView intensity={20} tint="dark" style={styles.glassContainer}>
          {/* App Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Nazar</Text>
            <Text style={styles.subtitle}>Cataract Screening App</Text>
          </View>

          {/* Camera Button */}
          <TouchableOpacity style={styles.cameraButtonContainer}>
            {/* <Link href="/camera" asChild>
              <TouchableOpacity style={styles.cameraButton}>
                <Ionicons name="camera" size={40} color="#000" />
              </TouchableOpacity>
            </Link> */}
            <Text style={styles.cameraText}>Tap to Start Screening</Text>
          </TouchableOpacity>

          {/* Top Options Row - Camera and Gallery */}
          <View style={styles.topOptionsContainer}>
            <Link href="/camera" asChild>
              <TouchableOpacity style={styles.optionButton}>
                <View style={styles.optionInner}>
                  <Ionicons name="camera" size={30} color="#fff" />
                  <Text style={styles.optionText}>Camera</Text>
                </View>
              </TouchableOpacity>
            </Link>

            <Link href="/gallery" asChild>
              <TouchableOpacity style={styles.optionButton}>
                <View style={styles.optionInner}>
                  <Ionicons name="images" size={30} color="#fff" />
                  <Text style={styles.optionText}>Gallery</Text>
                </View>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Bottom Option - Map */}
          <View style={styles.bottomOptionContainer}>
            <Text style={styles.cameraText}>OTHER OPTIONS</Text>
          </View>
          <View style={styles.bottomOptionContainer}>
            <Link href="/map" asChild>
              <TouchableOpacity style={styles.mapOptionButton}>
                <View style={styles.mapOptionInner}>
                  <Ionicons name="map" size={30} color="#fff" />
                  <Text style={styles.optionText}>Map</Text>
                </View>
              </TouchableOpacity>
            </Link>
          </View>
        </BlurView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  glassContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#cccccc',
  },
  cameraButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  cameraButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(180, 180, 180, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  cameraText: {
    color: '#ffffff',
    fontSize: 18,
  },
  // New styles for the top row containing Camera and Gallery
  topOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  // New style for bottom row containing Map
  bottomOptionContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  optionButton: {
    width: '48%', // Adjusted to fit two buttons with space between
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  mapOptionButton: {
    width: '48%', // Same width as the top options
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  optionInner: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  mapOptionInner: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  optionText: {
    color: '#ffffff',
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
});