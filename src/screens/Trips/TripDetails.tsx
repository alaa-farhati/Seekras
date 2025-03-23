// TripDetails.tsx

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '../../assets/Icons/Index';
import { styles } from '../../styles/Trips/TripDetails';
interface RouteParams {
  tripId: string;
}

interface Teammate {
  id: string;
  name: string;
  avatar: any;
}

interface Supply {
  id: string;
  name: string;
  assigned: string;
  status: 'pending' | 'confirmed';
}

interface Activity {
  id: string;
  name: string;
  time: string;
  location: string;
}

const TripDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { tripId } = route.params as RouteParams;
  
  const [tripDetails, setTripDetails] = useState({
    id: tripId,
    name: 'Ein drahem camping',
    location: 'Ein drahem, Tunisia',
    date: '06 - 08 January 2025',
    description: 'Weekend camping trip with outdoor activities and hiking. Everyone is responsible for their own supplies and meals.',
    sportType: 'Camping',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
  });
  
  const [teammates, setTeammates] = useState<Teammate[]>([
    { id: '1', name: 'Ahmed', avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: '2', name: 'Maryam', avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: '3', name: 'Ali',avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: '4', name: 'Fatima', avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  ]);
  
  const [supplies, setSupplies] = useState<Supply[]>([
    { id: '1', name: 'Tents (2)', assigned: 'Ahmed', status: 'confirmed' },
    { id: '2', name: 'Cooking supplies', assigned: 'Maryam', status: 'confirmed' },
    { id: '3', name: 'First aid kit', assigned: 'Ali', status: 'pending' },
    { id: '4', name: 'Hiking gear', assigned: 'You', status: 'pending' },
  ]);
  
  const [activities, setActivities] = useState<Activity[]>([
    { id: '1', name: 'Arrival & Setup', time: 'Jan 06, 10:00 AM', location: 'Camping Ground' },
    { id: '2', name: 'Hiking Trip', time: 'Jan 06, 2:00 PM', location: 'Mountain Trail' },
    { id: '3', name: 'Campfire Dinner', time: 'Jan 06, 7:00 PM', location: 'Camp Center' },
    { id: '4', name: 'Morning Trek', time: 'Jan 07, 8:00 AM', location: 'East Trail' },
  ]);
  
  const [activeTab, setActiveTab] = useState<'details' | 'supplies' | 'activities'>('details');
  
  useEffect(() => {
    // Fetch trip details based on tripId when component mounts
    // This would typically be an API call
    console.log('Fetching details for trip:', tripId);
  }, [tripId]);
  
  const handleBack = () => {
    navigation.goBack();
  };
  
  const handleEditTrip = () => {
    // navigation.navigate('EditTrip', { tripId });
  };
  
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image source={{uri:tripDetails.Image}} style={styles.headerImage} resizeMode="cover" />
        <View style={styles.overlay} />
        
        {/* Header Buttons */}
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Icon name="chevron-back-outline" size={28} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.editButton} onPress={handleEditTrip}>
          <Icon name="create-outline" size={24} color="#fff" />
        </TouchableOpacity>
        
        {/* Trip Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{tripDetails.name}</Text>
          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={16} color="#fff" />
            <Text style={styles.location}>{tripDetails.location}</Text>
          </View>
        </View>
      </View>
      
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'details' && styles.activeTab]} 
          onPress={() => setActiveTab('details')}
        >
          <Text style={[styles.tabText, activeTab === 'details' && styles.activeTabText]}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'supplies' && styles.activeTab]} 
          onPress={() => setActiveTab('supplies')}
        >
          <Text style={[styles.tabText, activeTab === 'supplies' && styles.activeTabText]}>Supplies</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'activities' && styles.activeTab]} 
          onPress={() => setActiveTab('activities')}
        >
          <Text style={[styles.tabText, activeTab === 'activities' && styles.activeTabText]}>Activities</Text>
        </TouchableOpacity>
      </View>
      
      {/* Content */}
      <ScrollView style={styles.contentContainer}>
        {activeTab === 'details' && (
          <View style={styles.detailsContainer}>
            {/* Date Information */}
            <View style={styles.infoRow}>
              <Icon name="calendar-outline" size={20} color="#666" />
              <Text style={styles.infoText}>{tripDetails.date}</Text>
            </View>
            
            {/* Sport Type */}
            <View style={styles.infoRow}>
              <Icon name="bicycle-outline" size={20} color="#666" />
              <Text style={styles.infoText}>{tripDetails.sportType}</Text>
            </View>
            
            {/* Description */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.sectionTitle}>Description</Text>
              <Text style={styles.description}>{tripDetails.description}</Text>
            </View>
            
            {/* Teammates
            <View style={styles.teammatesContainer}>
              <Text style={styles.sectionTitle}>Teammates</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.teammatesList}>
                {teammates.map((teammate) => (
                  <View key={teammate.id} style={styles.teammateItem}>
                    <Image source={{uri:teammate.avatar}} style={styles.teammateAvatar} />
                    <Text style={styles.teammateName}>{teammate.name}</Text>
                  </View>
                ))}
                <TouchableOpacity style={styles.addTeammate}>
                  <Icon name="add-outline" size={28} color="#666" />
                  <Text style={styles.addTeammateText}>Add</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
             */}
            {/* Weather */}
            <View style={styles.weatherContainer}>
              <Text style={styles.sectionTitle}>Weather Forecast</Text>
              <View style={styles.weatherRow}>
                <View style={styles.weatherDay}>
                  <Text style={styles.weatherDate}>Jan 6</Text>
                  <Icon name="sunny-outline" size={28} color="#FFB800" />
                  <Text style={styles.weatherTemp}>23°C</Text>
                </View>
                <View style={styles.weatherDay}>
                  <Text style={styles.weatherDate}>Jan 7</Text>
                  <Icon name="partly-sunny-outline" size={28} color="#FFB800" />
                  <Text style={styles.weatherTemp}>22°C</Text>
                </View>
                <View style={styles.weatherDay}>
                  <Text style={styles.weatherDate}>Jan 8</Text>
                  <Icon name="rainy-outline" size={28} color="#4A90E2" />
                  <Text style={styles.weatherTemp}>19°C</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        
        {activeTab === 'supplies' && (
          <View style={styles.suppliesContainer}>
            <View style={styles.suppliesHeader}>
              <Text style={styles.sectionTitle}>Trip Supplies</Text>
              <TouchableOpacity style={styles.addSupplyButton}>
                <Text style={styles.addSupplyText}>+ Add Item</Text>
              </TouchableOpacity>
            </View>
            
            {supplies.map((supply) => (
              <View key={supply.id} style={styles.supplyItem}>
                <View style={styles.supplyInfo}>
                  <Text style={styles.supplyName}>{supply.name}</Text>
                  <View style={styles.supplyAssigned}>
                    <Text style={styles.assignedLabel}>Assigned to: </Text>
                    <Text style={styles.assignedName}>{supply.assigned}</Text>
                  </View>
                </View>
                <View style={[styles.supplyStatus, supply.status === 'confirmed' ? styles.confirmedStatus : styles.pendingStatus]}>
                  <Text style={styles.statusText}>{supply.status === 'confirmed' ? 'Confirmed' : 'Pending'}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
        
        {activeTab === 'activities' && (
          <View style={styles.activitiesContainer}>
            <View style={styles.activitiesHeader}>
              <Text style={styles.sectionTitle}>Trip Schedule</Text>
              <TouchableOpacity style={styles.addActivityButton}>
                <Text style={styles.addActivityText}>+ Add Activity</Text>
              </TouchableOpacity>
            </View>
            
            {activities.map((activity) => (
              <View key={activity.id} style={styles.activityItem}>
                <View style={styles.activityTimeline}>
                  <View style={styles.timelineDot} />
                  <View style={styles.timelineLine} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityName}>{activity.name}</Text>
                  <View style={styles.activityDetails}>
                    <View style={styles.activityDetail}>
                      <Icon name="time-outline" size={16} color="#666" />
                      <Text style={styles.detailText}>{activity.time}</Text>
                    </View>
                    <View style={styles.activityDetail}>
                      <Icon name="location-outline" size={16} color="#666" />
                      <Text style={styles.detailText}>{activity.location}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      
      {/* Bottom Action Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.mainActionButton}>
          <Text style={styles.mainActionText}>Chat with Team</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default TripDetails;