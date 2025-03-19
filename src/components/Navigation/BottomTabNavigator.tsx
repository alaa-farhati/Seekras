import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../../hooks/useTheme';
import Feed from '../../screens/Feed/Feed';
import Marketplace from '../../screens/Marketplace/Marketplace';
import Chat from '../../screens/Chat/ChatScreen';
import Notifications from '../../screens/Profile/Notifications';
import CreatePostScreen from '../../screens/Feed/CreatePost';
import { Icon ,IconName} from '../../assets/Icons/Index';
import { AppStackParamList } from '../../types/navigation';
import Header from './Header';
import { View, StyleSheet } from 'react-native';
import TripsScreen from '../../screens/Trips/Trips';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator<AppStackParamList>();



const BottomTabNavigator = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const screenConfig: {
    name: keyof AppStackParamList;
    label: string;
    component: React.ComponentType<any>;
    icon: IconName;
    hideHeader?: boolean; // Flag for screens without header
    leftText?: string;
    leftClick?: () => void;
  }[] = [
    {
      name: 'Feed',
      label: 'Home',
      component: Feed,
      icon: 'home-outline',
      hideHeader: true, // Feed screen has its own header
    },
    {
      name: 'Marketplace',
      label: 'Shop',
      component: Marketplace,
      icon: 'cart-outline',
      hideHeader:false,
      leftText: 'Create',
      leftClick: () =>  navigation.navigate('CreateProduct' as never),
    },
    {
      name: 'CreatePost',
      label: 'Post',
      component: CreatePostScreen,
      icon: 'add-outline',
      hideHeader:false
  
    },
    {
      name: 'Chat',
      label: 'Messages',
      component: Chat,
      icon: 'chatbubble-outline',
      hideHeader:false
  
    },
    {
      name: 'AddTrip',
      label: 'Add trip',
      component: TripsScreen,
      icon: "compass-outline",
      hideHeader:false,
      leftClick: () =>  navigation.navigate('AddNextTrip' as never),
      leftText: 'Add Trip',
  
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.primary },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.text,
      }}
    >
      {screenConfig.map(({ name, label, component, icon, hideHeader,leftClick,leftText }) => (
       <Tab.Screen
       key={name}
       name={name as keyof AppStackParamList}
       component={component}
       options={{
         title: label,
         headerShown: true, 
         header: () => (
           <Header
             title={label}
             leftIconName="chevron-back"
             rightIconName="ellipsis-vertical"
             onLeftPress={() => console.log("Back pressed")}
             leftText={leftText}
             leftClick={leftClick}
             isFeed={hideHeader}
           />
         ),
         tabBarIcon: ({ color, size }) => 
           name === 'CreatePost' ? (
             <View style={[styles.floatingButton,{backgroundColor:theme.primary}]}>
               <Icon name={icon} size={30} color={color} />
             </View>
           ) : (
             <Icon name={icon} size={size} color={color} />
           ),
         tabBarLabelStyle: name === 'CreatePost' ? { fontSize:10,top:5 } : {}, // Hide label for Create Post
       }}
     />
     
      ))}
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    top: -20, // Adjust to float above the tab bar
    backgroundColor: '#fff', // White background for contrast
    borderRadius: 40,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D3D3D3', // Matches tab bar color
  },
});


export default BottomTabNavigator;
