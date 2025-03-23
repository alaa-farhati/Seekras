// components/Auth/Footer.tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { LoginStyles } from '../../../styles/Auth-Styles/Login';
import CustomButton from '../../Reusables-Component/CustomButton'; // Assuming the CustomButton component is used for Google and Facebook buttons

const Footer: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={LoginStyles.footerContainer}>
     <View style={LoginStyles.dividerContainer}>
            <View style={[LoginStyles.divider,]} />
            <Text style={[LoginStyles.dividerText,]}>
              Or continue with
            </Text>
            <View style={[LoginStyles.divider]} />
          </View>
      <View style={LoginStyles.socialButtonsContainer}>
        <CustomButton
          text="Google"
          onPress={() => {}}
          icon="logo-google"
          style={[LoginStyles.socialButton]}
          textStyle={{ color: 'white' }}
          size="medium"
        />
        <CustomButton
          text="Facebook"
          onPress={() => {}}
          icon="logo-facebook"
          style={[LoginStyles.socialButton, { backgroundColor: '#3b5998' }]} // Optional: Facebook blue color
          textStyle={{ color: 'white' }}
          size="medium"
        />
         
      </View>
     
      <View style={LoginStyles.footerContainer}>
            <TouchableOpacity 
              style={LoginStyles.linkButton} 
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={[LoginStyles.linkText]}>
                Don't have an account?
              </Text>
              <Text style={[LoginStyles.linkTextBold]}> Register</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

export default Footer;
