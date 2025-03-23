
// File: components/ProductDetails/ProductBasicInfo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../../../styles/Marketplace-Styles/ProductDetails';
interface ProductBasicInfoProps {
  title: string;
  price: number;
  postedTime: string;
  isReserved?: boolean;
}

const ProductBasicInfo: React.FC<ProductBasicInfoProps> = ({ 
  title, 
  price, 
  postedTime, 
  isReserved = false 
}) => {
  return (
    <View style={styles.basicInfoContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.productName}>{title}</Text>
        {isReserved && (
          <View style={styles.reservedBadge}>
            <Text style={styles.reservedText}>Reserved</Text>
          </View>
        )}
      </View>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.timePosted}>{postedTime}</Text>
    </View>
  );
};



export default ProductBasicInfo;