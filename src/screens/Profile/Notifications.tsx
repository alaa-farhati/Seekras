// NotificationsScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Navigation/Header';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  imageUrl?: string;
}

const NotificationsScreen: React.FC = () => {
  const [notificationsToday, setNotificationsToday] = useState<Notification[]>([
    {
      id: '1',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
    {
      id: '2',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
  ]);

  const [notificationsYesterday, setNotificationsYesterday] = useState<Notification[]>([
    {
      id: '3',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
    {
      id: '4',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Tn9oplEGeobjOvQTIYZBKgHaE8%26pid%3DApi&f=1&ipt=962f34373bb78d4aa4bd85ed59ac40aac9c42d61760232e23e5940320c8b0258&ipo=images',
    },
    {
      id: '5',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Tn9oplEGeobjOvQTIYZBKgHaE8%26pid%3DApi&f=1&ipt=962f34373bb78d4aa4bd85ed59ac40aac9c42d61760232e23e5940320c8b0258&ipo=images',
    },
    {
      id: '6',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Tn9oplEGeobjOvQTIYZBKgHaE8%26pid%3DApi&f=1&ipt=962f34373bb78d4aa4bd85ed59ac40aac9c42d61760232e23e5940320c8b0258&ipo=images',
    },
  ]);

  const [notificationsLast7Days, setNotificationsLast7Days] = useState<Notification[]>([
    {
      id: '7',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
    {
      id: '8',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
    {
      id: '9',
      title: 'Super sale',
      message: 'Get 60% off in our first booking',
      time: '08:42',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
  ]);

  const clearAllNotifications = () => {
    setNotificationsToday([]);
    setNotificationsYesterday([]);
    setNotificationsLast7Days([]);
  };

  return (
    <View style={{flex:1,backgroundColor:'white'}} >
         <Header
        title="Notifications" // Set the title
        leftIconName="chevron-back" // Set the left icon
        rightIconName="ellipsis-vertical" // Set the right icon
        onLeftPress={() => console.log("Back pressed")} // Set the left press handler
        isFeed={false} // Set isFeed (adjust as needed)
        leftText='Clear All' // Set the left text
        leftClick={clearAllNotifications} // Set the left click handler
      />
 <ScrollView style={styles.container}>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today</Text>
        {notificationsToday.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            {notification.imageUrl && (
              <Image source={{ uri: notification.imageUrl }} style={styles.notificationImage} />
            )}
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
            </View>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Yesterday</Text>
        {notificationsYesterday.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            {notification.imageUrl && (
              <Image source={{ uri: notification.imageUrl }} style={styles.notificationImage} />
            )}
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
            </View>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>last 7 days</Text>
        {notificationsLast7Days.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            {notification.imageUrl && (
              <Image source={{ uri: notification.imageUrl }} style={styles.notificationImage} />
            )}
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
            </View>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        ))}
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearAllText: {
    color: '#007AFF',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#888',
  },
  notificationTime: {
    fontSize: 14,
    color: '#888',
  },
});

export default NotificationsScreen;