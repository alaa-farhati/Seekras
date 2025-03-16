import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';

interface ChatHeaderProps {
  navigation: any;
  emp_name: string;
  online: boolean;
  profile_image_id?: string;
  onPressProfileImage: () => void;
}

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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  backButton: {
    padding: 8,
  },
  profileContainer: {
    marginLeft: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#757575',
  },
  iconButton: {
    padding: 8,
  },
});

export default ChatHeader;