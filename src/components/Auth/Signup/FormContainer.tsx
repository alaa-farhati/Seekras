
// FormContainer.tsx
import React from "react";
import { View, Text } from "react-native";
import CustomInput from "../../Reusables/CustomInput";
import CustomButton from "../../Reusables/CustomButton";
import { SignupStyles } from "../../../styles/Auth/Signup";



interface FormContainerProps {
  theme: Theme;
  name: string;
  setName: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  confirmPassword: string;
  setConfirmPassword: (text: string) => void;
  handleSignup: () => void;
}

const FormContainer: React.FC<FormContainerProps> = ({
  theme,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleSignup
}) => {
  return (
    <View style={SignupStyles.formContainer}>
      <CustomInput 
        placeholder="Full Name" 
        value={name} 
        onChangeText={(text: string) => setName(text)} 
        containerStyle={SignupStyles.input} 
        inputStyle={{ color: theme.inputText }} 
        placeholderStyle={{ color: "#4C4C4C" }}
        keyboardType="default"
      />

      <CustomInput 
        placeholder="Email Address" 
        value={email} 
        onChangeText={(text: string) => setEmail(text)} 
        containerStyle={SignupStyles.input} 
        inputStyle={{ color: theme.inputText }} 
        placeholderStyle={{ color: "#4C4C4C" }} 
        inputType="login" 
        keyboardType="email-address"
      />
      
      <CustomInput 
        placeholder="Password" 
        value={password} 
        onChangeText={(text: string) => setPassword(text)} 
        containerStyle={SignupStyles.input} 
        inputStyle={{ color: theme.inputText }} 
        placeholderStyle={{ color: "#4C4C4C" }}
        secureTextEntry
      />
      
      <CustomInput 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChangeText={(text: string) => setConfirmPassword(text)} 
        containerStyle={SignupStyles.input} 
        inputStyle={{ color: theme.inputText }} 
        placeholderStyle={{ color: "#4C4C4C" }}
        secureTextEntry
      />

      <CustomButton 
        text="Create Account" 
        style={[SignupStyles.signupButton, { backgroundColor: theme.text }]} 
        textStyle={[SignupStyles.signupButtonText, { color: theme.background }]}
        onPress={handleSignup} 
      />

      <View style={SignupStyles.termsContainer}>
        <Text style={[SignupStyles.termsText, { color: theme.text }]}>
          By signing up, you agree to our{" "}
          <Text style={[SignupStyles.termsLink, { color: theme.accent }]}>
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text style={[SignupStyles.termsLink, { color: theme.accent }]}>
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default FormContainer;