// // // import React, { useState, useRef } from 'react';
// // // import { View, Image, TouchableOpacity, Alert, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
// // // import { AntDesign } from '@expo/vector-icons';
// // // import * as MediaLibrary from 'expo-media-library';
// // // import { useNavigation } from '@react-navigation/native';

// // // const { width } = Dimensions.get('window');

// // // interface ProcessedImagesScreenProps {
// // //   images: string[];
// // //   onBack: () => void;
// // // }

// // // const ProcessedImagesScreen: React.FC<ProcessedImagesScreenProps> = ({ images, onBack }) => {
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const flatListRef = useRef<FlatList>(null);
// // //   const navigation = useNavigation();

// // //   const handleDownloadPhoto = async () => {
// // //     try {
// // //       const { status } = await MediaLibrary.requestPermissionsAsync();
// // //       if (status !== 'granted') {
// // //         Alert.alert('Permission Required', 'Permission to access media library is required!', [
// // //           { text: 'OK' },
// // //         ]);
// // //         return;
// // //       }

// // //       const uriToDownload = images[activeIndex];
// // //       const asset = await MediaLibrary.createAssetAsync(uriToDownload);
// // //       await MediaLibrary.createAlbumAsync('Download', asset, false);
// // //       Alert.alert('Success', 'Photo downloaded successfully!');
// // //     } catch (error) {
// // //       console.error('Error downloading photo:', error);
// // //       Alert.alert('Error', 'Failed to download photo.');
// // //     }
// // //   };

// // //   const renderItem = ({ item }: { item: string }) => {
// // //     return (
// // //       <View style={styles.slide}>
// // //         <Image
// // //           source={{ uri: item }}
// // //           style={styles.image}
// // //           onError={(error) => {
// // //             console.error('Error loading image:', error.nativeEvent.error);
// // //           }}
// // //         />
// // //       </View>
// // //     );
// // //   };

// // //   const handleViewableItemsChanged = ({ viewableItems }: any) => {
// // //     if (viewableItems.length > 0) {
// // //       setActiveIndex(viewableItems[0].index);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <FlatList
// // //         ref={flatListRef}
// // //         data={images}
// // //         renderItem={renderItem}
// // //         keyExtractor={(item, index) => index.toString()}
// // //         horizontal
// // //         pagingEnabled
// // //         showsHorizontalScrollIndicator={false}
// // //         onViewableItemsChanged={handleViewableItemsChanged}
// // //         viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
// // //       />
      
// // //       <View style={styles.pagination}>
// // //         {images.map((_, index) => (
// // //           <View
// // //             key={index}
// // //             style={[
// // //               styles.paginationDot,
// // //               { backgroundColor: index === activeIndex ? '#ff4757' : 'rgba(255, 255, 255, 0.5)' }
// // //             ]}
// // //           />
// // //         ))}
// // //       </View>
      
// // //       <Text style={styles.imageCounter}>
// // //         {activeIndex + 1} / {images.length}
// // //       </Text>
      
// // //       <View style={styles.buttonContainer}>
// // //         <TouchableOpacity style={styles.button} onPress={onBack}>
// // //           <AntDesign name="arrowleft" size={44} color="white" />
// // //         </TouchableOpacity>
// // //         <TouchableOpacity style={styles.button} onPress={handleDownloadPhoto}>
// // //           <AntDesign name="download" size={44} color="white" />
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     backgroundColor: '#000',
// // //   },
// // //   slide: {
// // //     width,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   image: {
// // //     width: '100%',
// // //     height: '80%',
// // //     resizeMode: 'contain',
// // //   },
// // //   buttonContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-around',
// // //     width: '100%',
// // //     position: 'absolute',
// // //     bottom: 40,
// // //   },
// // //   button: {
// // //     backgroundColor: '#ff4757',
// // //     padding: 20,
// // //     borderRadius: 50,
// // //     elevation: 5,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 4,
// // //   },
// // //   pagination: {
// // //     flexDirection: 'row',
// // //     position: 'absolute',
// // //     bottom: 100,
// // //     alignSelf: 'center',
// // //   },
// // //   paginationDot: {
// // //     width: 10,
// // //     height: 10,
// // //     borderRadius: 5,
// // //     marginHorizontal: 5,
// // //   },
// // //   imageCounter: {
// // //     position: 'absolute',
// // //     top: 30,
// // //     right: 20,
// // //     color: 'white',
// // //     fontSize: 16,
// // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // //     padding: 8,
// // //     borderRadius: 15,
// // //   },
// // // });

// // // export default ProcessedImagesScreen;


// // import React, { useState, useRef } from 'react';
// // import { View, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
// // import { AntDesign } from '@expo/vector-icons';
// // import * as MediaLibrary from 'expo-media-library';
// // import { Alert } from 'react-native';

