import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../types/navigation";

// Explicitly type the props for CreatePostScreen
type CreatePostScreenProps = NativeStackScreenProps<AppStackParamList, "CreatePost">;

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
  const [destination, setDestination] = useState("");
  const [postContent, setPostContent] = useState("");

  const handlePost = () => {
    // Handle post submission logic here
    console.log("Post submitted:", { destination, postContent });
    navigation.goBack(); // Navigate back after posting
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture} />
        <Text style={styles.username}>User Name</Text>
      </View>

      <Text style={styles.label}>Destination</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your destination"
        value={destination}
        onChangeText={setDestination}
      />

      <Text style={styles.label}>Post Content</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write something..."
        multiline
        value={postContent}
        onChangeText={setPostContent}
      />

      <Button title="Add Photos" onPress={() => {/* Handle adding photos */}} />
      <Button title="Tag People" onPress={() => {/* Handle tagging people */}} />

      <Button title="Post" onPress={handlePost} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
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