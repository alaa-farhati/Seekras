import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';
import { styles } from '../../../styles/Marketplace/ProductDetails';
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



export default Header;