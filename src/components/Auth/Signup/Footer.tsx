// Footer.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, AuthStackParamList } from "../../../types/navigation";
import { SignupStyles } from "../../../styles/Auth/Signup";

interface FooterProps {
  theme: Theme;
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthStackParamList, "Signup">,
    NativeStackNavigationProp<RootStackParamList>
  >;
}

const Footer: React.FC<FooterProps> = ({ theme, navigation }) => {
  return (
    <View style={SignupStyles.footerContainer}>
      <TouchableOpacity 
        style={SignupStyles.loginLink} 
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[SignupStyles.linkText, { color: theme.text }]}>
          Already have an account?
        </Text>
        <Text style={[SignupStyles.linkTextBold, { color: theme.accent }]}> Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={SignupStyles.skipButton} 
        onPress={() => navigation.navigate("App", { screen: "MainTabs" })}
      >
        <Text style={[SignupStyles.skipText, { color: theme.text }]}>
          Skip for now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
