// CompleteProfile.tsx
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, AuthStackParamList, AppStackParamList } from "../../types/navigation";
import CompleteProfileContent from "../../components/Auth-Component/CompleteProfile/CompleteProfileList";

// Type definition
type CompleteProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "CompleteProfile">,
  NativeStackScreenProps<AppStackParamList, 'MainTabs'>
>;

const CompleteProfile: React.FC<CompleteProfileScreenProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <CompleteProfileContent navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

export default CompleteProfile;