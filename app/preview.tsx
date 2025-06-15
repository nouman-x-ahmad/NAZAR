// // import React, { useState } from 'react';
// // import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// // import { AntDesign } from '@expo/vector-icons';
// // import * as MediaLibrary from 'expo-media-library';
// // import * as FileSystem from 'expo-file-system';
// // import { useNavigation } from '@react-navigation/native';

// // interface PhotoPreviewSectionProps {
// //   photo: { uri: string };
// //   handleRetakePhoto: () => void;
// // }

// // const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({ photo, handleRetakePhoto }) => {
// //   const [processedPhotoUri, setProcessedPhotoUri] = useState<string | null>(null);
// //   const navigation = useNavigation();

// //   const handleDownloadPhoto = async () => {
// //     try {
// //       const { status } = await MediaLibrary.requestPermissionsAsync();
// //       if (status !== 'granted') {
// //         Alert.alert('Permission Required', 'Permission to access media library is required!', [
// //           { text: 'OK' },
// //         ]);
// //         return;
// //       }

// //       const asset = await MediaLibrary.createAssetAsync(photo.uri);
// //       await MediaLibrary.createAlbumAsync('Download', asset, false);
// //       Alert.alert('Success', 'Photo downloaded successfully!');
// //     } catch (error) {
// //       console.error('Error downloading photo:', error);
// //       Alert.alert('Error', 'Failed to download photo.');
// //     }
// //   };

// //   const handleSendPhotoToServer = async () => {
// //     try {
// //       const fileUri = photo.uri;

// //       // Read the file as base64 encoded string
// //       const fileBase64 = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });

// //       // Send the base64 string to the Flask server
// //       const response = await fetch('http://192.168.1.192:5000/process-image', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ file: fileBase64 }),
// //       });

// //       const result = await response.json();

// //       if (response.ok) {
// //         Alert.alert('Success', 'Photo processed successfully!', [{ text: 'OK' }]);
// //         console.log('Processed image URL:', result.imageUri); // Log the processed image URL
// //         // Update the existing image with the processed image
// //         setProcessedPhotoUri(result.imageUri);
// //       } else {
// //         Alert.alert('Error', 'Failed to process photo.');
// //       }
// //     } catch (error) {
// //       console.error('Error processing photo:', error);
// //       Alert.alert('Error', 'Failed to process photo.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {processedPhotoUri ? (
// //         <Image
// //           source={{ uri: processedPhotoUri }}
// //           style={styles.image}
// //           onError={(error) => {
// //             console.error('Error loading processed image:', error.nativeEvent.error);
// //             Alert.alert('Error', 'Failed to load processed image.');
// //           }}
// //           onLoad={() => console.log('Processed image loaded successfully')}
// //         />
// //       ) : (
// //         <Image
// //           source={{ uri: photo.uri }}
// //           style={styles.image}
// //           onError={(error) => {
// //             console.error('Error loading original image:', error.nativeEvent.error);
// //             Alert.alert('Error', 'Failed to load original image.');
// //           }}
// //           onLoad={() => console.log('Original image loaded successfully')}
// //         />
// //       )}
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
// //           <AntDesign name="delete" size={44} color="white" />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={handleDownloadPhoto}>
// //           <AntDesign name="download" size={44} color="white" />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={handleSendPhotoToServer}>
// //           <AntDesign name="upload" size={44} color="white" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000',
// //   },
// //   image: {
// //     width: '100%',
// //     height: '80%',
// //     resizeMode: 'contain',
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     width: '100%',
// //     position: 'absolute',
// //     bottom: 40,
// //   },
// //   button: {
// //     backgroundColor: '#ff4757',
// //     padding: 20,
// //     borderRadius: 50,
// //     elevation: 5,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 4,
// //   },
// // });

// // export default PhotoPreviewSection;


// // import React, { useState } from 'react';
// // import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// // import { AntDesign } from '@expo/vector-icons';
// // import * as MediaLibrary from 'expo-media-library';
// // import * as FileSystem from 'expo-file-system';
// // import ProcessedImagesScreen from './ProcessedImagesScreen';

