// AddNewTrip.tsx

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../assets/Icons/Index';
import CustomInput from '../../components/Reusables/CustomInput';
import Header from '../../components/Navigation/Header';

const AddNewTrip: React.FC = () => {
  const navigation = useNavigation();
  const [tripName, setTripName] = useState('');
  const [location, setLocation] = useState('');
  const [tripPeriod, setTripPeriod] = useState('');
  const [sportType, setSportType] = useState('Camping');
  const [teammates, setTeammates] = useState<string[]>([]);
  const [supplies, setSupplies] = useState<string[]>([]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    // Validate and save trip data
    // Then navigate to next screen or back to trips list
    alert('Trip data saved');
    navigation.goBack();
  };

  const handleDatePicker = () => {
    // Open date picker functionality
    console.log('Opening date picker');
  };

  const handleSportTypeSelection = () => {
    // Open sport type selector
    console.log('Opening sport type selector');
  };

  return (
    <View style={styles.safeArea}>
      <Header 
          title="Add New Trip"
          leftIconName="arrow-back"
          rightIconName="checkmark"
          onLeftPress={handleBack}
         leftClick={handleNext}
         leftText="New Trip"
         isFeed={false}
        />  
      <View style={styles.container}>
        {/* Header */}
      

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Trip Name Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trip Name</Text>
           <CustomInput
              placeholder="Enter trip name"
              value={tripName}
              onChangeText={setTripName}
              containerStyle={{ marginBottom: 20 }}
            />
          </View>

          {/* Location Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>where to ?</Text>
           
             <CustomInput
              placeholder="Enter location"
              value={location}
              leftIcon='location-outline'
              onChangeText={setLocation}
              containerStyle={{ marginBottom: 20 }}
            />
           
          </View>

          {/* Teammates Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>teammates</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.teammatesContainer}>
              <TouchableOpacity style={styles.addTeammate}>
                <Icon name="add-outline" size={32} color="#000" />
              </TouchableOpacity>
              {/* Placeholder teammate circles */}
              {[1, 2, 3, 4, 5].map((_, index) => (
                <View key={index} style={styles.teammatePlaceholder} />
              ))}
            </ScrollView>
          </View>

          {/* Trip Period Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trip Period</Text>
            <CustomInput
              placeholder="Select trip period"
              value={tripPeriod}
              rightIcon='calendar-outline'
              onPress={handleDatePicker}
              onChangeText={setTripPeriod}
              containerStyle={{ marginBottom: 20 }}
            />
          </View>

          {/* Type of Sports Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Type of sports</Text>
            <CustomInput
              placeholder="Select sport type"
              value={sportType}
              rightIcon='chevron-down-outline'
              onPress={handleSportTypeSelection}
              onChangeText={setSportType}
              containerStyle={{ marginBottom: 20 }}
            />
          </View>

          {/* Supplies Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Supplies</Text>
            <View style={styles.suppliesContainer}>
              <TouchableOpacity style={styles.supplyItem}>
                <View style={styles.checkmarkContainer}>
                  <Icon name="checkmark-outline" size={18} color="#666" />
                </View>
                <View style={styles.supplyContent} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.supplyItem}>
                <View style={styles.checkmarkContainer}>
                  <Icon name="checkmark-outline" size={18} color="#666" />
                </View>
                <View style={styles.supplyContent} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

       
      </View>
    </View>
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
  },
  
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginVertical: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#000',
  },

  teammatesContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  addTeammate: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  teammatePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    marginRight: 12,
  },
  

  
  
  suppliesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  supplyItem: {
    width: '48%',
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
    padding: 8,
  },
  checkmarkContainer: {
    alignItems: 'flex-end',
  },
  supplyContent: {
    flex: 1,
  },

});

export default AddNewTrip;