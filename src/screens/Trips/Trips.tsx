// TripsScreen.tsx

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../assets/Icons/Index';
import CustomInput from '../../components/Reusables/CustomInput';
import { styles } from '../../styles/Trips/Trips';

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
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6rsrpvJVynUHDpktyPAEcgHaE8%26pid%3DApi&f=1&ipt=d8b5dad8198198373c456d763a62ad6fed0c9c07a1d0d0ceea792c937146c7ea&ipo=images', 
    },
    { 
      id: '3', 
      name: 'Desert adventure', 
      date: '22 January 2025', 
      location: 'Sahara',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GuZQacHTQO5ATt8VnVwcQAHaE8%26pid%3DApi&f=1&ipt=521d99a83cf07d0ed65bbc111d0534201e1e977753fc7b7424ad89f5e84fa9a1&ipo=images',
    },
    { 
      id: '4', 
      name: 'Mountain hiking', 
      date: '03 February 2025', 
      location: 'Atlas mountains',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.travelandleisure.com%2Fthmb%2FjuPgMzQuYkcjfVHWVwdoGxZkDoE%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FTAL-tour-du-mont-blanc-WORLDHIKES0523-ecb102509c2e47b18b8cdd6aec848db2.jpg&f=1&nofb=1&ipt=65d1cc8eb0df1c0689a031144f7b69401a8b6b8aa95d50d4eb0fcc51d1114db5&ipo=images', 
    },
    { 
      id: '5', 
      name: 'City exploration', 
      date: '12 February 2025', 
      location: 'Tunis',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Flights-city-street-cityscape-night-China-car-urban-building-bricks-road-skyline-skyscraper-evening-HDR-town-graffiti-Chinese-Manhattan-metropolis-Brick-infrastructure-Chinatown-light-downtown-market-buildings-newyork-cars-ny-nyc-watertower-newyorkcity-urbanart-photomatix-urban-area-waterway-metropolitan-area-human-settlement-neighbourhood-geographical-feature-524940.jpg&f=1&nofb=1&ipt=6f363473fdda9ab990f0b7464067c487a8baa4a927f7faa274a4c2e52cf2234f&ipo=images',
    },
  ]);

  // Filter trips based on search query
  const filteredTrips = trips.filter(trip => 
    trip.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Navigate to trip details
  const navigateToTripDetails = (tripId: string) => {
    //  navigation.navigate('TripDetails', { tripId });
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


export default TripsScreen;