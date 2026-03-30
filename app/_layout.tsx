import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // <AuthProvider> Wrap your context here later
    <Stack screenOptions={{ headerShown: false }}>
      {/* This group handles Login/Register */}
      <Stack.Screen name="(auth)" />

      {/* This group handles the Bottom Tabs */}
      <Stack.Screen name="(tabs)" />

      {/* Use 'modal' presentation for things like "Compose Post" */}
      <Stack.Screen name="messaging/[chatId]" options={{ presentation: 'modal' }} />
    </Stack>
    // </AuthProvider>
  );
}