// // interface PhotoPreviewSectionProps {
// //   photo: { uri: string };
// //   handleRetakePhoto: () => void;
// // }

// // const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({ photo, handleRetakePhoto }) => {
// //   const [processedImages, setProcessedImages] = useState<string[]>([]);
// //   const [showProcessedImages, setShowProcessedImages] = useState(false);

// //   const handleDownloadPhoto = async () => {
// //     try {
// //       const { status } = await MediaLibrary.requestPermissionsAsync();
// //       if (status !== 'granted') {
// //         Alert.alert('Permission Required', 'Permission to access media library is required!', [
// //           { text: 'OK' },
// //         ]);
// //         return;
// //       }

// //       const asset = await MediaLibrary.createAssetAsync(photo.uri);
// //       await MediaLibrary.createAlbumAsync('Download', asset, false);
// //       Alert.alert('Success', 'Photo downloaded successfully!');
// //     } catch (error) {
// //       console.error('Error downloading photo:', error);
// //       Alert.alert('Error', 'Failed to download photo.');
// //     }
// //   };

// //   const handleSendPhotoToServer = async () => {
// //     try {
// //       const fileUri = photo.uri;

// //       // Read the file as base64 encoded string
// //       const fileBase64 = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });

// //       // Send the base64 string to the Flask server
// //       const response = await fetch('http://192.168.1.192:5000/process-image', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ file: fileBase64 }),
// //       });

// //       const result = await response.json();

// //       if (response.ok) {
// //         // Check if the response has multiple images or a single image
// //         if (Array.isArray(result.images)) {
// //           console.log(`Received ${result.images.length} processed images`);
// //           setProcessedImages(result.images);
// //           setShowProcessedImages(true);
// //         } else if (result.imageUri) {
// //           // Backward compatibility for single image response
// //           console.log('Received single processed image');
// //           setProcessedImages([result.imageUri]);
// //           setShowProcessedImages(true);
// //         } else {
// //           Alert.alert('Error', 'No processed images received');
// //         }
// //       } else {
// //         Alert.alert('Error', 'Failed to process photo.');
// //       }
// //     } catch (error) {
// //       console.error('Error processing photo:', error);
// //       Alert.alert('Error', 'Failed to process photo.');
// //     }
// //   };

// //   if (showProcessedImages && processedImages.length > 0) {
// //     return (
// //       <ProcessedImagesScreen 
// //         images={processedImages} 
// //         onBack={() => setShowProcessedImages(false)} 
// //       />
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Image
// //         source={{ uri: photo.uri }}
// //         style={styles.image}
// //         onError={(error) => {
// //           console.error('Error loading original image:', error.nativeEvent.error);
// //           Alert.alert('Error', 'Failed to load original image.');
// //         }}
// //       />
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
// //           <AntDesign name="delete" size={44} color="white" />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={handleDownloadPhoto}>
// //           <AntDesign name="download" size={44} color="white" />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={handleSendPhotoToServer}>
// //           <AntDesign name="upload" size={44} color="white" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000',
// //   },
// //   image: {
// //     width: '100%',
// //     height: '80%',
// //     resizeMode: 'contain',
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     width: '100%',
// //     position: 'absolute',
// //     bottom: 40,
// //   },
// //   button: {
// //     backgroundColor: '#ff4757',
// //     padding: 20,
// //     borderRadius: 50,
// //     elevation: 5,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 4,
// //   },
// // });

// // export default PhotoPreviewSection;



// import React, { useState } from 'react';
// import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
// import * as FileSystem from 'expo-file-system';
// import ProcessedImagesScreen from './ProcessedImagesScreen';

// interface PhotoPreviewSectionProps {
//   photo: { uri: string };
//   handleRetakePhoto: () => void;
// }

