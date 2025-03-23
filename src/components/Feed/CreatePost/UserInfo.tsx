// components/UserInfo.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CreatePostStyles } from "../../../styles/Feed/CreatePost";

interface UserInfoProps {
  avatarUrl: string;
  userName: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ avatarUrl, userName }) => {
  return (
    <View style={CreatePostStyles.userInfoSection}>
      <Image source={{ uri: avatarUrl }} style={CreatePostStyles.userAvatar} />
      <Text style={CreatePostStyles.userName}>{userName}</Text>
      
    </View>
  );
};


export default UserInfo;