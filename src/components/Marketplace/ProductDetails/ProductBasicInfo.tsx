
// File: components/ProductDetails/ProductBasicInfo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  basicInfoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  reservedBadge: {
    backgroundColor: '#E4E6EB',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },
  reservedText: {
    fontSize: 14,
    color: '#65676B',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  timePosted: {
    fontSize: 14,
    color: '#65676B',
  },
});

export default ProductBasicInfo;