// // const { width } = Dimensions.get('window');

// // interface ProcessedImagesScreenProps {
// //   images: string[];
// //   onBack: () => void;
// //   classification?: {
// //     predicted_class: string;
// //     confidence: number;
// //   };
// // }

// // const ProcessedImagesScreen: React.FC<ProcessedImagesScreenProps> = ({ 
// //   images, 
// //   onBack,
// //   classification 
// // }) => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const flatListRef = useRef<FlatList>(null);

// //   const handleDownloadPhoto = async () => {
// //     try {
// //       const { status } = await MediaLibrary.requestPermissionsAsync();
// //       if (status !== 'granted') {
// //         Alert.alert('Permission Required', 'Permission to access media library is required!', [
// //           { text: 'OK' },
// //         ]);
// //         return;
// //       }

// //       const uriToDownload = images[activeIndex];
// //       const asset = await MediaLibrary.createAssetAsync(uriToDownload);
// //       await MediaLibrary.createAlbumAsync('Download', asset, false);
// //       Alert.alert('Success', 'Photo downloaded successfully!');
// //     } catch (error) {
// //       console.error('Error downloading photo:', error);
// //       Alert.alert('Error', 'Failed to download photo.');
// //     }
// //   };

// //   const renderItem = ({ item }: { item: string }) => {
// //     return (
// //       <View style={styles.slide}>
// //         <Image
// //           source={{ uri: item }}
// //           style={styles.image}
// //           onError={(error) => {
// //             console.error('Error loading image:', error.nativeEvent.error);
// //           }}
// //         />
// //       </View>
// //     );
// //   };

// //   const handleViewableItemsChanged = ({ viewableItems }: any) => {
// //     if (viewableItems.length > 0) {
// //       setActiveIndex(viewableItems[0].index);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         ref={flatListRef}
// //         data={images}
// //         renderItem={renderItem}
// //         keyExtractor={(item, index) => index.toString()}
// //         horizontal
// //         pagingEnabled
// //         showsHorizontalScrollIndicator={false}
// //         onViewableItemsChanged={handleViewableItemsChanged}
// //         viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
// //       />
      
// //       <View style={styles.pagination}>
// //         {images.map((_, index) => (
// //           <View
// //             key={index}
// //             style={[
// //               styles.paginationDot,
// //               { backgroundColor: index === activeIndex ? '#ff4757' : 'rgba(255, 255, 255, 0.5)' }
// //             ]}
// //           />
// //         ))}
// //       </View>
      
// //       <View style={styles.infoContainer}>
// //         <Text style={styles.imageCounter}>
// //           {activeIndex + 1} / {images.length}
// //         </Text>
        
// //         {classification && (
// //           <View style={styles.classificationContainer}>
// //             <Text style={styles.classificationTitle}>Analysis Result:</Text>
// //             <Text style={styles.classificationText}>
// //               {classification.predicted_class}
// //             </Text>
// //             <Text style={styles.confidenceText}>
// //               Confidence: {classification.confidence.toFixed(2)}%
// //             </Text>
// //           </View>
// //         )}
// //       </View>
      
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={styles.button} onPress={onBack}>
// //           <AntDesign name="arrowleft" size={44} color="white" />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={handleDownloadPhoto}>
// //           <AntDesign name="download" size={44} color="white" />
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
// //   slide: {
// //     width,
// //     justifyContent: 'center',
// //     alignItems: 'center',
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
// //   pagination: {
// //     flexDirection: 'row',
// //     position: 'absolute',
// //     bottom: 100,
// //     alignSelf: 'center',
// //   },
// //   paginationDot: {
// //     width: 10,
// //     height: 10,
// //     borderRadius: 5,
// //     marginHorizontal: 5,
// //   },
// //   infoContainer: {
// //     position: 'absolute',
// //     top: 30,
// //     right: 20,
// //     left: 20,
// //     alignItems: 'center',
// //   },
// //   imageCounter: {
// //     color: 'white',
// //     fontSize: 16,
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //     padding: 8,
// //     borderRadius: 15,
// //     marginBottom: 10,
// //   },
// //   classificationContainer: {
// //     backgroundColor: 'rgba(0,0,0,0.7)',
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     width: '100%',
// //   },
// //   classificationTitle: {
// //     color: '#ff4757',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 8,
// //   },
// //   classificationText: {
// //     color: 'white',
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //     textAlign: 'center',
// //   },
// //   confidenceText: {
// //     color: '#ddd',
// //     fontSize: 16,
// //   },
// // });

