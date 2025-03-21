import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import { AppStackParamList, AuthStackParamList } from "../../types/navigation";
import { CompositeScreenProps } from "@react-navigation/native";
import CustomInput from "../../components/Reusables/CustomInput";
import CustomButton from "../../components/Reusables/CustomButton";
import { useTheme } from "../../hooks/useTheme";
import { login } from "../../utils/api";
import { styles } from "../../styles/Auth";


// Corrected type definition
type LoginScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "Login">,
  NativeStackScreenProps<AppStackParamList, never>
>;

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNormalLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      setIsLoading(true);
      const loginData: LoginBody = { email, password };
      const response = await login(loginData);
      
      console.log("Login Successful:", response.user);
  
    } catch (error) {
      alert(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
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
            <Text style={[styles.title, { color: theme.text }]}>Welcome Back</Text>
            <Text style={[styles.subtitle, { color: theme.text }]}>
              Sign in to continue
            </Text>
          </View>

          <View style={styles.formContainer}>
            <CustomInput
              placeholder="Email"
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

            <TouchableOpacity 
              style={styles.forgotPasswordButton}
              // onPress={() => navigation.navigate("ForgotPassword")
                
              // }
            >
              <Text style={[styles.forgotPasswordText, { color: theme.accent }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <CustomButton
              text="Sign In"
              onPress={handleNormalLogin}
              style={[styles.loginButton, { backgroundColor: theme.text }]}
              icon="person"
            />
          </View>

          <View style={styles.dividerContainer}>
            <View style={[styles.divider, { backgroundColor: theme.border }]} />
            <Text style={[styles.dividerText, { color: theme.text }]}>
              Or continue with
            </Text>
            <View style={[styles.divider, { backgroundColor: theme.border }]} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <CustomButton
              text="Google"
              onPress={handleNormalLogin}
              icon="logo-google"
              style={[styles.socialButton, { backgroundColor: theme.text }]}
              textStyle={{ color: theme.background }}
              size={"medium"}
            />
            <CustomButton
              text="Facebook"
              onPress={handleNormalLogin}
              icon="logo-facebook"
              style={[styles.socialButton, { backgroundColor:theme.accent }]}
              textStyle={{ color: theme.background }}
              size={"medium"}
            />
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity 
              style={styles.linkButton} 
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={[styles.linkText, { color: theme.text }]}>
                Don't have an account?
              </Text>
              <Text style={[styles.linkTextBold, { color: theme.accent }]}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

