import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="user_menu" options={{   headerShown: false}} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="preview" options={{ title: 'Preview' }} />
        <Stack.Screen name="authregister" options={{ headerShown: false }} />
        <Stack.Screen name="gallery" options={{ headerShown: false }} />
        <Stack.Screen name="cropscreen" options={{ headerShown: false}} />
        <Stack.Screen name="map" options={{ headerShown: false}} />
        <Stack.Screen name="camera" options={{ headerShown: false}} />
        <Stack.Screen name="home" options={{ headerShown: false}} />
      </Stack>
  );
}