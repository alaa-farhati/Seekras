// components/Auth/LoginForm.tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CustomInput from '../../Reusables-Component/CustomInput';
import CustomButton from '../../Reusables-Component/CustomButton';
import { LoginStyles } from '../../../styles/Auth-Styles/Login';


interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleNormalLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleNormalLogin
}) => {
  return (
    <View style={LoginStyles.formContainer}>
      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        containerStyle={LoginStyles.input}
        inputType="login"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        containerStyle={LoginStyles.input}
        secureTextEntry
      />
      <TouchableOpacity style={LoginStyles.forgotPasswordButton}>
        <Text style={LoginStyles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <CustomButton
        text="Sign In"
        onPress={handleNormalLogin}
        style={LoginStyles.loginButton}
        icon="person"
      />
    </View>
  );
};

export default LoginForm;
