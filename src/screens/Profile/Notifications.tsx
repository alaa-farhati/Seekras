// NotificationsScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Navigation/Header';
import { Icon } from '../../assets/Icons/Index';


interface Notification {
  id: string;
  type: 'like' | 'comment' | 'mention' | 'friend_request' | 'event' | 'memory' | 'birthday';
  title: string;
  message: string;
  time: string;
  imageUrl: string;
  isRead?: boolean;
  actionable?: boolean;
}

const NotificationsScreen: React.FC = () => {
  const [notificationsToday, setNotificationsToday] = useState<Notification[]>([
    {
      id: '1',
      type: 'like',
      title: 'Sarah Johnson',
      message: 'liked your photo from your trip to Paris',
      time: '10:23',
      imageUrl: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
      isRead: false,
    },
    {
      id: '2',
      type: 'friend_request',
      title: 'Michael Wilson',
      message: 'sent you a friend request',
      time: '08:42',
      imageUrl: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
      actionable: true,
      isRead: false,
    },
  ]);

  const [notificationsYesterday, setNotificationsYesterday] = useState<Notification[]>([
    {
      id: '3',
      type: 'comment',
      title: 'Jessica Brown',
      message: 'commented on your post: "This looks amazing! Where was this taken?"',
      time: '18:15',
      imageUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      isRead: true,
    },
    {
      id: '4',
      type: 'event',
      title: 'Tech Meetup 2025',
      message: 'Event reminder: The event starts tomorrow at 6 PM',
      time: '12:30',
      imageUrl: 'https://img.freepik.com/free-vector/gradient-technology-event-poster-template_23-2149108394.jpg',
      isRead: true,
    },
    {
      id: '5',
      type: 'friend_request',
      title: 'Emily Davis',
      message: 'accepted your friend request',
      time: '09:12',
      imageUrl: 'https://img.freepik.com/free-photo/young-beautiful-woman-with-curly-hair-isolated-beige-background-smiling_285396-1.jpg',
      isRead: true,
    },
  ]);

  const [notificationsLast7Days, setNotificationsLast7Days] = useState<Notification[]>([
    {
      id: '7',
      type: 'birthday',
      title: "Today is John Smith's birthday",
      message: 'Send him your wishes!',
      time: 'Mar 16',
      imageUrl: 'https://img.freepik.com/free-photo/colorful-round-confetti-white-surface-with-sparklers_23-2147879717.jpg',
      isRead: true,
    },
    {
      id: '8',
      type: 'mention',
      title: 'Chris Thompson',
      message: 'mentioned you in a comment: "@username what do you think about this?"',
      time: 'Mar 15',
      imageUrl: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      isRead: true,
    },
  ]);

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'like':
        return <Icon name="thumbs-up" size={16} color="#1877F2" style={styles.typeIcon} />;
      case 'comment':
        return <Icon name="chatbubble" size={16} color="#1877F2" style={styles.typeIcon} />;
      case 'friend_request':
        return <Icon name="person-add" size={16} color="#1877F2" style={styles.typeIcon} />;
      case 'event':
        return <Icon name="calendar" size={16} color="#1877F2" style={styles.typeIcon} />;
      case 'memory':
        return <Icon name="time" size={16} color="#1877F2" style={styles.typeIcon} />;
      case 'birthday':
        return <Icon name="gift" size={16} color="#1877F2" style={styles.typeIcon} />;
      case 'mention':
        return <Icon name="at" size={16} color="#1877F2" style={styles.typeIcon} />;
      default:
        return null;
    }
  };

  const clearAllNotifications = () => {
    setNotificationsToday([]);
    setNotificationsYesterday([]);
    setNotificationsLast7Days([]);
  };

  const renderNotificationItem = (notification: Notification) => {
    return (
      <TouchableOpacity 
        key={notification.id} 
        style={[
          styles.notificationItem, 
          !notification.isRead && styles.unreadNotification
        ]}
      >
        <Image source={{ uri: notification.imageUrl }} style={styles.notificationImage} />
        <View style={styles.notificationContent}>
          <View style={styles.notificationText}>
            <View style={styles.titleRow}>
              {getTypeIcon(notification.type)}
              <Text style={styles.notificationTitle}>{notification.title}</Text>
            </View>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
          
          {notification.actionable && (
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptButtonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.declineButton}>
                <Text style={styles.declineButtonText}>Decline</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex:1, backgroundColor:'white'}} >
      <Header
        title="Notifications" 
        leftIconName="chevron-back"
        rightIconName="ellipsis-vertical"
        onLeftPress={() => console.log("Back pressed")}
        isFeed={false}
        leftText='Clear All'
        leftClick={clearAllNotifications}
      />
      
      <ScrollView style={styles.container}>
        {notificationsToday.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Today</Text>
            {notificationsToday.map(renderNotificationItem)}
          </View>
        )}

        {notificationsYesterday.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Yesterday</Text>
            {notificationsYesterday.map(renderNotificationItem)}
          </View>
        )}

        {notificationsLast7Days.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>This Week</Text>
            {notificationsLast7Days.map(renderNotificationItem)}
          </View>
        )}
        
        {notificationsToday.length === 0 && 
         notificationsYesterday.length === 0 && 
         notificationsLast7Days.length === 0 && (
          <View style={styles.emptyState}>
            <Icon name="notifications-off-outline" size={60} color="#CCCCCC" />
            <Text style={styles.emptyStateText}>No notifications yet</Text>
            <Text style={styles.emptyStateSubtext}>We'll let you know when you get notifications</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#65676B',
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  unreadNotification: {
    backgroundColor: '#E7F3FF',
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
    flexDirection: 'column',
  },
  notificationText: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  typeIcon: {
    marginRight: 6,
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#65676B',
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: '#8A8D91',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  acceptButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 8,
  },
  acceptButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  declineButton: {
    backgroundColor: '#E4E6EB',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  declineButtonText: {
    color: '#1C1E21',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1E21',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#65676B',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default NotificationsScreen;