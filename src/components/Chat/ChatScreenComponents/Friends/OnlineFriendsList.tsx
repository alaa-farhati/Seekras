import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts, sizes } from '../../../../constants';
import { OnlineFriend } from '../../../../types/chat';
import OnlineFriendItem from './OnlineFriendsItem';

interface OnlineFriendsListProps {
  friends: OnlineFriend[];
  onSelectFriend?: (friend: OnlineFriend) => void;
}

const OnlineFriendsList: React.FC<OnlineFriendsListProps> = ({ friends, onSelectFriend }) => {
  const { theme } = useTheme();

  if (friends.length === 0) {
    return null;
  }

  return (
    <View style={styles.onlineFriendsContainer}>
      <Text style={[styles.sectionTitle, { color: theme.text, fontFamily: fonts.semiBold, fontSize: sizes.text.small }]}>
        Online Friends
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={friends}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.onlineFriendsList}
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

const styles = StyleSheet.create({
  onlineFriendsContainer: {
    marginTop: 0,
  },
  sectionTitle: {
    paddingHorizontal: 15,
    paddingVertical:10,
  },
  onlineFriendsList: {
    paddingLeft: 15,
    paddingRight: 5,
  },
});

export default OnlineFriendsList;