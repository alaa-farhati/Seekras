import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AppStackParamList, AuthStackParamList } from "../../types/navigation";
import { CompositeScreenProps } from "@react-navigation/native";
import { fonts, sizes } from "../../constants";
import CustomInput from "../../components/Reusables/CustomInput";
import CustomButton from "../../components/Reusables/CustomButton";
import { useTheme } from "../../hooks/useTheme";
import { LoginBody } from "../../types/user";
import { login } from "../../utils/api";
type LoginScreenProps = CompositeScreenProps<NativeStackScreenProps<AppStackParamList>,NativeStackScreenProps<AuthStackParamList,"Login">>;

const Login :React.FC<LoginScreenProps>= ({navigation}) => {
  const { theme } = useTheme();
  const [email,setEmail] =useState<string>("");
  const [password,setPassword] = useState<string>("");
  const handleNormalLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      const loginData: LoginBody = { email, password };
      const response = await login(loginData);
      
      console.log("Login Successful:", response.user);
  
    } catch (error) {
      alert(error instanceof Error ? error.message : "Login failed");
    }
  };
  return (
    <View style={[styles.container,{backgroundColor:theme.background
    }]}>
      <Text style={[styles.title,{color:theme.text}]}>Login</Text>
      <CustomInput placeholder="Email" value={email} onChangeText={(text:string) => setEmail(text)} containerStyle={styles.input} inputStyle={{color:theme.inputText}} placeholderStyle={{color:"#4C4C4C"}} inputType="login" keyboardType="email-address"/>
      <CustomInput placeholder="Password" value={password} onChangeText={(text:string) => setPassword(text)} containerStyle={styles.input} inputStyle={{color:theme.inputText}} placeholderStyle={{color:"#4C4C4C"}}/>
      <CustomButton text="Login" onPress={handleNormalLogin} style={[styles.loginButton,,{backgroundColor:theme.text}]} />
      <View style={styles.socialButtonsContainer}>
      <CustomButton text=" Google " onPress={handleNormalLogin} icon="logo-google" style={styles.socialButton} size={"medium"}/>
      <CustomButton text="Facebook" onPress={handleNormalLogin} icon="logo-facebook" style={styles.socialButton} size={"medium"}/>
      </View>
      <TouchableOpacity style={styles.linkButton} onPress={()=>navigation.navigate("Signup")}>
        <Text style={styles.linkText}>Dont't have an account?</Text>
        <Text style={styles.linkText}> Register</Text>
      </TouchableOpacity>


    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,//5ater fonts mafihomch 30 size
    fontFamily: fonts.bold,
  },
  input:{
    marginBottom:20,
    width:"80%",
  },
  loginButton:{
    width:"80%",
    alignItems: "center",
    justifyContent:"center",
  },
  socialButtonsContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,

  },
  socialButton:{
    marginHorizontal:15,
    alignItems:"center",
    justifyContent:"center",
  },
  linkButton:{
    marginTop:20,
    marginBottom:20,
    textAlign:"center",
    color:"#4C4C4C",
    flexDirection:"row",
  },
  linkText:{
    fontFamily:fonts.regular,

  }
});