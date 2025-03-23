import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts, sizes } from '../../../../constants';
import ChatItem from './ChatItem';

interface ConversationListProps {
  conversations: ChatMessage[];
  onSelectConversation?: (chat: ChatMessage) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({ conversations, onSelectConversation }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.chatListContainer}>
      <Text style={[styles.sectionTitle, { color: theme.text, fontFamily: fonts.semiBold, fontSize: sizes.text.small }]}>
        Conversations
      </Text>
      <ScrollView style={styles.chatList}>
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

const styles = StyleSheet.create({
  chatListContainer: {
    flex: 1,
    marginTop: 10,
  },
  sectionTitle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  chatList: {
    flex: 1,
  },
});

export default ConversationList;
