import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { RootNavigator } from './navigation/RootNavigator';

// Load assets before showing the app
Asset.loadAsync([
  require('./assets/Images/newspaper.png'),
  require('./assets/Images/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

export default function App() {
  return <RootNavigator />;
}
