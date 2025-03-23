import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';
import { styles } from '../../../styles/Chat';


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
    <View style={[styles.container, isReceived ? styles.receivedContainer : styles.sentContainer]}>
      {isReceived && avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
      
      <View style={styles.contentContainer}>
        
        
        <TouchableOpacity onLongPress={toggleOptions} activeOpacity={0.7}>
          <View style={[styles.messageBubble, isReceived ? styles.receivedBubble : styles.sentBubble]}>
            <Text style={[styles.messageText,!isReceived?{color:'white'}:null]}>{text}</Text>
            <View style={styles.timeContainer}>
              <Text style={[styles.timeText,!isReceived?{color:'white'}:null]}>{time}</Text>
              
            </View>
            
          </View>
        </TouchableOpacity>
      </View>
      {!isReceived && (
                <Icon
                  name={status === 'read' ? 'checkmark-circle-outline' : 'checkmark'}
                  size={16}
                  color={status === 'read' ? 'black' : '#BDBDBD'}
                  style={styles.readIcon}
                />
              )}
      {showOptions && !isReceived && onDelete && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              onDelete();
              setShowOptions(false);
            }}
          >
            <Icon name="trash-outline" size={18} color="#FFF" />
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MessageBubble;
