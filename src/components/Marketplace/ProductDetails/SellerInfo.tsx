// File: components/ProductDetails/SellerInfo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';
import { styles } from '../../../styles/Marketplace/ProductDetails';
interface SellerInfoProps {
  sellerName: string;
  condition: string;
}

const SellerInfo: React.FC<SellerInfoProps> = ({ sellerName, condition }) => {
  return (
    <View style={styles.sellerInfoContainer}>
      <View style={styles.sellerRow}>
        <View style={styles.sellerIconContainer}>
          <Icon name="person-circle" size={24} color="#65676B" />
        </View>
        <Text style={styles.sellerName}>{sellerName}</Text>
      </View>
      <View style={styles.sellerRow}>
        <View style={styles.sellerIconContainer}>
          <Icon name="refresh-circle" size={24} color="#65676B" />
        </View>
        <Text style={styles.conditionText}>{condition}</Text>
      </View>
    </View>
  );
};


export default SellerInfo;