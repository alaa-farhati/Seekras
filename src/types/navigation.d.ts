import { NavigatorScreenParams } from '@react-navigation/native';

// Auth Stack Types
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
  CompleteProfile:undefined;
};

// App Stack Types
export type AppStackParamList = {
  MainTabs: undefined;
  Profile: { userId: string };
  Settings: undefined;
  Feed: undefined;
  Marketplace: undefined;
  CreateProduct:undefined;
  CreatePost: undefined;
  Notifications: undefined;
  Chat: undefined;
  ChatDetails:undefined;
  Comments:undefined;
  ProductDetails:{ productId: string };
  CompleteProfile:undefined;
  EditProfile:undefined;
  AddProduct:undefined;
  AddTrip:undefined;
  AddNextTrip:undefined;
  TripDetails:{ tripId: string };
  Weather:undefined;
  
};

// Root Stack Types for Navigation between Auth and App
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;  // Fix using NavigatorScreenParams correctly
  App: NavigatorScreenParams<AppStackParamList>;  // Fix using NavigatorScreenParams correctly
};