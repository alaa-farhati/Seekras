import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../context/themeContext';  // Import your ThemeProvider
import { RootStackParamList } from '../types/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();  // Type the navigator

export function RootNavigator() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      // Simulating async loading (e.g., fetching token or checking login status)
      await new Promise(resolve => setTimeout(resolve, 500)); 
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null; // Show splash screen while the app is preparing
  }

  return (
    <ThemeProvider>  
      <NavigationContainer
        onReady={() => {
          SplashScreen.hideAsync(); // Hide splash screen once navigation is ready
        }}
      >
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
         
            <RootStack.Screen name="App" component={AppNavigator} />
      
            <RootStack.Screen name="Auth" component={AuthNavigator} />
          
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}