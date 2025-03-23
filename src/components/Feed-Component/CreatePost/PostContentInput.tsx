// components/PostContentInput.tsx
import React from "react";
import { View, TextInput } from "react-native";
import { CreatePostStyles } from "../../../styles/Feed-Styles/CreatePost";
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
      <View style={CreatePostStyles.inputContainer}>
        <TextInput
          style={CreatePostStyles.titleInput}
          placeholder="Title"
          placeholderTextColor="#999"
          value={title}
          onChangeText={onTitleChange}
        />
      </View>
      <View style={CreatePostStyles.inputContainer}>
        <TextInput
          style={CreatePostStyles.bodyInput}
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