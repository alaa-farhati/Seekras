import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../types/navigation';
import MainTabs from './MainTabs';
import Profile from '../screens/Profile/Profile';

import Settings from '../screens/Settings/Settings';
import ChatDetails from '../screens/Chat/ChatDetails';
import ProductDetailsScreen from '../screens/Marketplace/ProductDetails';
import Notifications from '../screens/Profile/Notifications';
import AddNewTripScreen from '../screens/Trips/AddNewTrip';
import TripDetails from '../screens/Trips/TripDetails';
import WeatherScreen from '../screens/Trips/Weather';
import CreateProductScreen from '../screens/Marketplace/CreateProduct';


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
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false, // Hide header for Settings screen
        }}
      />
       <AppStack.Screen
        name='AddNextTrip'
        component={AddNewTripScreen}
        options={{
          headerShown: false, // Hide header for Settings screen
        }}
      />
       
       <AppStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerShown: false, // Hide header for Settings screen
          presentation:'modal'
        }}
      />
       <AppStack.Screen
        name="CreateProduct"
        component={CreateProductScreen}
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
        <AppStack.Screen
        name="TripDetails"
        component={TripDetails}
        options={{
          headerShown: false, // Hide header for Settings screen
        }}
      />
        <AppStack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          headerShown: false, // Hide header for Settings screen
        }}
      />
    </AppStack.Navigator>
  );
}
