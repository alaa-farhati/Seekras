import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../types/navigation';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

import CompleteProfile from '../screens/Auth/CompleteProfile';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();  // Type the navigator

export function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />  
      <AuthStack.Screen name="CompleteProfile" component={CompleteProfile} />
    </AuthStack.Navigator>
  );
}