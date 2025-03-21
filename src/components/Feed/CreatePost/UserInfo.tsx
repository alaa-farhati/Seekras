// components/UserInfo.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { fonts } from "../../../constants";
import { styles } from "../../../styles/Feed";
interface UserInfoProps {
  avatarUrl: string;
  userName: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ avatarUrl, userName }) => {
  return (
    <View style={styles.userInfoSection}>
      <Image source={{ uri: avatarUrl }} style={styles.userAvatar} />
      <Text style={styles.userName}>{userName}</Text>
      
    </View>
  );
};


export default UserInfo;