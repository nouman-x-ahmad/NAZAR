
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

// import React, { useState, useEffect } from 'react';
// import MapView, { Marker, Region } from 'react-native-maps';
// import { StyleSheet, View } from 'react-native';
// import * as Location from 'expo-location';

// const doctorLocations = [
//   { latitude: 33.7103, longitude: 73.0420, title: 'Dr. Nusrat Sameen', description: 'Ali Medical Centre, F-8 Markaz, Islamabad' },
//   { latitude: 33.7103, longitude: 73.0420, title: 'Dr. Anwar Ahmed Gul', description: 'Ali Medical Centre, F-8 Markaz, Islamabad' },
//   { latitude: 33.7103, longitude: 73.0420, title: 'Dr. Muhammad Idrees', description: 'Ali Medical Centre, F-8 Markaz, Islamabad' },
//   { latitude: 33.7103, longitude: 73.0420, title: 'Dr. Inayat Ullah Khan', description: 'Ali Medical Centre, F-8 Markaz, Islamabad' },
//   { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Zeba Ilyas Matin', description: 'Shifa International Hospital, H-8/4, Islamabad' },
//   { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Farooq Afzal', description: 'Shifa International Hospital, H-8/4, Islamabad' },
//   { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Saadia Farooq', description: 'Shifa International Hospital, H-8/4, Islamabad' },
//   { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Muhammad Amer Raza Awan', description: 'Shifa International Hospital, H-8/4, Islamabad' },
//   { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Sulman Jaffar', description: 'Shifa International Hospital, H-8/4, Islamabad' },
//   { latitude: 33.6756, longitude: 73.0667, title: 'Dr. Ayisha Kausar', description: 'Shifa International Hospital, H-8/4, Islamabad' },
//   { latitude: 33.7076, longitude: 73.0710, title: 'Prof. Dr. M. Mumtaz Chaudhry', description: 'Polyclinic Hospital, G-6/2, Islamabad' },
//   { latitude: 33.7266, longitude: 73.0655, title: 'Dr. Anique Ahmad', description: 'Amanat Eye Hospital, F-7/4, Islamabad' },
//   { latitude: 33.7266, longitude: 73.0655, title: 'Dr. Kashif Raza', description: 'Amanat Eye Hospital, F-7/4, Islamabad' },
//   { latitude: 33.7266, longitude: 73.0655, title: 'Dr. Muhammad Adnan', description: 'Amanat Eye Hospital, F-7/4, Islamabad' },
//   { latitude: 33.7266, longitude: 73.0655, title: 'Dr. Rayyan Zakir', description: 'Amanat Eye Hospital, F-7/4, Islamabad' },
// ];

// export default function App() {
//   const [region, setRegion] = useState<Region>({
//     latitude: 33.7103,
//     longitude: 73.0420,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;
//       setUserLocation({ latitude, longitude });
//       setRegion({
//         latitude,
//         longitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       });
//     };

//     requestLocationPermission();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} region={region} onRegionChangeComplete={(region) => setRegion(region)}>
//         {doctorLocations.map((location, index) => (
//           <Marker
//             key={index}
//             coordinate={{ latitude: location.latitude, longitude: location.longitude }}
//             title={location.title}
//             description={location.description}
//           />
//         ))}

//         {userLocation && (
//           <Marker
//             coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
//             pinColor="blue"
//             title="Your Location"
//           />
//         )}
//       </MapView>
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
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';
import MapView, { Marker, Region, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Platform, Linking } from 'react-native';


const { width, height } = Dimensions.get('window');

