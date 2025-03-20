import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImageEditor } from 'expo-crop-image';

interface CropScreenProps {
  photo: any;
  onCrop: (croppedImage: any) => void;
  onCancel: () => void;
}

const CropScreen: React.FC<CropScreenProps> = ({ photo, onCrop, onCancel }) => {
  return (
    <View style={styles.container}>
      <ImageEditor
        isVisible={true}
        imageUri={photo.uri}
        fixedAspectRatio={1} // For a square crop; change as needed (e.g., 16/9)
        minimumCropDimensions={{ width: 100, height: 100 }}
        onEditingCancel={onCancel}
        onEditingComplete={(image: any) => onCrop(image)}
        editorOptions={{
          backgroundColor: '#000',
          controlBar: {
            position: 'bottom',
            backgroundColor: '#ff4757',
            height: 50,
            // Optionally add custom icons:
            // cancelButton: { color: 'white', iconName: 'close', text: 'Cancel' },
            // cropButton: { color: 'white', iconName: 'check', text: 'Crop' },
          },
          coverMarker: {
            show: true,
            color: 'rgba(255,255,255,0.5)',
          },
          gridOverlayColor: 'rgba(255,255,255,0.4)',
          overlayCropColor: 'rgba(0,0,0,0.5)',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default CropScreen;
