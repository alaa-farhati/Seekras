import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts, sizes } from '../../../../constants';
import { styles } from '../../../../styles/Chat';
interface ChatItemProps {
  chat: ChatMessage;
  onPress?: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.chatItem, { borderBottomColor: theme.border }]}
      onPress={onPress}
    >
      <Image source={{ uri: chat.sender.avatar }} style={styles.chatAvatar} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text 
            style={[styles.chatName, { color: theme.text, fontFamily: fonts.semiBold, fontSize: sizes.text.regular }]}
          >
            {chat.sender.name}
          </Text>
          <Text 
            style={[styles.chatTime, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.extraSmall }]}
          >
            {chat.time}
          </Text>
        </View>
        <View style={styles.chatMessageContainer}>
          <Text 
            style={[styles.chatMessage, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]} 
            numberOfLines={1}
          >
            {chat.message}
          </Text>
          {chat.unreadCount ? (
            <View style={styles.unreadBadge}>
              <Text style={[styles.unreadText, { fontFamily: fonts.semiBold, fontSize: sizes.text.extraSmall }]}>
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