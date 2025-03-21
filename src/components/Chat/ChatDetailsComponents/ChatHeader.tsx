import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';
import { styles } from '../../../styles/Chat';


const ChatHeader: React.FC<ChatHeaderProps> = ({
  navigation,
  emp_name,
  online,
  profile_image_id,
  onPressProfileImage,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.profileContainer}
        onPress={onPressProfileImage}
      >

        <Image
          source={{ uri: profile_image_id }}
          style={styles.profileImage}
        />

      </TouchableOpacity>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{emp_name}</Text>
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, { backgroundColor: online ? '#4CAF50' : '#9E9E9E' }]} />
          <Text style={styles.statusText}>{online ? 'Online' : 'Offline'}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.iconButton}>
        <Icon name="call-outline" size={22} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Icon name="videocam-outline" size={22} color="#333" />
      </TouchableOpacity>
    </View>
  );
};



export default ChatHeader;