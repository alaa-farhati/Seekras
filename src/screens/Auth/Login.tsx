// screens/Auth/Login.tsx
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Header from '../../components/Auth/Login/Header';
import LoginForm from '../../components/Auth/Login/FormContainer';
import Footer from '../../components/Auth/Login/Footer';
import { useTheme } from '../../hooks/useTheme';
import { login } from '../../utils/api';
import { LoginStyles } from '../../styles/Auth/Login';


const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNormalLogin = async () => {
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    try {
      setIsLoading(true);
      const loginData = { email, password };
      const response = await login(loginData);
      console.log('Login Successful:', response.user);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={[LoginStyles.container, { backgroundColor: theme.background }]}>
          <Header />
          <LoginForm 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleNormalLogin={handleNormalLogin}
          />
          <Footer navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
