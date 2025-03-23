import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';
import { ChatDetailsStyles } from '../../../styles/Chat-Styles/ChatDetails';



const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  time,
  type,
  status,
  sender,
  avatar,
  onDelete,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => setShowOptions(!showOptions);

  const isReceived = type === 'received';

  return (
    <View style={[ChatDetailsStyles.container, isReceived ? ChatDetailsStyles.receivedContainer : ChatDetailsStyles.sentContainer]}>
      {isReceived && avatar && <Image source={{ uri: avatar }} style={ChatDetailsStyles.avatar} />}
      
      <View style={ChatDetailsStyles.contentContainer}>
        
        
        <TouchableOpacity onLongPress={toggleOptions} activeOpacity={0.7}>
          <View style={[ChatDetailsStyles.messageBubble, isReceived ? ChatDetailsStyles.receivedBubble : ChatDetailsStyles.sentBubble]}>
            <Text style={[ChatDetailsStyles.messageText,!isReceived?{color:'white'}:null]}>{text}</Text>
            <View style={ChatDetailsStyles.timeContainer}>
              <Text style={[ChatDetailsStyles.timeText,!isReceived?{color:'white'}:null]}>{time}</Text>
              
            </View>
            
          </View>
        </TouchableOpacity>
      </View>
      {!isReceived && (
                <Icon
                  name={status === 'read' ? 'checkmark-circle-outline' : 'checkmark'}
                  size={16}
                  color={status === 'read' ? 'black' : '#BDBDBD'}
                  style={ChatDetailsStyles.readIcon}
                />
              )}
      {showOptions && !isReceived && onDelete && (
        <View style={ChatDetailsStyles.optionsContainer}>
          <TouchableOpacity
            style={ChatDetailsStyles.deleteButton}
            onPress={() => {
              onDelete();
              setShowOptions(false);
            }}
          >
            <Icon name="trash-outline" size={18} color="#FFF" />
            <Text style={ChatDetailsStyles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MessageBubble;