// const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({ photo, handleRetakePhoto }) => {
//   const [processedImages, setProcessedImages] = useState<string[]>([]);
//   const [showProcessedImages, setShowProcessedImages] = useState(false);
//   const [classification, setClassification] = useState<{
//     predicted_class: string;
//     confidence: number;
//   } | undefined>(undefined);

//   const handleDownloadPhoto = async () => {
//     try {
//       const { status } = await MediaLibrary.requestPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Required', 'Permission to access media library is required!', [
//           { text: 'OK' },
//         ]);
//         return;
//       }

//       const asset = await MediaLibrary.createAssetAsync(photo.uri);
//       await MediaLibrary.createAlbumAsync('Download', asset, false);
//       Alert.alert('Success', 'Photo downloaded successfully!');
//     } catch (error) {
//       console.error('Error downloading photo:', error);
//       Alert.alert('Error', 'Failed to download photo.');
//     }
//   };

//   const handleSendPhotoToServer = async () => {
//     try {
//       const fileUri = photo.uri;

//       // Read the file as base64 encoded string
//       const fileBase64 = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });

//       // Send the base64 string to the Flask server
//       const response = await fetch('http://192.168.1.192:5000/process-image', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ file: fileBase64 }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         if (Array.isArray(result.images)) {
//           console.log(`Received ${result.images.length} processed images`);
//           setProcessedImages(result.images);
          
//           // Store classification data if available
//           if (result.classification) {
//             setClassification(result.classification);
//             console.log('Classification result:', result.classification);
//           }
          
//           setShowProcessedImages(true);
//         } else if (result.imageUri) {
//           // Backward compatibility for single image response
//           console.log('Received single processed image');
//           setProcessedImages([result.imageUri]);
//           setShowProcessedImages(true);
//         } else {
//           Alert.alert('Error', 'No processed images received');
//         }
//       } else {
//         Alert.alert('Error', 'Failed to process photo.');
//       }
//     } catch (error) {
//       console.error('Error processing photo:', error);
//       Alert.alert('Error', `Failed to process photo: ${(error as Error).message}`);
//     }
//   };

//   if (showProcessedImages && processedImages.length > 0) {
//     return (
//       <ProcessedImagesScreen 
//         images={processedImages} 
//         onBack={() => setShowProcessedImages(false)}
//         classification={classification} 
//       />
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: photo.uri }}
//         style={styles.image}
//         onError={(error) => {
//           console.error('Error loading original image:', error.nativeEvent.error);
//           Alert.alert('Error', 'Failed to load original image.');
//         }}
//       />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
//           <AntDesign name="delete" size={44} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={handleDownloadPhoto}>
//           <AntDesign name="download" size={44} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={handleSendPhotoToServer}>
//           <AntDesign name="upload" size={44} color="white" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   image: {
//     width: '100%',
//     height: '80%',
//     resizeMode: 'contain',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     position: 'absolute',
//     bottom: 40,
//   },
//   button: {
//     backgroundColor: '#ff4757',
//     padding: 20,
//     borderRadius: 50,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
// });

