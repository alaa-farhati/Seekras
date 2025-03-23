import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts, sizes } from '../../../../constants';

import OnlineFriendItem from './OnlineFriendsItem';
import { ChatScreenStyles } from '../../../../styles/Chat-Styles/ChatScreen';


const OnlineFriendsList: React.FC<OnlineFriendsListProps> = ({ friends, onSelectFriend }) => {
  const { theme } = useTheme();

  if (friends.length === 0) {
    return null;
  }

  return (
    <View style={ChatScreenStyles.onlineFriendsContainer}>
      <Text style={[ChatScreenStyles.sectionTitle, { color: theme.text, fontFamily: fonts.semiBold, fontSize: sizes.text.small }]}>
        Online Friends
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={friends}
        keyExtractor={(item) => item.id}
        contentContainerStyle={ChatScreenStyles.onlineFriendsList}
        renderItem={({ item }) => (
          <OnlineFriendItem 
            friend={item} 
            onPress={() => onSelectFriend && onSelectFriend(item)} 
          />
        )}
      />
    </View>
  );
};



export default OnlineFriendsList;