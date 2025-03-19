import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


import { RouteProp } from '@react-navigation/native';

type RouteParams = {
  params: {
    processedImageUrl: string;
  };
};

const ProcessedPhotoScreen = ({ route }: { route: RouteProp<RouteParams, 'params'> }) => {
  const { processedImageUrl } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: processedImageUrl }} style={styles.image} />
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
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ProcessedPhotoScreen;