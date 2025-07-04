// import React, { useState } from 'react';
// import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
// import * as FileSystem from 'expo-file-system';
// import { useNavigation } from '@react-navigation/native';

// interface PhotoPreviewSectionProps {
//   photo: { uri: string };
//   handleRetakePhoto: () => void;
// }

// const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({ photo, handleRetakePhoto }) => {
//   const [processedPhotoUri, setProcessedPhotoUri] = useState<string | null>(null);
//   const navigation = useNavigation();

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
//         Alert.alert('Success', 'Photo processed successfully!', [{ text: 'OK' }]);
//         console.log('Processed image URL:', result.imageUri); // Log the processed image URL
//         // Update the existing image with the processed image
//         setProcessedPhotoUri(result.imageUri);
//       } else {
//         Alert.alert('Error', 'Failed to process photo.');
//       }
//     } catch (error) {
//       console.error('Error processing photo:', error);
//       Alert.alert('Error', 'Failed to process photo.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {processedPhotoUri ? (
//         <Image
//           source={{ uri: processedPhotoUri }}
//           style={styles.image}
//           onError={(error) => {
//             console.error('Error loading processed image:', error.nativeEvent.error);
//             Alert.alert('Error', 'Failed to load processed image.');
//           }}
//           onLoad={() => console.log('Processed image loaded successfully')}
//         />
//       ) : (
//         <Image
//           source={{ uri: photo.uri }}
//           style={styles.image}
//           onError={(error) => {
//             console.error('Error loading original image:', error.nativeEvent.error);
//             Alert.alert('Error', 'Failed to load original image.');
//           }}
//           onLoad={() => console.log('Original image loaded successfully')}
//         />
//       )}
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

//export default PhotoPreviewSection;




// import React, { useState } from 'react';
// import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
// import { useNavigation } from '@react-navigation/native';

// interface PhotoPreviewSectionProps {
//   photo: { uri: string };
//   handleRetakePhoto: () => void;
// }

// const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({ photo, handleRetakePhoto }) => {
//   const [processedPhotoUri, setProcessedPhotoUri] = useState<string | null>(null);
//   const navigation = useNavigation();

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
      
//       // Create FormData and append the image file
//       const formData = new FormData();
//       formData.append('file', {
//         uri: fileUri,
//         name: 'photo.jpg',
//         type: 'image/jpeg',
//       } as any);

//       // Send the FormData to the Flask server
//       const response = await fetch('http://192.168.1.192:5000/process-image', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           Accept: 'application/json',
//           // NOTE: Do not set 'Content-Type' header manually for FormData in React Native.
//         },
//       });

//       const result = await response.json();

//       if (response.ok) {
//         Alert.alert('Success', 'Photo processed successfully!', [{ text: 'OK' }]);
//         console.log('Processed image URL:', result.imageUri);
//         setProcessedPhotoUri(result.imageUri);
//       } else {
//         Alert.alert('Error', 'Failed to process photo.');
//       }
//     } catch (error) {
//       console.error('Error processing photo:', error);
//       Alert.alert('Error', 'Failed to process photo.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {processedPhotoUri ? (
//         <Image
//           source={{ uri: processedPhotoUri }}
//           style={styles.image}
//           onError={(error) => {
//             console.error('Error loading processed image:', error.nativeEvent.error);
//             Alert.alert('Error', 'Failed to load processed image.');
//           }}
//           onLoad={() => console.log('Processed image loaded successfully')}
//         />
//       ) : (
//         <Image
//           source={{ uri: photo.uri }}
//           style={styles.image}
//           onError={(error) => {
//             console.error('Error loading original image:', error.nativeEvent.error);
//             Alert.alert('Error', 'Failed to load original image.');
//           }}
//           onLoad={() => console.log('Original image loaded successfully')}
//         />
//       )}
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











// import React, { useState } from 'react';
// import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
// import * as FileSystem from 'expo-file-system';
// import { useNavigation } from '@react-navigation/native';

// interface PhotoPreviewSectionProps {
//   photo: { uri: string };
//   handleRetakePhoto: () => void;
// }

// const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({ photo, handleRetakePhoto }) => {
//   const [processedPhotoUri, setProcessedPhotoUri] = useState<string | null>(null);
//   const navigation = useNavigation();

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

//       // Create a new FormData object
//       const formData = new FormData();
//       formData.append('file', {
//         uri: fileUri,
//         name: 'photo.jpg',
//         type: 'image/jpeg',
//       } as any);

//       // Send the form data to the Flask server
//       const response = await fetch('http://192.168.1.192:5000/process-image', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Accept: 'application/json',
//         },
//       });

//       const result = await response.json();
//       console.log('Response:', result);

//       if (response.ok) {
//         Alert.alert('Success', 'Photo processed successfully!', [{ text: 'OK' }]);
//         console.log('Processed image URL:', result.imageUri); // Log the processed image URL
//         // Update the existing image with the processed image
//         setProcessedPhotoUri(result.imageUri);
//       } else {
//         Alert.alert('Error', 'Failed to process photo.');
//       }
//     } catch (error) {
//       console.error('Error processing photo:', error);
//       Alert.alert('Error', 'Failed to process photo.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {processedPhotoUri ? (
//         <Image
//           source={{ uri: processedPhotoUri }}
//           style={styles.image}
//           onError={(error) => {
//             console.error('Error loading processed image:', error.nativeEvent.error);
//             Alert.alert('Error', 'Failed to load processed image.');
//           }}
//           onLoad={() => console.log('Processed image loaded successfully')}
//         />
//       ) : (
//         <Image
//           source={{ uri: photo.uri }}
//           style={styles.image}
//           onError={(error) => {
//             console.error('Error loading original image:', error.nativeEvent.error);
//             Alert.alert('Error', 'Failed to load original image.');
//           }}
//           onLoad={() => console.log('Original image loaded successfully')}
//         />
//       )}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
//           <AntDesign name="delete" size={44} color="#4CAF50" />
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