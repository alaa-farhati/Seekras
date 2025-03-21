// components/PostContentInput.tsx
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { fonts } from "../../../constants";
import { styles } from "../../../styles/Feed";
interface PostContentInputProps {
  title: string;
  body: string;
  onTitleChange: (text: string) => void;
  onBodyChange: (text: string) => void;
}

const PostContentInput: React.FC<PostContentInputProps> = ({ 
  title, 
  body, 
  onTitleChange, 
  onBodyChange 
}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          placeholderTextColor="#999"
          value={title}
          onChangeText={onTitleChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.bodyInput}
          placeholder="Body text"
          placeholderTextColor="#999"
          multiline
          value={body}
          onChangeText={onBodyChange}
          textAlignVertical="top"
        />
      </View>
    </>
  );
};



export default PostContentInput;