import { NavigatorScreenParams } from '@react-navigation/native';

// Auth Stack Types
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
};

// App Stack Types
export type AppStackParamList = {
  MainTabs: undefined;
  Profile: { userId: string };
  Settings: undefined;
  Feed: undefined;
  Marketplace: undefined;
  CreatePost: undefined;
  Notifications: undefined;
  Chat: undefined;
  ChatDetails:undefined;
  
};

// Root Stack Types for Navigation between Auth and App
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;  // Fix using NavigatorScreenParams correctly
  App: NavigatorScreenParams<AppStackParamList>;  // Fix using NavigatorScreenParams correctly
};