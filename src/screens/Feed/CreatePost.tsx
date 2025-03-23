// CreatePostScreen.tsx
import React from "react";
import { 
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../types/navigation";
import { CreatePostStyles } from "../../styles/Feed-Styles/CreatePost";
import CreatePostContent from "../../components/Feed-Component/CreatePost/CreatePostList";

type CreatePostScreenProps = NativeStackScreenProps<AppStackParamList, "CreatePost">;

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation, route }) => {
  // You could extract user info from route.params if needed
  // const { userId, userName, userProfile } = route.params || {};

  return (
    <KeyboardAvoidingView 
      style={CreatePostStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <CreatePostContent navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

export default CreatePostScreen;