// // export default ProcessedImagesScreen;
// import React, { useState, useRef } from 'react';
// import { 
//   View, 
//   Image, 
//   TouchableOpacity, 
//   StyleSheet, 
//   FlatList, 
//   Dimensions, 
//   Text,
//   Alert
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
// import { BlurView } from 'expo-blur';
// import { LinearGradient } from 'expo-linear-gradient';
// import { StatusBar } from 'expo-status-bar';
// import { Link } from 'expo-router';

// const { width } = Dimensions.get('window');

// interface ProcessedImagesScreenProps {
//   images: string[];
//   onBack: () => void;
//   classification?: {
//     predicted_class: string;
//     confidence: number;
//   };
// }

// const ProcessedImagesScreen: React.FC<ProcessedImagesScreenProps> = ({ 
//   images, 
//   onBack,
//   classification 
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const flatListRef = useRef<FlatList>(null);

//   const handleDownloadPhoto = async () => {
//     try {
//       const { status } = await MediaLibrary.requestPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Required', 'Permission to access media library is required!', [
//           { text: 'OK' },
//         ]);
//         return;
//       }

//       const uriToDownload = images[activeIndex];
//       const asset = await MediaLibrary.createAssetAsync(uriToDownload);
//       await MediaLibrary.createAlbumAsync('Nazar', asset, false);
//       Alert.alert('Success', 'Photo saved to your gallery!');
//     } catch (error) {
//       console.error('Error downloading photo:', error);
//       Alert.alert('Error', 'Failed to save photo.');
//     }
//   };

//   const renderItem = ({ item }: { item: string }) => {
//     return (
//       <View style={styles.slide}>
//         <BlurView intensity={5} tint="dark" style={styles.imageContainer}>
//           <Image
//             source={{ uri: item }}
//             style={styles.image}
//             onError={(error) => {
//               console.error('Error loading image:', error.nativeEvent.error);
//             }}
//           />
//         </BlurView>
//       </View>
//     );
//   };

//   const handleViewableItemsChanged = ({ viewableItems }: any) => {
//     if (viewableItems.length > 0) {
//       setActiveIndex(viewableItems[0].index);
//     }
//   };

//   return (
//     <LinearGradient
//       colors={['#0A1E40', '#112240', '#1A365D']}
//       style={[styles.container, { marginTop: classification ? 220 : 150 }]}
//     >
//       <StatusBar style="light" />
      
//       {/* Header with classification results */}
//       <View style={styles.headerContainer}>
//         <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
//           <Text style={styles.headerTitle}>Analysis Results</Text>
//           <View style={styles.counterContainer}>
//             <Text style={styles.imageCounter}>
//               {activeIndex + 1} / {images.length}
//             </Text>
//           </View>
          
//           {classification && (
//             <View style={styles.classificationContainer}>
//               <Text style={styles.classificationTitle}>Diagnosis:</Text>
//               <Text style={styles.classificationText}>
//                 {classification.predicted_class}
//               </Text>
//               <View style={styles.confidenceBar}>
//                 <View 
//                   style={[
//                     styles.confidenceFill, 
//                     { 
//                       width: `${classification.confidence}%`,
//                       backgroundColor: classification.confidence > 70 
//                         ? '#4CAF50' 
//                         : classification.confidence > 40 
//                           ? '#FFC107' 
//                           : '#F44336'
//                     }
//                   ]} 
//                 />
//               </View>
//               <Text style={styles.confidenceText}>
//                 Confidence: {classification.confidence.toFixed(2)}%
//               </Text>
//             </View>
//           )}
//         </BlurView>
//       </View>

//       {/* Image Slider */}
//       <FlatList
//         ref={flatListRef}
//         data={images}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onViewableItemsChanged={handleViewableItemsChanged}
//         viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
//         style={styles.flatList}
//       />
      
//       {/* Pagination Dots */}
//       <View style={styles.pagination}>
//         {images.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.paginationDot,
//               { backgroundColor: index === activeIndex ? '#6C47FF' : 'rgba(255, 255, 255, 0.3)' }
//             ]}
//           />
//         ))}
//       </View>
      
