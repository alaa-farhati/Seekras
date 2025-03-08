import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';

interface MessageBubbleProps {
  text: string;
  time: string;
  type: 'sent' | 'received';
  status?: 'read' | 'unread'; // Only for sent messages
  sender?: string; // Only for received messages
  avatar?: string; // Only for received messages
  onDelete?: () => void; // Only for sent messages
}

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
        {isReceived && sender && <Text style={styles.senderName}>{sender}</Text>}
        
        <TouchableOpacity onLongPress={toggleOptions} activeOpacity={0.7}>
          <View style={[styles.messageBubble, isReceived ? styles.receivedBubble : styles.sentBubble]}>
            <Text style={styles.messageText}>{text}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{time}</Text>
              {!isReceived && (
                <Icon
                  name={status === 'read' ? 'checkmark-done' : 'checkmark'}
                  size={14}
                  color={status === 'read' ? '#4FC3F7' : '#BDBDBD'}
                  style={styles.readIcon}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 6,
    paddingHorizontal: 10,
  },
  receivedContainer: {
    alignSelf: 'flex-start',
  },
  sentContainer: {
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  contentContainer: {
    maxWidth: '75%',
    flexShrink: 1,
  },
  senderName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#616161',
    marginBottom: 4,
    marginLeft: 6,
  },
  messageBubble: {
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  receivedBubble: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 6,
  },
  sentBubble: {
    backgroundColor: '#DCF8C6',
    borderBottomRightRadius: 6,
  },
  messageText: {
    fontSize: 16,
    color: '#303030',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#8E8E8E',
    marginRight: 4,
  },
  readIcon: {
    marginTop: 1,
  },
  optionsContainer: {
    alignSelf: 'flex-end',
    marginTop: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  deleteButton: {
    backgroundColor: '#E53935',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteText: {
    color: '#FFF',
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default MessageBubble;
