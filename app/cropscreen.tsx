// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { ImageEditor } from 'expo-crop-image';

// interface CropScreenProps {
//   photo: any;
//   onCrop: (croppedImage: any) => void;
//   onCancel: () => void;
// }

// const CropScreen: React.FC<CropScreenProps> = ({ photo, onCrop, onCancel }) => {
//   return (
//     <View style={styles.container}>
//       <ImageEditor
//         isVisible={true}
//         imageUri={photo.uri}
//         fixedAspectRatio={1} // For a square crop; change as needed (e.g., 16/9)
//         minimumCropDimensions={{ width: 100, height: 100 }}
//         onEditingCancel={onCancel}
//         onEditingComplete={(image: any) => onCrop(image)}
//         editorOptions={{
//           backgroundColor: '#000',
//           controlBar: {
//             position: 'bottom',
//             backgroundColor: '#ff4757',
//             height: 50,
//             // Optionally add custom icons:
//             // cancelButton: { color: 'white', iconName: 'close', text: 'Cancel' },
//             // cropButton: { color: 'white', iconName: 'check', text: 'Crop' },
//           },
//           coverMarker: {
//             show: true,
//             color: 'rgba(255,255,255,0.5)',
//           },
//           gridOverlayColor: 'rgba(255,255,255,0.4)',
//           overlayCropColor: 'rgba(0,0,0,0.5)',
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
// });

// export default CropScreen;

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { ImageEditor } from 'expo-crop-image';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

interface CropScreenProps {
  photo: any;
  onCrop: (croppedImage: any) => void;
  onCancel: () => void;
}

const CropScreen: React.FC<CropScreenProps> = ({ photo, onCrop, onCancel }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header area */}
      <View style={styles.headerContainer}>
        <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
          <Text style={styles.headerTitle}>Adjust Image</Text>
          <Text style={styles.headerSubtitle}>Crop the eye for better analysis</Text>
        </BlurView>
      </View>

      <ImageEditor
        isVisible={true}
        imageUri={photo.uri}
        fixedAspectRatio={1} // For a square crop
        minimumCropDimensions={{ width: 100, height: 100 }}
        onEditingCancel={onCancel}
        onEditingComplete={(image: any) => onCrop(image)}
        editorOptions={{
          backgroundColor: '#0a192f',
          controlBar: {
            position: 'bottom',
            backgroundColor: 'rgba(26, 54, 93, 0.8)',
            height: 60,
            cancelButton: { 
              color: 'white', 
              iconName: 'close', 
              text: 'Cancel' 
            },
            cropButton: { 
              color: 'white', 
              iconName: 'check', 
              text: 'Crop' 
            },
          },
          coverMarker: {
            show: true,
            color: 'rgba(255, 255, 255, 0.5)',
          },
          gridOverlayColor: 'rgba(255, 255, 255, 0.4)',
          overlayCropColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Custom Control Buttons - Use if you want to replace the built-in controls */}
      {/* <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton} onPress={onCancel}>
          <Ionicons name="close" size={24} color="white" />
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.cropButton} onPress={() => {
          // You would need to implement a way to get the crop data here
          // This is just for UI demonstration
        }}>
          <LinearGradient
            colors={['#6c63ff', '#5c50ff']}
            style={styles.gradientButton}
          >
            <Ionicons name="checkmark" size={24} color="white" />
            <Text style={styles.buttonText}>Crop</Text>
          </LinearGradient>
        </TouchableOpacity>
      </BlurView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f',
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
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  cropButton: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default CropScreen;