// ChatScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ChatList } from '../../components/Chat/ChatScreenComponents/ChatList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/navigation';
import { chats, onlineFriends } from '../../data/Chat';

interface ChatScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamList>;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ navigation }) => {
  
  
  return (
    <View style={styles.container}>
      <ChatList chats={chats} onlineFriends={onlineFriends} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;