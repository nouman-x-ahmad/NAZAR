import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="user_menu" options={{ title: 'USER MENU' }} />
        <Stack.Screen name="login" options={{ title: 'USER LOGIN' }} />
        <Stack.Screen name="preview" options={{ title: 'Preview' }} />
        <Stack.Screen name="authregister" options={{ title: 'register' }} />
        <Stack.Screen name="gallery" options={{ title: 'Gallery' }} />
      </Stack>
    </NavigationContainer>
  );
}