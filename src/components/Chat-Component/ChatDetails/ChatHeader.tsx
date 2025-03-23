import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';
import { ChatDetailsStyles } from '../../../styles/Chat-Styles/ChatDetails';



const ChatHeader: React.FC<ChatHeaderProps> = ({
  navigation,
  emp_name,
  online,
  profile_image_id,
  onPressProfileImage,
}) => {
  return (
    <View style={ChatDetailsStyles.header}>
      <TouchableOpacity
        style={ChatDetailsStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity
        style={ChatDetailsStyles.profileContainer}
        onPress={onPressProfileImage}
      >

        <Image
          source={{ uri: profile_image_id }}
          style={ChatDetailsStyles.profileImage}
        />

      </TouchableOpacity>

      <View style={ChatDetailsStyles.userInfo}>
        <Text style={ChatDetailsStyles.userName}>{emp_name}</Text>
        <View style={ChatDetailsStyles.statusContainer}>
          <View style={[ChatDetailsStyles.statusDot, { backgroundColor: online ? '#4CAF50' : '#9E9E9E' }]} />
          <Text style={ChatDetailsStyles.statusText}>{online ? 'Online' : 'Offline'}</Text>
        </View>
      </View>

      <TouchableOpacity style={ChatDetailsStyles.iconButton}>
        <Icon name="call-outline" size={22} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={ChatDetailsStyles.iconButton}>
        <Icon name="videocam-outline" size={22} color="#333" />
      </TouchableOpacity>
    </View>
  );
};



export default ChatHeader;