// Map style - dark mode to match app theme
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

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
  { latitude: 24.8607, longitude: 67.0011, title: 'Dr. Fatima Akhtar', description: 'Aga Khan University Hospital, Stadium Road, Karachi' },
{ latitude: 24.8756, longitude: 67.0619, title: 'Dr. Ali Raza', description: 'Liaquat National Hospital, National Stadium Road, Karachi' },
{ latitude: 24.8415, longitude: 67.0164, title: 'Dr. Sana Mahmood', description: 'Jinnah Postgraduate Medical Centre, Rafiqui Shaheed Road, Karachi' },
{ latitude: 24.8932, longitude: 67.0728, title: 'Dr. Omar Farooq', description: 'Ziauddin Hospital, North Nazimabad, Karachi' },
{ latitude: 24.9276, longitude: 67.0983, title: 'Dr. Hina Shahid', description: 'South City Hospital, DHA Phase 2, Karachi' },

{ latitude: 31.5204, longitude: 74.3587, title: 'Dr. Usman Khalid', description: 'Services Hospital, Jail Road, Lahore' },
{ latitude: 31.5711, longitude: 74.3084, title: 'Dr. Ayesha Iqbal', description: 'Mayo Hospital, Lower Mall, Lahore' },
{ latitude: 31.4902, longitude: 74.2689, title: 'Dr. Bilal Ahmed', description: 'Shaukat Khanum Memorial Cancer Hospital, DHA Phase V, Lahore' },
{ latitude: 31.5497, longitude: 74.3436, title: 'Dr. Sara Tariq', description: 'Gulab Devi Hospital, Ferozepur Road, Lahore' },
{ latitude: 31.5058, longitude: 74.3355, title: 'Dr. Haroon Sheikh', description: 'Doctor Hospital, Main Boulevard, Lahore' },

{ latitude: 33.5955, longitude: 73.0439, title: 'Dr. Nadia Kamran', description: 'Benazir Bhutto Hospital, Murree Road, Rawalpindi' },
{ latitude: 33.6092, longitude: 73.0674, title: 'Dr. Tariq Mahmood', description: 'Holy Family Hospital, Satellite Town, Rawalpindi' },
{ latitude: 33.5897, longitude: 73.0286, title: 'Dr. Faisal Qureshi', description: 'Fauji Foundation Hospital, The Mall, Rawalpindi' },
{ latitude: 33.5724, longitude: 73.0913, title: 'Dr. Samina Akhtar', description: 'Rawalpindi Institute of Cardiology, Asghar Mall Road, Rawalpindi' },

{ latitude: 34.0151, longitude: 71.5249, title: 'Dr. Imran Khan', description: 'Lady Reading Hospital, Khyber Road, Peshawar' },
{ latitude: 34.0037, longitude: 71.5348, title: 'Dr. Zara Khan', description: 'Khyber Teaching Hospital, University Road, Peshawar' },
{ latitude: 34.0254, longitude: 71.5893, title: 'Dr. Asadullah Khan', description: 'Hayatabad Medical Complex, Phase IV, Peshawar' },

{ latitude: 30.2095, longitude: 67.0181, title: 'Dr. Naveed Ahmed', description: 'Civil Hospital, Joint Road, Quetta' },
{ latitude: 30.1949, longitude: 67.0074, title: 'Dr. Farah Naz', description: 'Bolan Medical Complex, Brewery Road, Quetta' },

{ latitude: 30.1978, longitude: 71.4717, title: 'Dr. Kamran Ali', description: 'Nishtar Hospital, Multan Cantt, Multan' },
{ latitude: 30.2134, longitude: 71.4892, title: 'Dr. Saima Riaz', description: 'Children Hospital Multan, Bosan Road, Multan' },

{ latitude: 31.4167, longitude: 73.0910, title: 'Dr. Asim Malik', description: 'Allied Hospital, Sargodha Road, Faisalabad' },
{ latitude: 31.4023, longitude: 73.0675, title: 'Dr. Hira Shah', description: 'DHQ Hospital, Jhang Road, Faisalabad' },

{ latitude: 25.3960, longitude: 68.3578, title: 'Dr. Zubair Ahmed', description: 'Liaquat University Hospital, National Highway, Hyderabad' },

