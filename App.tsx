import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import { Navigation } from './src/navigation';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}

export default function App() {
  if (!publishableKey) {
    return (
      <SafeAreaProvider>
        <StatusBar style="dark" />
      </SafeAreaProvider>
    );
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <RootLayoutNav />
    </ClerkProvider>
  );
}
