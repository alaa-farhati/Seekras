// components/Auth/Header.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { SignupStyles } from '../../../styles/Auth-Styles/Signup';

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <View style={SignupStyles.headerContainer}>
      <Text style={[SignupStyles.title, { color: theme.text }]}>Create Account</Text>
      <Text style={[SignupStyles.subtitle, { color: theme.text }]}>
        Sign up to get started
      </Text>
    </View>
  );
};

export default Header;
