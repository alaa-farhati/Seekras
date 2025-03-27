import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Switch,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from '../../components/Reusables-Component/CustomButton';
import { Icon } from '../../assets/Icons/Index';
import {styles} from '../../styles/Profile-Styles/EditProfile';

// Define types for data structures
interface UserProfile {
  username: string;
  bio: string;
  email: string;
  location: string;
  favoriteActivities: string[];
  privacySettings: {
    showVisitedPlaces: boolean;
    showAchievements: boolean;
    allowTagging: boolean;
    publicProfile: boolean;
  };
  notificationSettings: {
    newComments: boolean;
    newLikes: boolean;
    newFollowers: boolean;
    appUpdates: boolean;
  };
}

// Type for navigation
type NavigationProp = {
  goBack(): void;
  navigate: (screen: string) => void;
};

// Define available activities
const ACTIVITIES = [
  'Hiking',
  'Camping',
  'Fishing',
  'Kayaking',
  'Stargazing',
  'Wildlife Spotting',
  'Photography',
  'Climbing',
  'Backpacking',
  'Birdwatching'
];

const EditProfile: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  
  // Mock initial profile data
  const [profile, setProfile] = useState<UserProfile>({
    username: 'AdventureSeeker',
    bio: 'Passionate outdoor enthusiast and camping lover. Always seeking new adventures in the wild. Hiking, fishing, and stargazing are my favorite activities when camping.',
    email: 'adventure.seeker@example.com',
    location: 'Portland, Oregon',
    favoriteActivities: ['Hiking', 'Camping', 'Fishing', 'Stargazing'],
    privacySettings: {
      showVisitedPlaces: true,
      showAchievements: true,
      allowTagging: true,
      publicProfile: true
    },
    notificationSettings: {
      newComments: true,
      newLikes: true,
      newFollowers: true,
      appUpdates: false
    }
  });
  
  // State for active section
  const [activeSection, setActiveSection] = useState<'basic' | 'privacy' | 'notifications'>('basic');

  // Update profile field handler
  const updateProfile = (field: keyof UserProfile, value: any) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Update nested settings
  const updateSettings = (
    settingType: 'privacySettings' | 'notificationSettings',
    setting: string,
    value: boolean
  ) => {
    setProfile(prev => ({
      ...prev,
      [settingType]: {
        ...prev[settingType],
        [setting]: value
      }
    }));
  };

  // Toggle activity selection
  const toggleActivity = (activity: string) => {
    setProfile(prev => {
      const activities = [...prev.favoriteActivities];
      
      if (activities.includes(activity)) {
        // Remove activity
        const filteredActivities = activities.filter(a => a !== activity);
        return {
          ...prev,
          favoriteActivities: filteredActivities
        };
      } else {
        // Add activity (limit to 5)
        if (activities.length >= 5) {
          Alert.alert('Limit Reached', 'You can select up to 5 favorite activities');
          return prev;
        }
        return {
          ...prev,
          favoriteActivities: [...activities, activity]
        };
      }
    });
  };

  // Save profile changes
  const saveChanges = () => {
    // Here you would typically make an API call to save the profile
    Alert.alert(
      'Profile Updated',
      'Your profile has been updated successfully!',
      [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name='chevron-back' color='#3C6E47' />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Profile Image Section */}
        <View style={styles.imageSection}>
          <Image
            source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeebom.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fhow-to-create-reddit-avatar-feat..jpg%3Fquality%3D75%26strip%3Dall&f=1&nofb=1&ipt=e964bb1c7d874892b13bb9ef2dea87719eacb554fbfce08cc4f056a9c983bc5d&ipo=images' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <MaterialIcons name="camera-alt" size={18} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.changePhotoText}>Change Profile Photo</Text>
        </View>

        {/* Section Tabs */}
        <View style={styles.tabsContainer}>
          {['Basic Info', 'Privacy', 'Notifications'].map((tab) => {
            const sectionKey = tab.toLowerCase().replace(' info', '') as 'basic' | 'privacy' | 'notifications';
            return (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeSection === sectionKey && styles.activeTab
                ]}
                onPress={() => setActiveSection(sectionKey)}
              >
                <Text 
                  style={[
                    styles.tabText,
                    activeSection === sectionKey && styles.activeTabText
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Basic Info Section */}
        {activeSection === 'basic' && (
          <View style={styles.section}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                value={profile.username}
                onChangeText={(text) => updateProfile('username', text)}
                placeholder="Enter username"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Bio</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={profile.bio}
                onChangeText={(text) => updateProfile('bio', text)}
                placeholder="Tell us about yourself..."
                multiline
                numberOfLines={4}
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={profile.email}
                onChangeText={(text) => updateProfile('email', text)}
                placeholder="Enter email"
                keyboardType="email-address"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Location</Text>
              <TextInput
                style={styles.input}
                value={profile.location}
                onChangeText={(text) => updateProfile('location', text)}
                placeholder="Enter location"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Favorite Activities (max 5)</Text>
              <View style={styles.activitiesContainer}>
                {ACTIVITIES.map((activity) => (
                  <TouchableOpacity
                    key={activity}
                    style={[
                      styles.activityTag,
                      profile.favoriteActivities.includes(activity) && styles.selectedActivity
                    ]}
                    onPress={() => toggleActivity(activity)}
                  >
                    <Text
                      style={[
                        styles.activityText,
                        profile.favoriteActivities.includes(activity) && styles.selectedActivityText
                      ]}
                    >
                      {activity}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Privacy Section */}
        {activeSection === 'privacy' && (
          <View style={styles.section}>
            <Text style={styles.sectionDescription}>
              Manage what information other users can see on your profile
            </Text>
            
            <View style={styles.settingItem}>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Show Visited Places</Text>
                <Text style={styles.settingDescription}>Allow others to see places you've visited</Text>
              </View>
              <Switch
                value={profile.privacySettings.showVisitedPlaces}
                onValueChange={(value) => updateSettings('privacySettings', 'showVisitedPlaces', value)}
                trackColor={{ false: '#D1D1D1', true: '#81B29A' }}
                thumbColor={profile.privacySettings.showVisitedPlaces ? '#3C6E47' : '#f4f3f4'}
              />
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Show Achievements</Text>
                <Text style={styles.settingDescription}>Allow others to see your achievements</Text>
              </View>
              <Switch
                value={profile.privacySettings.showAchievements}
                onValueChange={(value) => updateSettings('privacySettings', 'showAchievements', value)}
                trackColor={{ false: '#D1D1D1', true: '#81B29A' }}
                thumbColor={profile.privacySettings.showAchievements ? '#3C6E47' : '#f4f3f4'}
              />
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Allow Tagging</Text>
                <Text style={styles.settingDescription}>Allow others to tag you in posts</Text>
              </View>
              <Switch
                value={profile.privacySettings.allowTagging}
                onValueChange={(value) => updateSettings('privacySettings', 'allowTagging', value)}
                trackColor={{ false: '#D1D1D1', true: '#81B29A' }}
                thumbColor={profile.privacySettings.allowTagging ? '#3C6E47' : '#f4f3f4'}
              />
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Public Profile</Text>
                <Text style={styles.settingDescription}>Make your profile visible to everyone</Text>
              </View>
              <Switch
                value={profile.privacySettings.publicProfile}
                onValueChange={(value) => updateSettings('privacySettings', 'publicProfile', value)}
                trackColor={{ false: '#D1D1D1', true: '#81B29A' }}
                thumbColor={profile.privacySettings.publicProfile ? '#3C6E47' : '#f4f3f4'}
              />
            </View>
          </View>
        )}

        {/* Notifications Section */}
        {activeSection === 'notifications' && (
          <View style={styles.section}>
            <Text style={styles.sectionDescription}>
              Manage which notifications you want to receive
            </Text>
            
            <View style={styles.settingItem}>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>New Comments</Text>
                <Text style={styles.settingDescription}>Get notifications when someone comments on your posts</Text>
              </View>
              <Switch
                value={profile.notificationSettings.newComments}
                onValueChange={(value) => updateSettings('notificationSettings', 'newComments', value)}
                trackColor={{ false: '#D1D1D1', true: '#81B29A' }}
                thumbColor={profile.notificationSettings.newComments ? '#3C6E47' : '#f4f3f4'}
              />
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>New Likes</Text>
                <Text style={styles.settingDescription}>Get notifications when someone likes your posts</Text>
              </View>
              <Switch
                value={profile.notificationSettings.newLikes}
                onValueChange={(value) => updateSettings('notificationSettings', 'newLikes', value)}
                trackColor={{ false: '#D1D1D1', true: '#81B29A' }}
                thumbColor={profile.notificationSettings.newLikes ? '#3C6E47' : '#f4f3f4'}
              />
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>New Followers</Text>
                <Text style={styles.settingDescription}>Get notifications when someone follows you</Text>
              </View>
              <Switch
                value={profile.notificationSettings.newFollowers}
                onValueChange={(value) => updateSettings('notificationSettings', 'newFollowers', value)}
                trackColor={{ false: '#D1D1D1', true: '#81B29A' }}
                thumbColor={profile.notificationSettings.newFollowers ? '#3C6E47' : '#f4f3f4'}
              />
            </View>
            
            <View style={styles.settingItem}>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>App Updates</Text>
                <Text style={styles.settingDescription}>Get notifications about new features and updates</Text>
              </View>
              <Switch
                value={profile.notificationSettings.appUpdates}
                onValueChange={(value) => updateSettings('notificationSettings', 'appUpdates', value)}
                trackColor={{ false: '#D1D1D1', true: '#81B29A' }}
                thumbColor={profile.notificationSettings.appUpdates ? '#3C6E47' : '#f4f3f4'}
              />
            </View>
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <CustomButton
            text="Cancel"
            onPress={() => navigation.goBack()}
            buttonType="outline"
            size="medium"
            style={styles.cancelButton}
          />
          <CustomButton
            text="Save Changes"
            onPress={saveChanges}
            buttonType="primary"
            size="medium"
            style={styles.saveButton}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;