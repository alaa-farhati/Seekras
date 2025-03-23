
// Updated Signup.tsx
import React, { useState } from "react";
import { 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, AuthStackParamList, AppStackParamList } from "../../types/navigation";
import { useTheme } from "../../hooks/useTheme";

import Header from "../../components/Auth-Component/Signup/Header";
import FormContainer from "../../components/Auth-Component/Signup/FormContainer";
import Footer from "../../components/Auth-Component/Signup/Footer";
import { SignupStyles } from "../../styles/Auth-Styles/Signup";

// Corrected type definition
type SignupScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "Signup">,
  NativeStackScreenProps<RootStackParamList, 'App'>
>;

const Signup: React.FC<SignupScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignup = () => {
    navigation.navigate("Auth", { screen: "CompleteProfile" });
    setIsLoading(true);
    setTimeout(() => {
      console.log("Signing up with:", name, email, password);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[SignupStyles.container, { backgroundColor: theme.background }]}>
          <Header/>
          <FormContainer 
            theme={theme}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handleSignup={handleSignup}
          />
          <Footer theme={theme} navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;