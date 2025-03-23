import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts, sizes } from '../../../../constants';
import { ChatScreenStyles } from '../../../../styles/Chat-Styles/ChatScreen';


interface ChatItemProps {
  chat: ChatMessage;
  onPress?: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      style={[ChatScreenStyles.chatItem, { borderBottomColor: theme.border }]}
      onPress={onPress}
    >
      <Image source={{ uri: chat.sender.avatar }} style={ChatScreenStyles.chatAvatar} />
      <View style={ChatScreenStyles.chatContent}>
        <View style={ChatScreenStyles.chatHeader}>
          <Text 
            style={[ChatScreenStyles.chatName, { color: theme.text, fontFamily: fonts.semiBold, fontSize: sizes.text.regular }]}
          >
            {chat.sender.name}
          </Text>
          <Text 
            style={[ChatScreenStyles.chatTime, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.extraSmall }]}
          >
            {chat.time}
          </Text>
        </View>
        <View style={ChatScreenStyles.chatMessageContainer}>
          <Text 
            style={[ChatScreenStyles.chatMessage, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]} 
            numberOfLines={1}
          >
            {chat.message}
          </Text>
          {chat.unreadCount ? (
            <View style={ChatScreenStyles.unreadBadge}>
              <Text style={[ChatScreenStyles.unreadText, { fontFamily: fonts.semiBold, fontSize: sizes.text.extraSmall }]}>
                {chat.unreadCount}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default ChatItem;