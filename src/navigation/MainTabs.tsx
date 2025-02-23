import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Feed from '../screens/Feed/Feed';
import Marketplace from '../screens/Marketplace/Marketplace';
import bell from '../assets/Images/bell.png';
import newspaper from '../assets/Images/newspaper.png';

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Feed" 
        component={Feed} 
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Image source={newspaper} tintColor={color} style={{ width: size, height: size }} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Marketplace" 
        component={Marketplace} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={bell} tintColor={color} style={{ width: size, height: size }} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
