
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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