// import { useState } from 'react';
// import { Button, Image, View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function gallery() {
//   const [image, setImage] = useState<string | null>(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ['images', 'videos'],
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={styles.image} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });




// import { useState } from 'react';
// import { Button, Image, View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Preview from './preview';

// export default function Gallery() {
//   const [image, setImage] = useState<string | null>(null);
//   const [showPreview, setShowPreview] = useState(false);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images, // Fixed deprecation warning
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const handleRetakePhoto = () => {
//     setShowPreview(false);
//     setImage(null);
//   };

//   // If image is selected and preview is being shown
//   if (image && showPreview) {
//     return <Preview photo={{ uri: image }} handleRetakePhoto={handleRetakePhoto} />;
//   }

//   return (
//     <View style={styles.container}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && (
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: image }} style={styles.image} />
//           <Button 
//             title="Continue to Preview" 
//             onPress={() => setShowPreview(true)} 
//             color="#4BB543"
//           />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   imageContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: 300,
//     height: 300,
//     marginBottom: 15,
//     borderRadius: 10,
//   },
// });

import React, { useState } from 'react';
import { 
  Text, 
  Image, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  Dimensions 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import Preview from './preview';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Gallery() {
  const navigation = useNavigation();
  const [image, setImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRetakePhoto = () => {
    setShowPreview(false);
    setImage(null);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  // If image is selected and preview is being shown
  if (image && showPreview) {
    return <Preview photo={{ uri: image }} handleRetakePhoto={handleRetakePhoto} />;
  }

  return (
    <LinearGradient
      colors={['#0A1E40', '#112240', '#1A365D']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
            <Text style={styles.headerTitle}>Image Gallery</Text>
            <Text style={styles.headerSubtitle}>Select an image from your device</Text>
          </BlurView>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          {!image ? (
            <BlurView intensity={10} tint="dark" style={styles.emptyStateContainer}>
              <View style={styles.iconCircle}>
                <Ionicons name="images-outline" size={60} color="#6C47FF" />
              </View>
              <Text style={styles.emptyStateText}>No image selected</Text>
              <Text style={styles.emptyStateSubText}>
                Select an image from your gallery to analyze
              </Text>
              
              <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
                <LinearGradient
                  colors={['#6C47FF', '#5034d0']}
                  style={styles.gradientButton}
                >
                  <Ionicons name="image" size={24} color="white" />
                  <Text style={styles.buttonText}>Select from Gallery</Text>
                </LinearGradient>
              </TouchableOpacity>
            </BlurView>
          ) : (
            <View style={styles.imagePreviewContainer}>
              <BlurView intensity={10} tint="dark" style={styles.imageWrapper}>
                <Image source={{ uri: image }} style={styles.selectedImage} />
              </BlurView>
              
              <View style={styles.actionButtonsContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={handleRetakePhoto}>
                  <LinearGradient
                    colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
                    style={styles.gradientButton}
                  >
                    <Ionicons name="refresh" size={24} color="white" />
                    <Text style={styles.buttonText}>Change</Text>
                  </LinearGradient>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.actionButton} 
                  onPress={() => setShowPreview(true)}
                >
                  <LinearGradient
                    colors={['#6C47FF', '#5034d0']}
                    style={styles.gradientButton}
                  >
                    <Ionicons name="arrow-forward" size={24} color="white" />
                    <Text style={styles.buttonText}>Continue</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* Bottom Controls */}
        <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.controlButton} onPress={handleBack}>
              <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
                style={styles.gradientButton}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={styles.buttonText}>Back</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </BlurView>
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
  headerContainer: {
    width: '100%',
  },
  headerBlur: {
    padding: 15,
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  emptyStateContainer: {
    width: '90%',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(108, 71, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(108, 71, 255, 0.5)',
  },
  emptyStateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  emptyStateSubText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginBottom: 30,
  },
  selectButton: {
    width: '100%',
    height: 56,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  imagePreviewContainer: {
    width: '90%',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
  },
  selectedImage: {
    width: '100%',
    height: width * 0.8, // Maintain aspect ratio
    resizeMode: 'contain',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButton: {
    flex: 1,
    height: 56,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 5,
  },
  gradientButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 30,
    paddingTop: 20,
    backgroundColor: 'rgba(10, 25, 47, 0.5)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  controlButton: {
    width: '50%',
    height: 56,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
});