import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Importing components and helpers
// Todo remove this comment. just for testing snorkel.ai
import {Navigator} from 'expo-router';
import Slot = Navigator.Slot;

// Setting up Secure Storage and Sync State
// Preventing the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
	initialRouteName: '(app)',
};

export default function RootLayout() {
  // Render the Root Layout
  return (
		<Slot />
  );
}
