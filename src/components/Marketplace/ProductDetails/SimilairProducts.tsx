// File: components/ProductDetails/SimilarProducts.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';
import { styles } from '../../../styles/Marketplace/ProductDetails';
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



export default SimilarProducts;
