
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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