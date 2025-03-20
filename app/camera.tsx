// import { AntDesign, MaterialIcons } from '@expo/vector-icons';
// import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
// import { useRef, useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Preview from './preview';
// import CropScreen from './cropscreen'; // Import the cropping screen

// export default function Camera() {
//   const [facing, setFacing] = useState<CameraType>('back');
//   const [permission, requestPermission] = useCameraPermissions();
//   const [photo, setPhoto] = useState<any>(null);
//   const [torchEnabled, setTorchEnabled] = useState(false);
//   const [cropping, setCropping] = useState(false);

//   const cameraRef = useRef<CameraView | null>(null);

//   if (!permission) {
//     return <View />;
//   }

//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.permissionText}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="Grant Permission" />
//       </View>
//     );
//   }

//   const toggleTorch = () => setTorchEnabled(current => !current);
//   const toggleCameraFacing = () => setFacing(current => (current === 'back' ? 'front' : 'back'));

//   const handleTakePhoto = async () => {
//     if (cameraRef.current) {
//       const options = {
//         quality: 1,
//         base64: true,
//         exif: false,
//       };
//       const takenPhoto = await cameraRef.current.takePictureAsync(options);
//       console.log('Photo taken:', takenPhoto);
//       setPhoto(takenPhoto);
//       setCropping(true);
//     }
//   };

//   const handleCropPhoto = (croppedImage: any) => {
//     setPhoto(croppedImage);
//     setCropping(false);
//   };

//   const handleRetakePhoto = () => {
//     setPhoto(null);
//     setCropping(false);
//   };

//   if (cropping && photo) {
//     return <CropScreen photo={photo} onCrop={handleCropPhoto} onCancel={handleRetakePhoto} />;
//   }

//   if (photo) {
//     return <Preview photo={photo} handleRetakePhoto={handleRetakePhoto} />;
//   }

//   return (
//     <View style={styles.container}>
//       <CameraView
//         style={styles.camera}
//         facing={facing}
//         ref={cameraRef}
//         flash={torchEnabled ? 'on' : 'off'}
//         enableTorch={torchEnabled}
//       >
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <AntDesign name='retweet' size={44} color='white' />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
//             <AntDesign name='camera' size={44} color='white' />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={toggleTorch}>
//             <MaterialIcons 
//               name={torchEnabled ? 'flash-on' : 'flash-off'}
//               size={44} 
//               color='white' 
//             />
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#000',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     position: 'absolute',
//     bottom: 40,
//     width: '100%',
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
//   permissionText: {
//     textAlign: 'center',
//     color: 'white',
//     marginBottom: 20,
//   },
// });
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  StatusBar,
  SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Preview from './preview';
import CropScreen from './cropscreen';

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const [torchEnabled, setTorchEnabled] = useState(false);
  const [cropping, setCropping] = useState(false);

  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <LinearGradient
        colors={['#0a192f', '#112240', '#1a365d']}
        style={styles.container}
      >
        <SafeAreaView style={styles.safeArea}>
          <BlurView intensity={20} tint="dark" style={styles.permissionContainer}>
            <Text style={styles.permissionTitle}>Camera Access Required</Text>
            <Text style={styles.permissionText}>We need your permission to use the camera for eye screening</Text>
            <TouchableOpacity 
              style={styles.permissionButton} 
              onPress={requestPermission}
            >
              <Text style={styles.permissionButtonText}>Grant Permission</Text>
            </TouchableOpacity>
          </BlurView>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  const toggleTorch = () => setTorchEnabled(current => !current);
  const toggleCameraFacing = () => setFacing(current => (current === 'back' ? 'front' : 'back'));

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takenPhoto = await cameraRef.current.takePictureAsync(options);
      console.log('Photo taken:', takenPhoto);
      setPhoto(takenPhoto);
      setCropping(true);
    }
  };

  const handleCropPhoto = (croppedImage: any) => {
    setPhoto(croppedImage);
    setCropping(false);
  };

  const handleRetakePhoto = () => {
    setPhoto(null);
    setCropping(false);
  };

  if (cropping && photo) {
    return <CropScreen photo={photo} onCrop={handleCropPhoto} onCancel={handleRetakePhoto} />;
  }

  if (photo) {
    return <Preview photo={photo} handleRetakePhoto={handleRetakePhoto} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
        flash={torchEnabled ? 'on' : 'off'}
        enableTorch={torchEnabled}
      >
        {/* Header area with title */}
        <View style={styles.headerContainer}>
          <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
            <Text style={styles.headerTitle}>Eye Screening</Text>
            <Text style={styles.headerSubtitle}>Position eye in the center frame</Text>
          </BlurView>
        </View>

        {/* Center focus overlay */}
        <View style={styles.focusFrameContainer}>
          <View style={styles.focusFrame}>
            <View style={[styles.cornerMark, styles.topLeft]} />
            <View style={[styles.cornerMark, styles.topRight]} />
            <View style={[styles.cornerMark, styles.bottomLeft]} />
            <View style={[styles.cornerMark, styles.bottomRight]} />
          </View>
        </View>

        {/* Bottom control panel */}
        <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton} onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse" size={30} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.captureButton} onPress={handleTakePhoto}>
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.controlButton} onPress={toggleTorch}>
            <Ionicons 
              name={torchEnabled ? 'flash' : 'flash-off'}
              size={30} 
              color={torchEnabled ? '#FFD700' : 'white'} 
            />
          </TouchableOpacity>
        </BlurView>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  safeArea: {
    flex: 1,
  },
  camera: {
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
  focusFrameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusFrame: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cornerMark: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderColor: 'rgba(255, 255, 255, 0.9)',
  },
  topLeft: {
    top: 20,
    left: 20,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 10,
  },
  topRight: {
    top: 20,
    right: 20,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 10,
  },
  bottomLeft: {
    bottom: 20,
    left: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 10,
  },
  bottomRight: {
    bottom: 20,
    right: 20,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 10,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  controlButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  captureButtonInner: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#0a192f',
    borderWidth: 2,
    borderColor: 'white',
  },
  permissionContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  permissionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  permissionText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 30,
    fontSize: 16,
    lineHeight: 24,
  },
  permissionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  permissionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});