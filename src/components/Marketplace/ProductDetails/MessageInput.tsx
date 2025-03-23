
// File: components/ProductDetails/MessageInput.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from '../../../styles/Marketplace/ProductDetails';
const MessageInput: React.FC = () => {
  return (
    <View style={styles.messageContainer}>
      <Image 
        source={{ uri: 'https://randomuser.me/api/portraits/thumb/men/1.jpg' }} 
        style={styles.userAvatar} 
      />
      <View style={styles.messageInput}>
        <Text style={styles.messagePlaceholder}>is this item still available?</Text>
      </View>
    </View>
  );
};



export default MessageInput;