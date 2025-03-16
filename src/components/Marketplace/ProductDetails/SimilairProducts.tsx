// File: components/ProductDetails/SimilarProducts.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';

const SimilarProducts: React.FC = () => {
  return (
    <View style={styles.similarProductsContainer}>
      <Text style={styles.sectionTitle}>You may also like:</Text>
      <View style={styles.similarProductsGrid}>
        <View style={styles.similarProduct}>
          <View style={styles.similarProductImage} />
          <View style={styles.similarProductInfo}>
            <Text style={styles.similarProductPrice}>$120</Text>
            <TouchableOpacity>
              <Icon name="heart-outline" size={20} color="#65676B" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.similarProduct}>
          <View style={styles.similarProductImage} />
          <View style={styles.similarProductInfo}>
            <Text style={styles.similarProductPrice}>$85</Text>
            <TouchableOpacity>
              <Icon name="heart-outline" size={20} color="#65676B" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  similarProductsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 8,
    marginBottom: 80, // Add padding to avoid bottom navigation overlap
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  similarProductsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  similarProduct: {
    width: '48%',
  },
  similarProductImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#E4E6EB',
    borderRadius: 8,
    marginBottom: 8,
  },
  similarProductInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  similarProductPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SimilarProducts;
