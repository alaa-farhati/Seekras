import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreatePostScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post</Text>
      {/* You can add input fields or buttons later */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // You can change the background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CreatePostScreen;