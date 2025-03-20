import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Preview from './preview';
import CropScreen from './cropscreen'; // Import the cropping screen

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
      <View style={styles.container}>
        <Text style={styles.permissionText}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
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
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
        flash={torchEnabled ? 'on' : 'off'}
        enableTorch={torchEnabled}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <AntDesign name='retweet' size={44} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
            <AntDesign name='camera' size={44} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleTorch}>
            <MaterialIcons 
              name={torchEnabled ? 'flash-on' : 'flash-off'}
              size={44} 
              color='white' 
            />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 40,
    width: '100%',
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
  permissionText: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
});