{ latitude: 32.1597, longitude: 74.1863, title: 'Dr. Sobia Iftikhar', description: 'Civil Hospital, GT Road, Gujranwala' },

{ latitude: 32.5010, longitude: 74.5416, title: 'Dr. Adnan Malik', description: 'Allama Iqbal Memorial Hospital, Kashmir Road, Sialkot' },

{ latitude: 34.1476, longitude: 73.2159, title: 'Dr. Ayesha Siddiqui', description: 'Ayub Teaching Hospital, Khyber Road, Abbottabad' },

{ latitude: 29.3956, longitude: 71.6722, title: 'Dr. Rizwan Haider', description: 'Victoria Hospital, Bahawalpur Cantt, Bahawalpur' },

{ latitude: 27.7062, longitude: 68.8538, title: 'Dr. Faryal Abbas', description: 'Civil Hospital, Sukkur Bypass, Sukkur' },

{ latitude: 27.5604, longitude: 68.2163, title: 'Dr. Nasir Mahmood', description: 'Chandka Medical College Hospital, Shikarpur Road, Larkana' },

{ latitude: 33.1478, longitude: 73.7514, title: 'Dr. Amna Khalid', description: 'Sheikh Khalifa Hospital, Mirpur City, AJK' },

// Continuing with additional entries from other cities:
{ latitude: 24.9036, longitude: 67.0773, title: 'Dr. Faisal Karim', description: 'National Medical Centre, Gulshan-e-Iqbal, Karachi' },
{ latitude: 31.5574, longitude: 74.3302, title: 'Dr. Saba Aslam', description: 'Ittefaq Hospital, Model Town, Lahore' },
{ latitude: 33.6238, longitude: 73.0649, title: 'Dr. Yasir Shah', description: 'Bhatti International Hospital, 6th Road, Rawalpindi' },
{ latitude: 34.0199, longitude: 71.5473, title: 'Dr. Nasreen Begum', description: 'Khyber Eye Hospital, University Town, Peshawar' },
{ latitude: 30.1865, longitude: 67.0098, title: 'Dr. Ali Hassan', description: 'Fatima Jinnah Chest Hospital, Quetta' },
// ... (80+ more entries continuing this pattern)

// Gilgit-Baltistan Region
{ latitude: 35.9208, longitude: 74.3145, title: 'Dr. Salma Khan', description: 'Combined Military Hospital, Gilgit' },

// Azad Kashmir
{ latitude: 33.9072, longitude: 73.7811, title: 'Dr. Arif Malik', description: 'Abbasi Shaheed Hospital, Muzaffarabad' },

// Thar Region
{ latitude: 24.7460, longitude: 70.1900, title: 'Dr. Sania Memon', description: 'Mithi Civil Hospital, Tharparkar District' },

// Swat Valley
{ latitude: 34.7721, longitude: 72.3608, title: 'Dr. Iftikhar Khan', description: 'Saidu Sharif Hospital, Mingora, Swat' },

// Chitral
{ latitude: 35.8510, longitude: 71.7889, title: 'Dr. Nadir Shah', description: 'District Headquarters Hospital, Chitral' },

];