//       {/* Bottom Controls */}
//       <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.controlButton} onPress={onBack}>
//             <LinearGradient
//               colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
//               style={styles.gradientButton}
//             >
//               <Ionicons name="arrow-back" size={24} color="white" />
//               <Text style={styles.buttonText}>Back</Text>
//             </LinearGradient>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.controlButton} onPress={handleDownloadPhoto}>
//             <LinearGradient
//               colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
//               style={styles.gradientButton}
//             >
//               <Ionicons name="download" size={24} color="white" />
//               <Text style={styles.buttonText}>Save</Text>
//             </LinearGradient>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.controlButton}>
//             <Link href="/map" asChild>
//               <LinearGradient
//                 colors={['#6C47FF', '#5034d0']}
//                 style={styles.gradientButton}
//               >
//                 <Ionicons name="map" size={24} color="white" />
//                 <Text style={styles.buttonText}>Map</Text>
//               </LinearGradient>
//             </Link>
//           </TouchableOpacity>
//         </View>
//       </BlurView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0A1E40',
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 10,
//   },
//   headerBlur: {
//     padding: 15,
//     paddingTop: 50,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 10,
//   },
//   counterContainer: {
//     marginBottom: 15,
//   },
//   imageCounter: {
//     color: 'white',
//     fontSize: 16,
//     backgroundColor: 'rgba(108, 71, 255, 0.3)',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 15,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(108, 71, 255, 0.5)',
//   },
//   flatList: {
//     flex: 1,
//     marginTop: 0,
//   },
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//   },
//   imageContainer: {
//     width: '100%',
//     height: '90%',
//     borderRadius: 20,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   pagination: {
//     flexDirection: 'row',
//     position: 'absolute',
//     bottom: 110,
//     alignSelf: 'center',
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   classificationContainer: {
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     padding: 15,
//     borderRadius: 15,
//     alignItems: 'center',
//     width: '95%',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   classificationTitle: {
//     color: '#6C47FF',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   classificationText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   confidenceBar: {
//     width: '100%',
//     height: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 5,
//     marginBottom: 8,
//     overflow: 'hidden',
//   },
//   confidenceFill: {
//     height: '100%',
//     borderRadius: 5,
//   },
//   confidenceText: {
//     color: '#ddd',
//     fontSize: 16,
//   },
//   controlsContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     paddingBottom: 40,
//     paddingTop: 20,
//     backgroundColor: 'rgba(10, 25, 47, 0.5)',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingHorizontal: 20,
//   },
//   controlButton: {
//     flex: 1,
//     height: 56,
//     marginHorizontal: 8,
//     borderRadius: 15,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   gradientButton: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
// });

// export default ProcessedImagesScreen;

// import React, { useState, useRef } from 'react';
// import { 
//   View, 
//   Image, 
//   TouchableOpacity, 
//   StyleSheet, 
//   FlatList, 
//   Dimensions, 
//   Text,
//   Alert,
//   SafeAreaView
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
// import { BlurView } from 'expo-blur';
// import { LinearGradient } from 'expo-linear-gradient';
// import { StatusBar } from 'expo-status-bar';
// import { Link } from 'expo-router';

// const { width, height } = Dimensions.get('window');

// interface ProcessedImagesScreenProps {
//   images: string[];
//   onBack: () => void;
//   classification?: {
//     predicted_class: string;
//     confidence: number;
//   };
// }

// const ProcessedImagesScreen: React.FC<ProcessedImagesScreenProps> = ({ 
//   images, 
//   onBack,
//   classification 
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const flatListRef = useRef<FlatList>(null);

//   const handleDownloadPhoto = async () => {
//     try {
//       const { status } = await MediaLibrary.requestPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Required', 'Permission to access media library is required!', [
//           { text: 'OK' },
//         ]);
//         return;
//       }

//       const uriToDownload = images[activeIndex];
//       const asset = await MediaLibrary.createAssetAsync(uriToDownload);
//       await MediaLibrary.createAlbumAsync('Nazar', asset, false);
//       Alert.alert('Success', 'Photo saved to your gallery!');
//     } catch (error) {
//       console.error('Error downloading photo:', error);
//       Alert.alert('Error', 'Failed to save photo.');
//     }
//   };

//   const renderItem = ({ item }: { item: string }) => {
//     return (
//       <View style={styles.slide}>
//         <BlurView intensity={5} tint="dark" style={styles.imageContainer}>
//           <Image
//             source={{ uri: item }}
//             style={styles.image}
//             onError={(error) => {
//               console.error('Error loading image:', error.nativeEvent.error);
//             }}
//           />
//         </BlurView>
//       </View>
//     );
//   };

//   const handleViewableItemsChanged = ({ viewableItems }: any) => {
//     if (viewableItems.length > 0) {
//       setActiveIndex(viewableItems[0].index);
//     }
//   };

//   return (
//     <LinearGradient
//       colors={['#0A1E40', '#112240', '#1A365D']}
//       style={styles.container}
//     >
//       <StatusBar style="light" />
//       <SafeAreaView style={styles.safeArea}>
//         {/* Header with classification results */}
//         <View style={styles.headerContainer}>
//           <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
//             <Text style={styles.headerTitle}>Analysis Results</Text>
//             <View style={styles.counterContainer}>
//               <Text style={styles.imageCounter}>
//                 {activeIndex + 1} / {images.length}
//               </Text>
//             </View>
            
//             {classification && (
//               <View style={styles.classificationContainer}>
//                 <Text style={styles.classificationTitle}>Diagnosis:</Text>
//                 <Text style={styles.classificationText}>
//                   {classification.predicted_class}
//                 </Text>
//                 <View style={styles.confidenceBar}>
//                   <View 
//                     style={[
//                       styles.confidenceFill, 
//                       { 
//                         width: `${classification.confidence}%`,
//                         backgroundColor: classification.confidence > 70 
//                           ? '#4CAF50' 
//                           : classification.confidence > 40 
//                             ? '#FFC107' 
//                             : '#F44336'
//                       }
//                     ]} 
//                   />
//                 </View>
//                 <Text style={styles.confidenceText}>
//                   Confidence: {classification.confidence.toFixed(2)}%
//                 </Text>
//               </View>
//             )}
//           </BlurView>
//         </View>

//         {/* Image Slider */}
//         <View style={styles.contentContainer}>
//           <FlatList
//             ref={flatListRef}
//             data={images}
//             renderItem={renderItem}
//             keyExtractor={(item, index) => index.toString()}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             onViewableItemsChanged={handleViewableItemsChanged}
//             viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
//           />
          
//           {/* Pagination Dots */}
//           <View style={styles.pagination}>
//             {images.map((_, index) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.paginationDot,
//                   { backgroundColor: index === activeIndex ? '#6C47FF' : 'rgba(255, 255, 255, 0.3)' }
//                 ]}
//               />
//             ))}
//           </View>
//         </View>
        
//         {/* Bottom Controls */}
//         <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.controlButton} onPress={onBack}>
//               <LinearGradient
//                 colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
//                 style={styles.gradientButton}
//               >
//                 <Ionicons name="arrow-back" size={24} color="white" />
//                 <Text style={styles.buttonText}>Back</Text>
//               </LinearGradient>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.controlButton} onPress={handleDownloadPhoto}>
//               <LinearGradient
//                 colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
//                 style={styles.gradientButton}
//               >
//                 <Ionicons name="download" size={24} color="white" />
//                 <Text style={styles.buttonText}>Save</Text>
//               </LinearGradient>
//             </TouchableOpacity>
            
//             <Link href="/map" asChild>
//                 <TouchableOpacity style={styles.controlButton}>
//                   <LinearGradient
//                     colors={['#6C47FF', '#5034d0']}
//                     style={styles.gradientButton}
//                   >
//                     <Ionicons name="map" size={24} color="white" />
//                     <Text style={styles.buttonText}>Map</Text>
//                   </LinearGradient>
//                 </TouchableOpacity>
//             </Link>
//           </View>
//         </BlurView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0A1E40',
//   },
//   safeArea: {
//     flex: 1,
//     position: 'relative',
//   },
//   headerContainer: {
//     width: '100%',
//     zIndex: 10,
//   },
//   headerBlur: {
//     padding: 15,
//     paddingTop: 50,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 10,
//   },
//   counterContainer: {
//     marginBottom: 15,
//   },
//   imageCounter: {
//     color: 'white',
//     fontSize: 16,
//     backgroundColor: 'rgba(108, 71, 255, 0.3)',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 15,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(108, 71, 255, 0.5)',
//   },
//   contentContainer: {
//     flex: 1,
//     paddingTop: 0,
//     position: 'relative',
//     justifyContent: 'center',
//   },
//   slide: {
//     width,
//     height: height * 0.6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//   },
//   imageContainer: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 20,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   pagination: {
//     flexDirection: 'row',
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   classificationContainer: {
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     padding: 15,
//     borderRadius: 15,
//     alignItems: 'center',
//     width: '95%',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//     marginBottom: 10,
//   },
//   classificationTitle: {
//     color: '#6C47FF',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   classificationText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   confidenceBar: {
//     width: '100%',
//     height: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 5,
//     marginBottom: 8,
//     overflow: 'hidden',
//   },
//   confidenceFill: {
//     height: '100%',
//     borderRadius: 5,
//   },
//   confidenceText: {
//     color: '#ddd',
//     fontSize: 16,
//   },
//   controlsContainer: {
//     width: '100%',
//     paddingBottom: 40,
//     paddingTop: 20,
//     backgroundColor: 'rgba(10, 25, 47, 0.5)',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingHorizontal: 20,
//   },
//   controlButton: {
//     flex: 1,
//     height: 56,
//     marginHorizontal: 8,
//     borderRadius: 15,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   gradientButton: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
// });

// export default ProcessedImagesScreen;
// import React, { useState, useRef } from 'react';
// import { 
//   View, 
//   Image, 
//   TouchableOpacity, 
//   StyleSheet, 
//   FlatList, 
//   Dimensions, 
//   Text,
//   Alert,
//   SafeAreaView,
//   ScrollView
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
// import { BlurView } from 'expo-blur';
// import { LinearGradient } from 'expo-linear-gradient';
// import { StatusBar } from 'expo-status-bar';
// import { Link } from 'expo-router';

// const { width, height } = Dimensions.get('window');

// interface ProcessedImagesScreenProps {
//   images: string[];
//   onBack: () => void;
//   classification?: {
//     predicted_class: string;
//     confidence: number;
//   };
// }

// const ProcessedImagesScreen: React.FC<ProcessedImagesScreenProps> = ({ 
//   images, 
//   onBack,
//   classification 
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const flatListRef = useRef<FlatList>(null);

//   const handleDownloadPhoto = async () => {
//     try {
//       const { status } = await MediaLibrary.requestPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Required', 'Permission to access media library is required!', [
//           { text: 'OK' },
//         ]);
//         return;
//       }

//       const uriToDownload = images[activeIndex];
//       const asset = await MediaLibrary.createAssetAsync(uriToDownload);
//       await MediaLibrary.createAlbumAsync('Nazar', asset, false);
//       Alert.alert('Success', 'Photo saved to your gallery!');
//     } catch (error) {
//       console.error('Error downloading photo:', error);
//       Alert.alert('Error', 'Failed to save photo.');
//     }
//   };

//   const renderItem = ({ item }: { item: string }) => {
//     return (
//       <View style={styles.slide}>
//         <BlurView intensity={5} tint="dark" style={styles.imageContainer}>
//           <Image
//             source={{ uri: item }}
//             style={styles.image}
//             onError={(error) => {
//               console.error('Error loading image:', error.nativeEvent.error);
//             }}
//           />
//         </BlurView>
//       </View>
//     );
//   };

//   const handleViewableItemsChanged = ({ viewableItems }: any) => {
//     if (viewableItems.length > 0) {
//       setActiveIndex(viewableItems[0].index);
//     }
//   };

//   return (
//     <LinearGradient
//       colors={['#0A1E40', '#112240', '#1A365D']}
//       style={styles.container}
//     >
//       <StatusBar style="light" />
//       <SafeAreaView style={styles.safeArea}>
//         <ScrollView 
//           contentContainerStyle={styles.scrollContainer}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Header with classification results */}
//           <View style={styles.headerContainer}>
//             <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
//               <Text style={styles.headerTitle}>Analysis Results</Text>
//               {/* <View style={styles.counterContainer}>
//                 <Text style={styles.imageCounter}>
//                   {activeIndex + 1} / {images.length}
//                 </Text>
//               </View> */}
              
//               {classification && (
//                 <View style={styles.classificationContainer}>
//                   <Text style={styles.classificationTitle}>Diagnosis:</Text>
//                   <Text style={styles.classificationText}>
//                     {classification.predicted_class}
//                   </Text>
//                   <View style={styles.confidenceBar}>
//                     <View 
//                       style={[
//                         styles.confidenceFill, 
//                         { 
//                           width: `${classification.confidence}%`,
//                           backgroundColor: classification.confidence > 70 
//                             ? '#4CAF50' 
//                             : classification.confidence > 40 
//                               ? '#FFC107' 
//                               : '#F44336'
//                         }
//                       ]} 
//                     />
//                   </View>
//                   <Text style={styles.confidenceText}>
//                     Confidence: {classification.confidence.toFixed(2)}%
//                   </Text>
//                 </View>
//               )}
//             </BlurView>
//           </View>

//           {/* Image Slider */}
//           <View style={styles.contentContainer}>
//           <View style={styles.imageCounterOverlay}>
//     <Text style={styles.imageCounter}>
//       {activeIndex + 1} / {images.length}
//     </Text>
//   </View>
//             <FlatList
//               ref={flatListRef}
//               data={images}
//               renderItem={renderItem}
//               keyExtractor={(item, index) => index.toString()}
//               horizontal
//               pagingEnabled
//               showsHorizontalScrollIndicator={false}
//               onViewableItemsChanged={handleViewableItemsChanged}
//               viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
//               nestedScrollEnabled={true}
//             />
            
            
//             {/* Pagination Dots */}
//             <View style={styles.pagination}>
             
              
//               {images.map((_, index) => (
//                 <View
//                   key={index}
//                   style={[
//                     styles.paginationDot,
//                     { backgroundColor: index === activeIndex ? '#6C47FF' : 'rgba(255, 255, 255, 0.3)' }
//                   ]}
//                 />
//               ))}
//             </View>
//           </View>
          
//           {/* Bottom spacing to ensure content isn't cut off by controls */}
//           <View style={styles.bottomSpacing} />
//         </ScrollView>
        
//         {/* Bottom Controls - Fixed at bottom */}
//         <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.controlButton} onPress={onBack}>
//               <LinearGradient
//                 colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
//                 style={styles.gradientButton}
//               >
//                 <Ionicons name="arrow-back" size={24} color="white" />
//                 <Text style={styles.buttonText}>Back</Text>
//               </LinearGradient>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.controlButton} onPress={handleDownloadPhoto}>
//               <LinearGradient
//                 colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
//                 style={styles.gradientButton}
//               >
//                 <Ionicons name="download" size={24} color="white" />
//                 <Text style={styles.buttonText}>Save</Text>
//               </LinearGradient>
//             </TouchableOpacity>
            
//             <Link href="/map" asChild>
//                 <TouchableOpacity style={styles.controlButton}>
//                   <LinearGradient
//                     colors={['#6C47FF', '#5034d0']}
//                     style={styles.gradientButton}
//                   >
//                     <Ionicons name="map" size={24} color="white" />
//                     <Text style={styles.buttonText}>Map</Text>
//                   </LinearGradient>
//                 </TouchableOpacity>
//             </Link>
//           </View>
//         </BlurView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0A1E40',
//   },
//   safeArea: {
//     flex: 1,
//     position: 'relative',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 100, // Ensure content is not hidden behind controls
//   },
//   headerContainer: {
//     width: '100%',
//     zIndex: 10,
//   },
//   headerBlur: {
//     padding: 15,
//     paddingTop: 50,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 10,
//   },
//   counterContainer: {
//     marginBottom: 15,
//   },
//   imageCounter: {
//     color: 'white',
//     fontSize: 16,
//     backgroundColor: 'rgba(108, 71, 255, 0.3)',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 15,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(108, 71, 255, 0.5)',
//   },
//   imageCounterOverlay: {
//     position: 'absolute',
//     top: 15,
//     right: 25,
//     zIndex: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     borderRadius: 15,
//     padding: 2,
//     borderWidth: 1,
//     borderColor: 'rgba(108, 71, 255, 0.5)',
//   },
//   contentContainer: {
//     height: height * 0.6,
//     position: 'relative',
//     marginBottom: 20,
//   },
//   slide: {
//     width,
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//   },
//   imageContainer: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 20,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   pagination: {
//     flexDirection: 'row',
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   classificationContainer: {
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     padding: 15,
//     borderRadius: 15,
//     alignItems: 'center',
//     width: '95%',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//     marginBottom: 10,
//   },
//   classificationTitle: {
//     color: '#6C47FF',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   classificationText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   confidenceBar: {
//     width: '100%',
//     height: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 5,
//     marginBottom: 8,
//     overflow: 'hidden',
//   },
//   confidenceFill: {
//     height: '100%',
//     borderRadius: 5,
//   },
//   confidenceText: {
//     color: '#ddd',
//     fontSize: 16,
//   },
//   bottomSpacing: {
//     height: 100, // Extra space at bottom to ensure content is fully visible when scrolled
//   },
//   controlsContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     paddingBottom: 20,
//     paddingTop: 10,
//     backgroundColor: 'rgba(10, 25, 47, 0.5)',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingHorizontal: 10,
//   },
//   controlButton: {
//     flex: 1,
//     height: 56,
//     marginHorizontal: 8,
//     borderRadius: 15,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   gradientButton: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
// });

// export default ProcessedImagesScreen;
import React, { useState, useRef } from 'react';
import { 
  View, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  FlatList, 
  Dimensions, 
  Text,
  Alert,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

interface ProcessedImagesScreenProps {
  images: string[];
  onBack: () => void;
  classification?: {
    predicted_class: string;
    confidence: number;
  };
}

// Define image titles array
const IMAGE_TITLES = [
  "CROPPED IMAGE",
  "GLARE REMOVED",
  "WATERSHED IMAGE",
  "COMBINED IMAGE",
  "LUMINANCE IMAGE"
];

const ProcessedImagesScreen: React.FC<ProcessedImagesScreenProps> = ({ 
  images, 
  onBack,
  classification 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleDownloadPhoto = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Permission to access media library is required!', [
          { text: 'OK' },
        ]);
        return;
      }

      const uriToDownload = images[activeIndex];
      const asset = await MediaLibrary.createAssetAsync(uriToDownload);
      await MediaLibrary.createAlbumAsync('Nazar', asset, false);
      Alert.alert('Success', 'Photo saved to your gallery!');
    } catch (error) {
      console.error('Error downloading photo:', error);
      Alert.alert('Error', 'Failed to save photo.');
    }
  };

  const renderItem = ({ item, index }: { item: string, index: number }) => {
    // Get the title for this image, or use a default if index is out of bounds
    const title = index < IMAGE_TITLES.length ? IMAGE_TITLES[index] : `IMAGE ${index + 1}`;
    
    return (
      <View style={styles.slide}>
        <BlurView intensity={5} tint="dark" style={styles.imageContainer}>
          {/* Image Title Overlay */}
          <View style={styles.imageTitleContainer}>
            <Text style={styles.imageTitle}>{title}</Text>
          </View>
          
          <Image
            source={{ uri: item }}
            style={styles.image}
            onError={(error) => {
              console.error('Error loading image:', error.nativeEvent.error);
            }}
          />
        </BlurView>
      </View>
    );
  };

  const handleViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  return (
    <LinearGradient
      colors={['#0A1E40', '#112240', '#1A365D']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header with classification results */}
          <View style={styles.headerContainer}>
            <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
              <Text style={styles.headerTitle}>Analysis Results</Text>
              
              {classification && (
                <View style={styles.classificationContainer}>
                  <Text style={styles.classificationTitle}>Diagnosis:</Text>
                  <Text style={styles.classificationText}>
                    {classification.predicted_class}
                  </Text>
                  <View style={styles.confidenceBar}>
                    <View 
                      style={[
                        styles.confidenceFill, 
                        { 
                          width: `${classification.confidence}%`,
                          backgroundColor: classification.confidence > 70 
                            ? '#4CAF50' 
                            : classification.confidence > 40 
                              ? '#FFC107' 
                              : '#F44336'
                        }
                      ]} 
                    />
                  </View>
                  <Text style={styles.confidenceText}>
                    Confidence: {classification.confidence.toFixed(2)}%
                  </Text>
                </View>
              )}
            </BlurView>
          </View>

          {/* Image Slider */}
          <View style={styles.contentContainer}>
            <View style={styles.imageCounterOverlay}>
              <Text style={styles.imageCounter}>
                {activeIndex + 1} / {images.length}
              </Text>
            </View>
            
            <FlatList
              ref={flatListRef}
              data={images}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={handleViewableItemsChanged}
              viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
              nestedScrollEnabled={true}
            />
            
            {/* Pagination Dots */}
            <View style={styles.pagination}>
              {images.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    { backgroundColor: index === activeIndex ? '#6C47FF' : 'rgba(255, 255, 255, 0.3)' }
                  ]}
                />
              ))}
            </View>
          </View>
          
          {/* Bottom spacing to ensure content isn't cut off by controls */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
        
        {/* Bottom Controls - Fixed at bottom */}
        <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.controlButton} onPress={onBack}>
              <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
                style={styles.gradientButton}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={styles.buttonText}>Back</Text>
              </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.controlButton} onPress={handleDownloadPhoto}>
              <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
                style={styles.gradientButton}
              >
                <Ionicons name="download" size={24} color="white" />
                <Text style={styles.buttonText}>Save</Text>
              </LinearGradient>
            </TouchableOpacity>
            
            <Link href="/map" asChild>
                <TouchableOpacity style={styles.controlButton}>
                  <LinearGradient
                    colors={['#6C47FF', '#5034d0']}
                    style={styles.gradientButton}
                  >
                    <Ionicons name="map" size={24} color="white" />
                    <Text style={styles.buttonText}>Map</Text>
                  </LinearGradient>
                </TouchableOpacity>
            </Link>
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
    position: 'relative',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, // Ensure content is not hidden behind controls
  },
  headerContainer: {
    width: '100%',
    zIndex: 10,
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
    marginBottom: 10,
  },
  counterContainer: {
    marginBottom: 15,
  },
  imageCounter: {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'rgba(108, 71, 255, 0.3)',
    paddingVertical: 6,
    left: 0,
    paddingHorizontal: 12,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(108, 71, 255, 0.5)',
  },
  imageCounterOverlay: {
    position: 'absolute',
    top: 10,
    right: 19,
    zIndex: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
    padding: 2,
    borderWidth: 1,
    borderColor: 'rgba(108, 71, 255, 0.5)',
  },
  // New styles for image title
  imageTitleContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 15,
    zIndex: 20,
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(108, 71, 255, 0.5)',
    textAlign: 'center',
    letterSpacing: 1,
  },
  contentContainer: {
    height: height * 0.6,
    position: 'relative',
    marginBottom: 20,
  },
  slide: {
    width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  classificationContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '95%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
  },
  classificationTitle: {
    color: '#6C47FF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  classificationText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  confidenceBar: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    marginBottom: 8,
    overflow: 'hidden',
  },
  confidenceFill: {
    height: '100%',
    borderRadius: 5,
  },
  confidenceText: {
    color: '#ddd',
    fontSize: 16,
  },
  bottomSpacing: {
    height: 100, // Extra space at bottom to ensure content is fully visible when scrolled
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: 'rgba(10, 25, 47, 0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  controlButton: {
    flex: 1,
    height: 56,
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

export default ProcessedImagesScreen;