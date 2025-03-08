import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList, RootStackParamList } from "../../types/navigation";

// Explicitly type the props for CreatePostScreen
type CreatePostScreenProps = NativeStackScreenProps<AppStackParamList, "CreatePost">;

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {


  

  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
  },
});

export default CreatePostScreen;