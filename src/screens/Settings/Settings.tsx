// Settings.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation"; // Import RootStackParamList
import { useNavigation } from "@react-navigation/native";

// Use the correct type for useNavigation hook
type SettingsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "App">;
};

const Settings: React.FC<SettingsScreenProps> = () => {
  // Correct use of the useNavigation hook
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      
      {/* Button to navigate to the Login screen in the Auth stack */}
      <Button
        title="Go to Login"
        onPress={() => {
          // Navigate to 'Login' screen in the 'Auth' stack
          navigation.navigate("Auth", { screen: "Login" });
        }}
      />
    </View>
  );
};

export default Settings;