// export default PhotoPreviewSection;
import React, { useState } from 'react';
import { 
  View, 
  Image, 
  TouchableOpacity, 
  Alert, 
  StyleSheet, 
  Text,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import ProcessedImagesScreen from './ProcessedImagesScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';

interface PhotoPreviewSectionProps {
  photo: { uri: string };
  handleRetakePhoto: () => void;
}

const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({ photo, handleRetakePhoto }) => {
  const [processedImages, setProcessedImages] = useState<string[]>([]);
  const [showProcessedImages, setShowProcessedImages] = useState(false);
  const [classification, setClassification] = useState<{
    predicted_class: string;
    confidence: number;
  } | undefined>(undefined);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDownloadPhoto = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Permission to access media library is required!', [
          { text: 'OK' },
        ]);
        return;
      }

      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      await MediaLibrary.createAlbumAsync('Nazar', asset, false);
      Alert.alert('Success', 'Photo saved to your gallery!');
    } catch (error) {
      console.error('Error downloading photo:', error);
      Alert.alert('Error', 'Failed to save photo.');
    }
  };

  const handleSendPhotoToServer = async () => {
    try {
      setIsProcessing(true);
      const fileUri = photo.uri;

      // Read the file as base64 encoded string
      const fileBase64 = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });

      // Send the base64 string to the Flask server
      const response = await fetch('http://10.253.51.37:5000/process-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: fileBase64 }),
      });

      const result = await response.json();

      if (response.ok) {
        if (Array.isArray(result.images)) {
          console.log(`Received ${result.images.length} processed images`);
          setProcessedImages(result.images);
          
          // Store classification data if available
          if (result.classification) {
            setClassification(result.classification);
            console.log('Classification result:', result.classification);
          }
          
          setShowProcessedImages(true);
        } else if (result.imageUri) {
          // Backward compatibility for single image response
          console.log('Received single processed image');
          setProcessedImages([result.imageUri]);
          setShowProcessedImages(true);
        } else {
          Alert.alert('Error', 'No processed images received');
        }
      } else {
        Alert.alert('Error', 'Failed to process photo.');
      }
    } catch (error) {
      console.error('Error processing photo:', error);
      Alert.alert('Error', `Failed to process photo: ${(error as Error).message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  if (showProcessedImages && processedImages.length > 0) {
    return (
      <ProcessedImagesScreen 
        images={processedImages} 
        onBack={() => setShowProcessedImages(false)}
        classification={classification} 
      />
    );
  }

  return (
    <LinearGradient
      colors={['#0A1E40', '#112240', '#1A365D']}
      style={styles.container}
    >
      <StatusBar style="light" />
      
      {/* Header */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
            <Text style={styles.headerTitle}>Preview</Text>
            <Text style={styles.headerSubtitle}>Review your photo before processing</Text>
          </BlurView>
        </View>

        {/* Image Container with Glass Effect */}
        <View style={styles.imageContainer}>
          <BlurView intensity={5} tint="dark" style={styles.imageBlur}>
            <Image
              source={{ uri: photo.uri }}
              style={styles.image}
              onError={(error) => {
                console.error('Error loading original image:', error.nativeEvent.error);
                Alert.alert('Error', 'Failed to load image.');
              }}
            />
          </BlurView>
        </View>

        {/* Processing Indicator */}
        {isProcessing && (
          <View style={styles.processingContainer}>
            <BlurView intensity={30} tint="dark" style={styles.processingBlur}>
              <ActivityIndicator size="large" color="#6C47FF" />
              <Text style={styles.processingText}>Processing image...</Text>
            </BlurView>
          </View>
        )}

        {/* Controls */}
        <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.controlButton} 
              onPress={handleRetakePhoto}
              disabled={isProcessing}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
                style={styles.gradientButton}
              >
                <Ionicons name="arrow-back" size={28} color="white" />
                <Text style={styles.buttonText}>Retake</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.controlButton} 
              onPress={handleDownloadPhoto}
              disabled={isProcessing}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
                style={styles.gradientButton}
              >
                <Ionicons name="download" size={28} color="white" />
                <Text style={styles.buttonText}>Save</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.controlButton} 
              onPress={handleSendPhotoToServer}
              disabled={isProcessing}
            >
              <LinearGradient
                colors={['#6C47FF', '#5034d0']}
                style={styles.gradientButton}
              >
                {/* <Ionicons name="scan" size={28} color="white" /> */}
                <Text style={styles.buttonText}>Analyze</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </BlurView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1E40',
  },
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerBlur: {
    padding: 15,
    paddingTop: 50,
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
  imageContainer: {
    flex: 1,
    margin: 15,
    marginTop: 100,
    marginBottom: 120,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  imageBlur: {
    flex: 1,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(26, 54, 93, 0.3)',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  processingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  processingBlur: {
    padding: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  processingText: {
    marginTop: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 40,
    paddingTop: 20,
    backgroundColor: 'rgba(10, 25, 47, 0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  controlButton: {
    flex: 1,
    height: 60,
    marginHorizontal: 8,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
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
});

export default PhotoPreviewSection;