import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  ListRenderItem
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import CustomButton from '../../components/Reusables/CustomButton';
import { Icon } from '../../assets/Icons/Index';

const windowWidth = Dimensions.get('window').width;

// Define types for data structures
interface Post {
  id: string;
  title: string;
  location: string;
  upvotes: number;
  comments: number;
  time: string;
  image?: string;
  type: 'post' | 'saved' | 'shared';
}

interface Achievement {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  points: number;
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface VisitedPlace {
  id: string;
  name: string;
  location: string;
  date: string;
  image: string;
  rating: number;
  visits: number;
}

// Define type for tab options
type TabOption = 'places' | 'posts' | 'saved' | 'shared' | 'achievements';

// Mock data for demonstration
const POSTS: Post[] = [
  {
    id: '1',
    title: 'Amazing sunrise at Mount Rainier',
    location: 'Mount Rainier National Park',
    upvotes: 143,
    comments: 24,
    time: '2d',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.r0eT5QafKiYNsOnvEXs1jgHaE8%26pid%3DApi&f=1&ipt=619fde1efe540ccbe1119a82a75418245eec0aefc3d5e3c0b86c580e54aada27&ipo=images',
    type: 'post'
  },
  {
    id: '2',
    title: 'Perfect campsite by the lake',
    location: 'Lake Tahoe',
    upvotes: 98,
    comments: 14,
    time: '5d',
    type: 'post'
  },
  {
    id: '3',
    title: 'Best hiking trails in Yosemite',
    location: 'Yosemite National Park',
    upvotes: 234,
    comments: 42,
    time: '1w',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.r0eT5QafKiYNsOnvEXs1jgHaE8%26pid%3DApi&f=1&ipt=619fde1efe540ccbe1119a82a75418245eec0aefc3d5e3c0b86c580e54aada27&ipo=images',
    type: 'saved'
  },
  {
    id: '4',
    title: 'Camping gear essentials for beginners',
    location: 'General Tips',
    upvotes: 562,
    comments: 71,
    time: '3d',
    type: 'shared'
  }
];

const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    name: 'Night Owl',
    icon: 'campfire',
    color: '#FF8C00',
    description: 'Camped for 5 consecutive nights',
    points: 50
  },
  {
    id: '2',
    name: 'Trail Blazer',
    icon: 'hiking',
    color: '#228B22',
    description: 'Hiked over 100 miles of trails',
    points: 75
  },
  {
    id: '3',
    name: 'Peak Bagger',
    icon: 'summit', // Changed from 'mountain' to 'summit'
    color: '#708090',
    description: 'Reached 5 mountain summits',
    points: 100
  },
  {
    id: '4',
    name: 'Wildlife Spotter',
    icon: 'paw',
    color: '#8B4513',
    description: 'Spotted and logged 20 different wildlife species',
    points: 60
  }
];

const BADGES: Badge[] = [
  {
    id: '1',
    name: 'Verified Camper',
    icon: 'tent',
    color: '#36B37E'
  },
  {
    id: '2',
    name: 'Pro Explorer',
    icon: 'compass',
    color: '#0079D3'
  },
  {
    id: '3',
    name: 'Community Guide',
    icon: 'map-marker',
    color: '#FF4500'
  }
];

const VISITED_PLACES: VisitedPlace[] = [
  {
    id: '1',
    name: 'Yosemite National Park',
    location: 'California',
    date: 'June 2024',
    image: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    rating: 5,
    visits: 3
  }
];

// Type for navigation
type NavigationProp = {
  goBack(): void;
  navigate: (screen: string) => void;
};

