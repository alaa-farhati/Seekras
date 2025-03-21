// AddNewTrip.tsx

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../assets/Icons/Index';
import CustomInput from '../../components/Reusables/CustomInput';
import Header from '../../components/Navigation/Header';
import { styles } from '../../styles/Trips/AddNewTrip';
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


export default AddNewTrip;