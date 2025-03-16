// File: components/ProductDetails/SellerInfo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';

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

const styles = StyleSheet.create({
  sellerInfoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 8,
  },
  sellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sellerIconContainer: {
    width: 30,
  },
  sellerName: {
    fontSize: 16,
    color: '#000',
  },
  conditionText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SellerInfo;