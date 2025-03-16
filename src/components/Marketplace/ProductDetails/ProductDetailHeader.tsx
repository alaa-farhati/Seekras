import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';

interface HeaderProps {
  navigation: any;
  handleShare: () => void;
  handleSave: () => void;
  isSaved: boolean;
}

const Header: React.FC<HeaderProps> = ({ navigation, handleShare, handleSave, isSaved }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Product details</Text>
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
          <Icon name="share-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleSave}>
          <Icon name={isSaved ? "bookmark" : "bookmark-outline"} size={24} color={isSaved ? "#1877F2" : "#000"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 15,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerActions: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});

export default Header;