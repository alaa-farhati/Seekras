import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { CompositeScreenProps, useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/Reusables/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {RootStackParamList, AuthStackParamList } from "../../types/navigation";
import { useTheme } from "../../hooks/useTheme";
import CustomInput from "../../components/Reusables/CustomInput";

type SignupScreenProps = CompositeScreenProps<NativeStackScreenProps<RootStackParamList>,NativeStackScreenProps<AuthStackParamList,"Signup">>;

const Signup:React.FC<SignupScreenProps> = ({navigation}) => {
    const { theme } = useTheme();
  const [name,setName]=useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signing up with:", email, password);
    // TODO: Add signup logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <CustomInput placeholder="Name" value={name} onChangeText={(text:string) => setName(text)} containerStyle={styles.input} inputStyle={{color:theme.inputText}} placeholderStyle={{color:"#4C4C4C"}} inputType="login" keyboardType="email-address"/>

      <CustomInput placeholder="Email" value={email} onChangeText={(text:string) => setEmail(text)} containerStyle={styles.input} inputStyle={{color:theme.inputText}} placeholderStyle={{color:"#4C4C4C"}} inputType="login" keyboardType="email-address"/>
      <CustomInput placeholder="Password" value={password} onChangeText={(text:string) => setPassword(text)} containerStyle={styles.input} inputStyle={{color:theme.inputText}} placeholderStyle={{color:"#4C4C4C"}}/>
      <CustomInput placeholder="Confirm Password" value={confirmPassword} onChangeText={(text:string) => setConfirmPassword(text)} containerStyle={styles.input} inputStyle={{color:theme.inputText}} placeholderStyle={{color:"#4C4C4C"}}/>
      <CustomButton text="Sign Up" style={[styles.SignUpButton,,{backgroundColor:theme.text}]} onPress={handleSignup} size={"medium"}/>

      <TouchableOpacity onPress={()=>navigation.push("Login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("App",{screen:"MainTabs"})}}>
        <Text style={styles.linkText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginBottom:20,
    width:"80%",
  },
  SignUpButton: {
    width:"80%",
    alignItems: "center",
    justifyContent:"center",
  },
  linkText: {
    marginTop: 15,
    color: "#007bff",
  },
});