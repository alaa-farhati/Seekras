import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

const RootStack = createNativeStackNavigator();

export function RootNavigator() {
  
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      // Simulating any async loading before showing the app
      await new Promise(resolve => setTimeout(resolve, 500)); 
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null; // Keep the splash screen until the app is ready
  }

  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hideAsync(); // Hide splash screen once navigation is ready
      }}
    >
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {true ? (
          <RootStack.Screen name="App" component={AppNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
