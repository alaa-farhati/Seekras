import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
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