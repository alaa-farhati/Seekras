import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts, sizes } from '../../../../constants';
import ChatItem from './ChatItem';
import { ChatScreenStyles } from '../../../../styles/Chat-Styles/ChatScreen';

interface ConversationListProps {
  conversations: ChatMessage[];
  onSelectConversation?: (chat: ChatMessage) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({ conversations, onSelectConversation }) => {
  const { theme } = useTheme();

  return (
    <View style={ChatScreenStyles.chatListContainer}>
      <Text style={[ChatScreenStyles.sectionTitle, { color: theme.text, fontFamily: fonts.semiBold, fontSize: sizes.text.small }]}>
        Conversations
      </Text>
      <ScrollView style={ChatScreenStyles.chatList}>
        {conversations.map((chat) => (
          <ChatItem 
            key={chat.id} 
            chat={chat} 
            onPress={() => {
              if (onSelectConversation) {
                onSelectConversation(chat); // Check if onSelectConversation is defined
              }
            }} 
          />
        ))}
      </ScrollView>
    </View>
  );
};



export default ConversationList;
