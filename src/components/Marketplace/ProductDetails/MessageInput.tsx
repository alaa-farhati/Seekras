
// File: components/ProductDetails/MessageInput.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  messagePlaceholder: {
    color: '#65676B',
  },
});

export default MessageInput;