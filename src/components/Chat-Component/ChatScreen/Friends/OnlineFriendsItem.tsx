import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts, sizes } from '../../../../constants';
import StatusIndicator from '../../../Reusables-Component/StatusIndicator';
import { ChatScreenStyles } from '../../../../styles/Chat-Styles/ChatScreen';


interface OnlineFriendItemProps {
  friend: OnlineFriend;
  onPress?: () => void;
}

const OnlineFriendItem: React.FC<OnlineFriendItemProps> = ({ friend, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={ChatScreenStyles.onlineFriendItem} onPress={onPress}>
      <View style={ChatScreenStyles.avatarContainer}>
        <Image source={{ uri: friend.avatar }} style={ChatScreenStyles.onlineAvatar} />
        <StatusIndicator status={friend.status} />
      </View>
      <Text 
        style={[ChatScreenStyles.onlineFriendName, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.extraSmall }]}
        numberOfLines={1}
      >
        {friend.name}
      </Text>
    </TouchableOpacity>
  );
};



export default OnlineFriendItem;