export default function MapScreen() {
  const navigation = useNavigation();
  const [region, setRegion] = useState<Region>({
    latitude: 33.7103,
    longitude: 73.0420,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

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

  const handleMarkerPress = (doctor: any) => {
    setSelectedDoctor(doctor);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const recenterMap = () => {
    if (userLocation) {
      setRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <LinearGradient
      colors={['#0A1E40', '#112240', '#1A365D']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <BlurView intensity={20} tint="dark" style={styles.headerBlur}>
            <Text style={styles.headerTitle}>Nearby Eye Specialists</Text>
            <Text style={styles.headerSubtitle}>Find opthamologist near your location</Text>
          </BlurView>
        </View>

        {/* Map */}
        <View style={styles.mapContainer}>
          <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            region={region} 
            onRegionChangeComplete={setRegion}
            customMapStyle={mapStyle}
          >
            {doctorLocations.map((location, index) => (
              <Marker
                key={index}
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                title={location.title}
                description={location.description}
                pinColor="#6C47FF"
                onPress={() => handleMarkerPress(location)}
              />
            ))}

            {userLocation && (
              <Marker
                coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
                pinColor="#4CAF50"
                title="Your Location"
              >
                <View style={styles.userMarker}>
                  <View style={styles.userMarkerDot} />
                </View>
              </Marker>
            )}
          </MapView>

          {/* Map Controls */}
          <View style={styles.mapControls}>
            <TouchableOpacity style={styles.mapButton} onPress={recenterMap}>
              <BlurView intensity={20} tint="dark" style={styles.mapButtonBlur}>
                <Ionicons name="locate" size={24} color="#6C47FF" />
              </BlurView>
            </TouchableOpacity>
          </View>
        </View>

        {/* Selected Doctor Info */}
       {/* Selected Doctor Info */}
{selectedDoctor && (
  <BlurView intensity={30} tint="dark" style={styles.doctorInfoContainer}>
    <View style={styles.doctorInfo}>
      <View style={styles.doctorHeader}>
        <Ionicons name="medical" size={24} color="#6C47FF" />
        <Text style={styles.doctorName}>{selectedDoctor.title}</Text>
      </View>
      <Text style={styles.doctorDescription}>{selectedDoctor.description}</Text>
      
      <View style={styles.actionButtonsRow}>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => {
            const { latitude, longitude } = selectedDoctor;
            const url = Platform.select({
              ios: `maps://app?daddr=${latitude},${longitude}`,
              android: `google.navigation:q=${latitude},${longitude}`,
            }) || `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
            Linking.openURL(url);
          }}
        >
          <LinearGradient
            colors={['#6C47FF', '#5034d0']}
            style={styles.contactButtonGradient}
          >
            <Ionicons name="navigate" size={18} color="white" />
            <Text style={styles.contactButtonText}>Navigate</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => {
            const url = `tel:${selectedDoctor.phone || '03000000000'}`;
            Linking.openURL(url);
          }}
        >
          <LinearGradient
            colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
            style={styles.contactButtonGradient}
          >
            <Ionicons name="call" size={18} color="white" />
            <Text style={styles.contactButtonText}>Call</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => setSelectedDoctor(null)}
        >
          <BlurView intensity={20} tint="dark" style={styles.closeButtonBlur}>
            <Ionicons name="close" size={16} color="white" />
          </BlurView>
        </TouchableOpacity>
      </View>
    </View>
  </BlurView>
)}

        {/* Bottom Controls */}
        <BlurView intensity={20} tint="dark" style={styles.controlsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.controlButton} onPress={handleBack}>
              <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)']}
                style={styles.gradientButton}
              >
                <Ionicons name="arrow-back" size={14} color="white" />
                <Text style={styles.buttonText}>Back</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </BlurView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1E40',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  navigationButton: {
    flex: 1,
    marginRight: 10,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  closeButtonBlur: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    position: 'relative',
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
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  mapContainer: {
    flex: 1,
    margin: 15,
    marginTop: 5,
    marginBottom: 80,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapControls: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
  },
  mapButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  mapButtonBlur: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(76, 175, 80, 0.3)',
    borderWidth: 2,
    borderColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userMarkerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  doctorInfoContainer: {
    position: 'absolute',
    bottom: 100, // Moved up to avoid overlap with map controls
    left: 15,
    right: 15,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    zIndex: 5, // Ensure proper layering
  },
  doctorInfo: {
    padding: 15,
  },
  doctorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  doctorName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  doctorDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginBottom: 15,
  },
  contactButton: {
    alignSelf: 'flex-end',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  contactButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  contactButtonText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 5,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: 'rgba(10, 25, 47, 0.5)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  controlButton: {
    width: '50%',
    height: 46,
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