// TripsScreen.tsx

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  Image,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../assets/Icons/Index';
import CustomInput from '../../components/Reusables/CustomInput';

interface Trip {
  id: string;
  name: string;
  date: string;
  location: string;
  image: any; // Allow for image source
}

const TripsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample trips data with images
  const [trips, setTrips] = useState<Trip[]>([
    { 
      id: '1', 
      name: 'Ein drahem camping', 
      date: '06 January 2025', 
      location: 'Ein drahem',
 image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
    { 
      id: '2', 
      name: 'Beach weekend', 
      date: '15 January 2025', 
      location: 'Hammamet',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images', 
    },
    { 
      id: '3', 
      name: 'Desert adventure', 
      date: '22 January 2025', 
      location: 'Sahara',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
    { 
      id: '4', 
      name: 'Mountain hiking', 
      date: '03 February 2025', 
      location: 'Atlas mountains',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images', 
    },
    { 
      id: '5', 
      name: 'City exploration', 
      date: '12 February 2025', 
      location: 'Tunis',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0d8wFbTqoPGGPdGcaMQuWQHaFj%26pid%3DApi&f=1&ipt=6857f03d6808099ec63470b1b9bbab507c5b35affcb8b0b7b4eb26c0bafcee98&ipo=images',
    },
  ]);

  // Filter trips based on search query
  const filteredTrips = trips.filter(trip => 
    trip.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Navigate to trip details
  const navigateToTripDetails = (tripId: string) => {
     navigation.navigate('TripDetails', { tripId });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Custom Search Input */}
        
        <CustomInput
          placeholder="Search trips..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          rightIcon="search-outline"
          containerStyle={{ marginBottom: 20 }} 
          
        />
        <Text style={styles.tripName}>{'My latest trips'}</Text>

        <ScrollView style={styles.tripsList} showsVerticalScrollIndicator={false}>
          {filteredTrips.map((trip) => (
            <TouchableOpacity 
              key={trip.id} 
              style={styles.tripItem}
              onPress={() => navigateToTripDetails(trip.id)}
            >
              <Image 
                source={{uri:trip.image}}
                style={styles.tripImage} 
                resizeMode="cover"
              />
              <View style={styles.tripDetails}>
                <Text style={styles.tripName}>{trip.name}</Text>
                <View style={styles.tripInfo}>
                  <Icon name="calendar-outline" size={16} color="#555" />
                  <Text style={styles.tripDate}>{trip.date}</Text>
                </View>
                <View style={styles.tripInfo}>
                  <Icon name="location-outline" size={16} color="#555" />
                  <Text style={styles.tripLocation}>{trip.location}</Text>
                </View>
              </View>
              <Icon name="chevron-forward-outline" size={24} color="#555" />
            </TouchableOpacity>
          ))}
          
          {filteredTrips.length === 0 && (
            <View style={styles.noTripsContainer}>
              <Icon name="sad-outline" size={48} color="#ccc" />
              <Text style={styles.noTripsText}>No trips found</Text>
              <Text style={styles.noTripsSubtext}>Try a different search or add a new trip</Text>
            </View>
          )}
        </ScrollView>

       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  tripsList: {
    flex: 1,
  },
  tripItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tripImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 16,
  },
  tripDetails: {
    flex: 1,
  },
  tripName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  tripInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  tripDate: {
    fontSize: 14,
    color: '#555',
    marginLeft: 6,
  },
  tripLocation: {
    fontSize: 14,
    color: '#555',
    marginLeft: 6,
  },
  noTripsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  noTripsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 12,
  },
  noTripsSubtext: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
  },
  
});

export default TripsScreen;