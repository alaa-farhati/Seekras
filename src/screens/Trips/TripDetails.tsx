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
            
            {/* Teammates */}
            {/* <View style={styles.teammatesContainer}>
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
            </View> */}
            
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: 220,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    position: 'absolute',
    top: 48,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    fontWeight: '600',
    color: '#007AFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsContainer: {
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 8,
  },
  descriptionContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
  teammatesContainer: {
    marginBottom: 24,
  },
  teammatesList: {
    flexDirection: 'row',
    marginTop: 8,
  },
  teammateItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  teammateAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  teammateName: {
    fontSize: 14,
    color: '#333',
  },
  addTeammate: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  addTeammateText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  weatherContainer: {
    marginBottom: 24,
  },
  weatherRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  weatherDay: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    width: '30%',
  },
  weatherDate: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  weatherTemp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  suppliesContainer: {
    padding: 16,
  },
  suppliesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addSupplyButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  addSupplyText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  supplyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  supplyInfo: {
    flex: 1,
  },
  supplyName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  supplyAssigned: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assignedLabel: {
    fontSize: 14,
    color: '#666',
  },
  assignedName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  supplyStatus: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  confirmedStatus: {
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
  },
  pendingStatus: {
    backgroundColor: 'rgba(255, 184, 0, 0.1)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  activitiesContainer: {
    padding: 16,
  },
  activitiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addActivityButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  addActivityText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  activityTimeline: {
    width: 24,
    alignItems: 'center',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 4,
    marginLeft: 5,
  },
  activityContent: {
    flex: 1,
    marginLeft: 12,
  },
  activityName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  activityDetails: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
  },
  activityDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
  bottomButtonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    top:-20
  },
  mainActionButton: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  mainActionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default TripDetails;