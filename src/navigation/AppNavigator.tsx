import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabs } from './MainTabs';
import Profile from '../screens/Profile/Profile';
import Settings from '../screens/Settings/Settings';
import { Text } from 'react-native';

const AppStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen 
        name="Settings" 
        component={Settings} 
        options={({ navigation }) => ({
          presentation: "modal",
          headerRight: () => <Text onPress={navigation.goBack}>Close</Text>,
        })} 
      />
    </AppStack.Navigator>
  );
}
