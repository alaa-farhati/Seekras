import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';


// Components
import SearchHeader from './Header/SearchHeader';
import OnlineFriendsList from './Friends/OnlineFriendsList';
import ConversationList from './Conversations/ConversationList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../types/navigation';
import { ChatScreenStyles } from '../../../styles/Chat-Styles/ChatScreen';

interface ChatListProps {
  chats: ChatMessage[];
  onlineFriends?: OnlineFriend[];
  navigation: NativeStackNavigationProp<AppStackParamList>;
}

export const ChatList: React.FC<ChatListProps> = ({ chats, onlineFriends = [], navigation }) => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter chats based on the search query
  const filteredChats = chats.filter(chat => 
    chat.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    chat.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle conversation selection
  const handleSelectConversation = (chat: ChatMessage) => {
    navigation.navigate('ChatDetails'); // Pass any relevant data
  };

  // Handle friend selection
  const handleSelectFriend = (friend: OnlineFriend) => {
    navigation.navigate("ChatDetails"); // Pass friend data if needed
  };

  return (
    <View style={[ChatScreenStyles.container, { backgroundColor: theme.background }]}>
      {/* Fixed Header */}
     
      
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={ChatScreenStyles.scrollContainer} showsVerticalScrollIndicator={false}>
      <SearchHeader 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onPressAddGroup={() => console.log('Create group')}
      />
        <OnlineFriendsList 
          friends={onlineFriends} 
          onSelectFriend={handleSelectFriend}
        />
        
        <ConversationList 
          conversations={filteredChats}
          onSelectConversation={handleSelectConversation}
        />
      </ScrollView>
    </View>
  );
};


export default ChatList;
