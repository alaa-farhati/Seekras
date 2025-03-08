import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Components
import ChatHeader from '../../components/Chat/ChatDetailsComponents/ChatHeader';
import MessageBubble from '../../components/Chat/ChatDetailsComponents/MessageBubble';


// Types
import { AppStackParamList } from '../../types/navigation';
import { ChatMessage } from '../../types/chat';

type ChatDetailsScreenProps = NativeStackScreenProps<AppStackParamList, "ChatDetails">;

const ChatDetailsScreen = ({ navigation }: ChatDetailsScreenProps) => {
  const user_id = '1234'; // Example user ID
  const first_name = 'John';
  const last_name = 'Doe';
  const profile_image_id = "https://randomuser.me/api/portraits/men/53.jpg";

  // Dummy Messages
  const dummyMessages: ChatMessage[] = [
    {
      id: '1',
      message: 'Hey, how are you doing?',
      sender_id: '1002',
      type: 'received',
      time: '09:30 AM',
      sender: {
        id: '1002',
        name: `${first_name} ${last_name}`,
        avatar: profile_image_id, // Optional avatar
      },
    },
    {
      id: '2',
      message: 'I\'m good, thanks for asking! How about you?',
      sender_id: user_id,
      type: 'sent',
      time: '09:32 AM',
      is_read: true,
      sender: {
        id: user_id,
        name: `${first_name} ${last_name}`,
        avatar: profile_image_id, // Optional avatar
      },
    },
  ];

  // States
  const [messages, setMessages] = useState<ChatMessage[]>(dummyMessages);
  

  // Render message
  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <View style={styles.messageWrapper}>
      <MessageBubble
        type={item.type as "sent" | "received"} // ✅ Explicitly cast type
        text={item.message}
        time={item.time}
        status={item.type === 'sent' ? (item.is_read ? 'read' : 'unread') : undefined}
        sender={item.type === 'received' ? item.sender.name : undefined}
        avatar={item.type === 'received' ? item.sender.avatar : undefined}
        onDelete={item.type === 'sent' ? () => console.log(`Delete message ${item.id}`) : undefined}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ChatHeader
        navigation={navigation}
        emp_name={`${first_name} ${last_name}`}
        online={true}
        profile_image_id={profile_image_id}
        onPressProfileImage={() => console.log('Profile Pressed')}
      />

      <FlatList
        data={[...messages].reverse()} // Ensure latest messages appear at the bottom
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        inverted
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageWrapper: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  listContent: {
    paddingBottom: 10,
  },
});

export default ChatDetailsScreen;