const Profile: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<TabOption>('places');
  
  // Calculate total points from achievements
  const totalPoints = ACHIEVEMENTS.reduce((sum, achievement) => sum + achievement.points, 0);

  // Function to render post item
  const renderPostItem: ListRenderItem<Post> = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={14} color="#3C6E47" />
          <Text style={styles.location}>{item.location}</Text>
        </View>
        <Text style={styles.postTime}>• Posted {item.time} ago</Text>
      </View>
      
      <Text style={styles.postTitle}>{item.title}</Text>
      
      {item.image && (
        <Image 
          source={{ uri: item.image }} 
          style={styles.postImage} 
          resizeMode="cover"
        />
      )}
      
      <View style={styles.postFooter}>
        <View style={styles.postStat}>
          <MaterialIcons name="favorite" size={16} color="#E63946" />
          <Text style={styles.postStatText}>{item.upvotes}</Text>
        </View>
        
        <View style={styles.postStat}>
          <MaterialIcons name="comment" size={16} color="#457B9D" />
          <Text style={styles.postStatText}>{item.comments} Comments</Text>
        </View>
        
        <View style={styles.postStat}>
          <MaterialIcons name="share" size={16} color="#457B9D" />
          <Text style={styles.postStatText}>Share</Text>
        </View>
      </View>
    </View>
  );

  // Function to render achievement item
  const renderAchievementItem: ListRenderItem<Achievement> = ({ item }) => (
    <View style={styles.achievementCard}>
      <View style={styles.achievementHeader}>
        <MaterialCommunityIcons name={item.icon as any} size={32} color={item.color} />
        <View style={styles.pointsBadge}>
          <Text style={styles.pointsText}>{item.points} pts</Text>
        </View>
      </View>
      <Text style={styles.achievementName}>{item.name}</Text>
      <Text style={styles.achievementDesc}>{item.description}</Text>
    </View>
  );

  // Function to render badge item
  const renderBadgeItem: ListRenderItem<Badge> = ({ item }) => (
    <View style={styles.badgeItem}>
      <MaterialCommunityIcons name={item.icon as any} size={24} color={item.color} />
      <Text style={styles.badgeName}>{item.name}</Text>
    </View>
  );

  // Function to render visited place item
  const renderPlaceItem: ListRenderItem<VisitedPlace> = ({ item }) => (
    <View style={styles.placeCard}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.placeImage} 
        resizeMode="cover"
      />
      <View style={styles.placeOverlay}>
        <View style={styles.visitBadge}>
          <Text style={styles.visitText}>{item.visits} {item.visits > 1 ? 'visits' : 'visit'}</Text>
        </View>
      </View>
      <View style={styles.placeContent}>
        <Text style={styles.placeName}>{item.name}</Text>
        <View style={styles.placeDetails}>
          <View style={styles.placeLocation}>
            <MaterialIcons name="location-on" size={14} color="#3C6E47" />
            <Text style={styles.placeLocationText}>{item.location}</Text>
          </View>
          <Text style={styles.placeDate}>{item.date}</Text>
        </View>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, i) => (
            <MaterialIcons 
              key={i} 
              name="star" 
              size={16} 
              color={i < item.rating ? '#FFD700' : '#D3D3D3'} 
            />
          ))}
        </View>
      </View>
    </View>
  );

  // Filter data based on active tab
  const getFilteredContent = (): Post[] => {
    switch (activeTab) {
      case 'posts':
        return POSTS.filter(post => post.type === 'post');
      case 'saved':
        return POSTS.filter(post => post.type === 'saved');
      case 'shared':
        return POSTS.filter(post => post.type === 'shared');
      case 'achievements':
        return []; // Special case, handled differently
      case 'places':
        return []; // Special case, handled differently
      default:
        return POSTS;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cover Image - Camping themed */}
      <Image
        source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F151%2F151005.jpg&f=1&nofb=1&ipt=d9403eb28f6024d69d5bf11550997c14ab1903bf570da3d6594eddf249c6a8e5&ipo=images' }}
        style={styles.coverImage}
      />
      <TouchableOpacity style={{position:'absolute',top:50,left:10,zIndex:2}} onPress={()=>navigation.goBack()}>
        <Icon name='chevron-back' color='white'/>
      </TouchableOpacity>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeebom.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fhow-to-create-reddit-avatar-feat..jpg%3Fquality%3D75%26strip%3Dall&f=1&nofb=1&ipt=e964bb1c7d874892b13bb9ef2dea87719eacb554fbfce08cc4f056a9c983bc5d&ipo=images' }}
          style={styles.profileImage}
        />
        
        <View style={styles.profileInfo}>
          <Text style={styles.username}>AdventureSeeker</Text>
          
          <View style={styles.statsRow}>
            {/* <View style={styles.stat}>
              <MaterialCommunityIcons name="star-circle" size={16} color="#FFD700" />
              <Text style={styles.statText}>{totalPoints} points</Text>
            </View>
            <View style={styles.stat}>
              <MaterialCommunityIcons name="tent" size={16} color="#3C6E47" />
              <Text style={styles.statText}>{VISITED_PLACES.length} places</Text>
            </View> */}
          </View>
          
          <View style={styles.buttonRow}>
            <CustomButton
              text="Edit Profile"
              onPress={() => navigation.navigate('EditProfile')}
              buttonType="outline"
              size="small"
              style={styles.editButton}
            />
            <CustomButton
              text="Share Profile"
              icon="share"
              onPress={() => {}}
              buttonType="ghost"
              size="small"
            />
          </View>
        </View>
      </View>
      
      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          Passionate outdoor enthusiast and camping lover. Always seeking new adventures in the wild.
          Hiking, fishing, and stargazing are my favorite activities when camping.
        </Text><View style={styles.badgesSection}>
        {/* <Text style={styles.sectionTitle}>Badges</Text>
        <FlatList
          key="badgesList"
          data={BADGES}
          renderItem={renderBadgeItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.badgesList}
        /> */}
      </View>
      </View>
      
      {/* Badges Section */}
      {/*  */}
      
      {/* Content Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
        >
          {['Places', 'Posts', 'Saved', 'Shared'].map((tab) => {
            const tabLowerCase = tab.toLowerCase() as TabOption;
            return (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeTab === tabLowerCase && styles.activeTab
                ]}
                onPress={() => setActiveTab(tabLowerCase)}
              >
                <Text 
                  style={[
                    styles.tabText,
                    activeTab === tabLowerCase && styles.activeTabText
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      
      {/* Content based on selected tab */}
      <View style={styles.contentContainer}>
        {activeTab === 'achievements' ? (
          // Achievements content
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderTitle}>Achievements</Text>
              <View style={styles.totalPointsContainer}>
                <MaterialCommunityIcons name="trophy" size={18} color="#FFD700" />
                <Text style={styles.totalPoints}>{totalPoints} total points</Text>
              </View>
            </View>
            <FlatList
              key="achievementsGrid"
              data={ACHIEVEMENTS}
              renderItem={renderAchievementItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={styles.achievementsList}
            />
          </View>
        ) : activeTab === 'places' ? (
          // Visited Places content
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderTitle}>Places Visited</Text>
              <TouchableOpacity style={styles.addButton}>
                <MaterialIcons name="add" size={18} color="#fff" />
                <Text style={styles.addButtonText}>Add Place</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              key="placesList"
              data={VISITED_PLACES}
              renderItem={renderPlaceItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              contentContainerStyle={styles.placesList}
            />
          </View>
        ) : (
          // Posts, Saved, or Shared content
          <FlatList
            key={`${activeTab}List`}
            data={getFilteredContent()}
            renderItem={renderPostItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <MaterialCommunityIcons name="campfire" size={64} color="#E63946" />
                <Text style={styles.emptyStateText}>
                  No {activeTab} yet
                </Text>
              </View>
            }
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F5',
  },
  coverImage: {
    width: windowWidth,
    height: 150,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8E3',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white',
    marginTop: -40,
  },
  profileInfo: {
    marginLeft: 12,
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A4C34',
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 8,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    fontSize: 14,
    color: '#5A6B60',
    marginLeft: 4,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 8,
  },
  aboutSection: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2A4C34',
  },
  aboutText: {
    fontSize: 14,
    color: '#3E4E44',
    lineHeight: 20,
  },
  badgesSection: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
  },
  badgesList: {
    paddingVertical: 8,
  },
  badgeItem: {
    alignItems: 'center',
    marginRight: 24,
    width: 80,
  },
  badgeName: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    color: '#2A4C34',
  },
  tabsContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8E3',
  },
  tabsScroll: {
    paddingHorizontal: 8,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 4,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3C6E47',
  },
  tabText: {
    fontSize: 14,
    color: '#7c7c7c',
  },
  activeTabText: {
    color: '#3C6E47',
    fontWeight: '500',
  },
  contentContainer: {
    padding: 8,
    backgroundColor: '#F5F8F5',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  sectionHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A4C34',
  },
  totalPointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EDCC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  totalPoints: {
    marginLeft: 4,
    fontWeight: '500',
    color: '#3E4E44',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3C6E47',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 4,
    fontSize: 12,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3C6E47',
    marginLeft: 4,
  },
  postTime: {
    fontSize: 12,
    color: '#7c7c7c',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2A4C34',
    marginBottom: 8,
    lineHeight: 22,
  },
  postImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  postFooter: {
    flexDirection: 'row',
    marginTop: 8,
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  postStatText: {
    fontSize: 12,
    color: '#5A6B60',
    marginLeft: 4,
  },
  achievementsList: {
    paddingHorizontal: 8,
  },
  achievementCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    width: (windowWidth - 64) / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  achievementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pointsBadge: {
    backgroundColor: '#F0EDCC',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  pointsText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3E4E44',
  },
  achievementName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#2A4C34',
  },
  achievementDesc: {
    fontSize: 12,
    color: '#5A6B60',
    marginTop: 4,
    lineHeight: 16,
  },
  placesList: {
    paddingHorizontal: 8,
  },
  placeCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  placeImage: {
    width: '100%',
    height: 120,
  },
  placeOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 8,
  },
  visitBadge: {
    backgroundColor: 'rgba(60, 110, 71, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  visitText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  placeContent: {
    padding: 12,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A4C34',
    marginBottom: 6,
  },
  placeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  placeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeLocationText: {
    fontSize: 12,
    color: '#3C6E47',
    marginLeft: 4,
  },
  placeDate: {
    fontSize: 12,
    color: '#7c7c7c',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#5A6B60',
    marginTop: 16,
  }
});

export default Profile;