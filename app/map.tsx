
// import React, { useState, useEffect } from 'react';
// import MapView, { Region } from 'react-native-maps';
// import { StyleSheet, View } from 'react-native';
// import * as Location from 'expo-location';

// export default function App() {
//   const [region, setRegion] = useState<Region>({
//     latitude: 39.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;
//       setRegion({
//         ...region,
//         latitude,
//         longitude,
//       });
//     };

//     requestLocationPermission();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={region}
//         onRegionChangeComplete={(region) => setRegion(region)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });

import React, { useState, useEffect } from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

const doctorLocations = [
  { latitude: 33.7103, longitude: 73.0420, title: 'Dr. Nusrat Sameen', description: 'Ali Medical Centre, F-8 Markaz, Islamabad' },
  { latitude: 33.7103, longitude: 73.0420, title: 'Dr. Anwar Ahmed Gul', description: 'Ali Medical Centre, F-8 Markaz, Islamabad' },
  { latitude: 33.7103, longitude: 73.0420, title: 'Dr. Muhammad Idrees', description: 'Ali Medical Centre, F-8 Markaz, Islamabad' },
  { latitude: 33.7103, longitude: 73.0420, title: 'Dr. Inayat Ullah Khan', description: 'Ali Medical Centre, F-8 Markaz, Islamabad' },
  { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Zeba Ilyas Matin', description: 'Shifa International Hospital, H-8/4, Islamabad' },
  { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Farooq Afzal', description: 'Shifa International Hospital, H-8/4, Islamabad' },
  { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Saadia Farooq', description: 'Shifa International Hospital, H-8/4, Islamabad' },
  { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Muhammad Amer Raza Awan', description: 'Shifa International Hospital, H-8/4, Islamabad' },
  { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Sulman Jaffar', description: 'Shifa International Hospital, H-8/4, Islamabad' },
  { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Ayisha Kausar', description: 'Shifa International Hospital, H-8/4, Islamabad' },
  { latitude: 33.7076, longitude: 73.0710, title: 'Prof. Dr. M. Mumtaz Chaudhry', description: 'Polyclinic Hospital, G-6/2, Islamabad' },
  { latitude: 33.7266, longitude: 73.0655, title: 'Dr. Anique Ahmad', description: 'Amanat Eye Hospital, F-7/4, Islamabad' },
  { latitude: 33.7266, longitude: 73.0655, title: 'Dr. Kashif Raza', description: 'Amanat Eye Hospital, F-7/4, Islamabad' },
  { latitude: 33.7266, longitude: 73.0655, title: 'Dr. Muhammad Adnan', description: 'Amanat Eye Hospital, F-7/4, Islamabad' },
  { latitude: 33.7266, longitude: 73.0655, title: 'Dr. Rayyan Zakir', description: 'Amanat Eye Hospital, F-7/4, Islamabad' },
];

export default function App() {
  const [region, setRegion] = useState<Region>({
    latitude: 33.7103,
    longitude: 73.0420,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setUserLocation({ latitude, longitude });
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} onRegionChangeComplete={(region) => setRegion(region)}>
        {doctorLocations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.title}
            description={location.description}
          />
        ))}

        {userLocation && (
          <Marker
            coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
            pinColor="blue"
            title="Your Location"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
