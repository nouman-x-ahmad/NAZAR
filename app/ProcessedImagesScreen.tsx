// import React, { useState, useRef } from 'react';
// import { View, Image, TouchableOpacity, Alert, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// interface ProcessedImagesScreenProps {
//   images: string[];
//   onBack: () => void;
// }

// const ProcessedImagesScreen: React.FC<ProcessedImagesScreenProps> = ({ images, onBack }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const flatListRef = useRef<FlatList>(null);
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

//       const uriToDownload = images[activeIndex];
//       const asset = await MediaLibrary.createAssetAsync(uriToDownload);
//       await MediaLibrary.createAlbumAsync('Download', asset, false);
//       Alert.alert('Success', 'Photo downloaded successfully!');
//     } catch (error) {
//       console.error('Error downloading photo:', error);
//       Alert.alert('Error', 'Failed to download photo.');
//     }
//   };

//   const renderItem = ({ item }: { item: string }) => {
//     return (
//       <View style={styles.slide}>
//         <Image
//           source={{ uri: item }}
//           style={styles.image}
//           onError={(error) => {
//             console.error('Error loading image:', error.nativeEvent.error);
//           }}
//         />
//       </View>
//     );
//   };

//   const handleViewableItemsChanged = ({ viewableItems }: any) => {
//     if (viewableItems.length > 0) {
//       setActiveIndex(viewableItems[0].index);
//     }
//   };

//   return (
//     <View style={styles.container}>
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
//       />
      
//       <View style={styles.pagination}>
//         {images.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.paginationDot,
//               { backgroundColor: index === activeIndex ? '#ff4757' : 'rgba(255, 255, 255, 0.5)' }
//             ]}
//           />
//         ))}
//       </View>
      
//       <Text style={styles.imageCounter}>
//         {activeIndex + 1} / {images.length}
//       </Text>
      
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={onBack}>
//           <AntDesign name="arrowleft" size={44} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={handleDownloadPhoto}>
//           <AntDesign name="download" size={44} color="white" />
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
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
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
//   pagination: {
//     flexDirection: 'row',
//     position: 'absolute',
//     bottom: 100,
//     alignSelf: 'center',
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   imageCounter: {
//     position: 'absolute',
//     top: 30,
//     right: 20,
//     color: 'white',
//     fontSize: 16,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     padding: 8,
//     borderRadius: 15,
//   },
// });

// export default ProcessedImagesScreen;


import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { Alert } from 'react-native';

const { width } = Dimensions.get('window');

interface ProcessedImagesScreenProps {
  images: string[];
  onBack: () => void;
  classification?: {
    predicted_class: string;
    confidence: number;
  };
}

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
      await MediaLibrary.createAlbumAsync('Download', asset, false);
      Alert.alert('Success', 'Photo downloaded successfully!');
    } catch (error) {
      console.error('Error downloading photo:', error);
      Alert.alert('Error', 'Failed to download photo.');
    }
  };

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={{ uri: item }}
          style={styles.image}
          onError={(error) => {
            console.error('Error loading image:', error.nativeEvent.error);
          }}
        />
      </View>
    );
  };

  const handleViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  return (
    <View style={styles.container}>
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
      />
      
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === activeIndex ? '#ff4757' : 'rgba(255, 255, 255, 0.5)' }
            ]}
          />
        ))}
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.imageCounter}>
          {activeIndex + 1} / {images.length}
        </Text>
        
        {classification && (
          <View style={styles.classificationContainer}>
            <Text style={styles.classificationTitle}>Analysis Result:</Text>
            <Text style={styles.classificationText}>
              {classification.predicted_class}
            </Text>
            <Text style={styles.confidenceText}>
              Confidence: {classification.confidence.toFixed(2)}%
            </Text>
          </View>
        )}
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onBack}>
          <AntDesign name="arrowleft" size={44} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDownloadPhoto}>
          <AntDesign name="download" size={44} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 40,
  },
  button: {
    backgroundColor: '#ff4757',
    padding: 20,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  infoContainer: {
    position: 'absolute',
    top: 30,
    right: 20,
    left: 20,
    alignItems: 'center',
  },
  imageCounter: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 15,
    marginBottom: 10,
  },
  classificationContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  classificationTitle: {
    color: '#ff4757',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  classificationText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  confidenceText: {
    color: '#ddd',
    fontSize: 16,
  },
});

export default ProcessedImagesScreen;