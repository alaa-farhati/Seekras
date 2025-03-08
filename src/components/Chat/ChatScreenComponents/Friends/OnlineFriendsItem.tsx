import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts, sizes } from '../../../../constants';
import StatusIndicator from '../../../Reusables/StatusIndicator';
import { OnlineFriend } from '../../../../types/chat';

interface OnlineFriendItemProps {
  friend: OnlineFriend;
  onPress?: () => void;
}

const OnlineFriendItem: React.FC<OnlineFriendItemProps> = ({ friend, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={styles.onlineFriendItem} onPress={onPress}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: friend.avatar }} style={styles.onlineAvatar} />
        <StatusIndicator status={friend.status} />
      </View>
      <Text 
        style={[styles.onlineFriendName, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.extraSmall }]}
        numberOfLines={1}
      >
        {friend.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  onlineFriendItem: {
    alignItems: 'center',
    marginRight: 15,
    width: 65,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 5,
  },
  onlineAvatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  onlineFriendName: {
    textAlign: 'center',
    width: '100%',
  },
});

export default OnlineFriendItem;