import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import CustomButton from "../../components/Reusables/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, AuthStackParamList } from "../../types/navigation";
import { useTheme } from "../../hooks/useTheme";
import CustomInput from "../../components/Reusables/CustomInput";
import { fonts } from "../../constants";

// Corrected type definition
type SignupScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "Signup">,
  NativeStackScreenProps<RootStackParamList, never>
>;

const Signup: React.FC<SignupScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignup = () => {
    // if (!name.trim()) {
    //   alert("Please enter your name");
    //   return;
    // }
    
    // if (!email.trim()) {
    //   alert("Please enter your email");
    //   return;
    // }
    
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }
    navigation.navigate("Auth", { screen: "CompleteProfile" });
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Signing up with:", name, email, password);
      setIsLoading(false);
      // TODO: Add actual signup logic
      // On success:
      // navigation.navigate("App", {screen: "MainTabs"});
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
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <View style={styles.headerContainer}>
            <Text style={[styles.title, { color: theme.text }]}>Create Account</Text>
            <Text style={[styles.subtitle, { color: theme.text }]}>
              Sign up to get started
            </Text>
          </View>

          <View style={styles.formContainer}>
            <CustomInput 
              placeholder="Full Name" 
              value={name} 
              onChangeText={(text: string) => setName(text)} 
              containerStyle={styles.input} 
              inputStyle={{ color: theme.inputText }} 
              placeholderStyle={{ color: "#4C4C4C" }}
              keyboardType="default"
            />

            <CustomInput 
              placeholder="Email Address" 
              value={email} 
              onChangeText={(text: string) => setEmail(text)} 
              containerStyle={styles.input} 
              inputStyle={{ color: theme.inputText }} 
              placeholderStyle={{ color: "#4C4C4C" }} 
              inputType="login" 
              keyboardType="email-address"
            />
            
            <CustomInput 
              placeholder="Password" 
              value={password} 
              onChangeText={(text: string) => setPassword(text)} 
              containerStyle={styles.input} 
              inputStyle={{ color: theme.inputText }} 
              placeholderStyle={{ color: "#4C4C4C" }}
              secureTextEntry
            />
            
            <CustomInput 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChangeText={(text: string) => setConfirmPassword(text)} 
              containerStyle={styles.input} 
              inputStyle={{ color: theme.inputText }} 
              placeholderStyle={{ color: "#4C4C4C" }}
              secureTextEntry
            />

            <CustomButton 
              text="Create Account" 
              style={[styles.signupButton, { backgroundColor: theme.text }]} 
              textStyle={[styles.signupButtonText, { color: theme.background }]}
              onPress={handleSignup} 
              // isLoading={isLoading}
            />
          </View>

          <View style={styles.termsContainer}>
            <Text style={[styles.termsText, { color: theme.text }]}>
              By signing up, you agree to our{" "}
              <Text style={[styles.termsLink, { color: theme.accent }]}>
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text style={[styles.termsLink, { color: theme.accent }]}>
                Privacy Policy
              </Text>
            </Text>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity 
              style={styles.loginLink} 
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.linkText, { color: theme.text }]}>
                Already have an account?
              </Text>
              <Text style={[styles.linkTextBold, { color: theme.accent }]}> Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.skipButton} 
              onPress={() => navigation.navigate("App", { screen: "MainTabs" })}
            >
              <Text style={[styles.skipText, { color: theme.text }]}>
                Skip for now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  headerContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.bold,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.regular,
    opacity: 0.8,
  },
  formContainer: {
    width: "100%",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
    width: "100%",
  },
  signupButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 16,
  },
  signupButtonText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: "#FFFFFF",
  },
  termsContainer: {
    marginBottom: 32,
    paddingHorizontal: 8,
  },
  termsText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  termsLink: {
    fontFamily: fonts.medium,
  },
  footerContainer: {
    alignItems: "center",
  },
  loginLink: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  linkText: {
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  linkTextBold: {
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  skipButton: {
    padding: 8,
  },
  skipText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    opacity: 0.7,
  },
});