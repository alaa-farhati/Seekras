// components/Auth/Header.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { LoginStyles } from '../../../styles/Auth/Login';


const Header: React.FC = () => {
  return (
    <View style={LoginStyles.headerContainer}>
      <Text style={LoginStyles.title}>Welcome Back</Text>
      <Text style={LoginStyles.subtitle}>Sign in to continue</Text>
    </View>
  );
};

export default Header;
