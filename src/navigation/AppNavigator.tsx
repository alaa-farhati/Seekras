import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../types/navigation';
import MainTabs from './MainTabs';
import Profile from '../screens/Profile/Profile';
import Feed from '../screens/Feed/Feed';
import Settings from '../screens/Settings/Settings';
import ChatDetails from '../screens/Chat/ChatDetails';
import CommentsScreen from '../screens/Feed/Comments';


const AppStack = createNativeStackNavigator<AppStackParamList>();  // Type the navigator

export function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }} // Hide header for MainTabs
      />
      <AppStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }} // Hide header for Profile screen
      />
      <AppStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false, // Hide header for Settings screen
        }}
      />
        <AppStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: false, // Hide header for Settings screen
          presentation:'modal'
        }}
      />
       <AppStack.Screen
        name="ChatDetails"
        component={ChatDetails}
        options={{
          headerShown: false, // Hide header for Settings screen
        }}
      />
    </AppStack.Navigator>
  );
}
