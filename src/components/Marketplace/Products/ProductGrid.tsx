import React from 'react';
import { FlatList, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ProductCard from './ProductCard';
import styles from './MarketPlaceStyles';
import { Product } from '../../../data/Marketplace';
import { AppStackParamList } from '../../../types/navigation';

interface ProductGridProps {
  products: Product[];
  navigation: NativeStackNavigationProp<AppStackParamList, 'Marketplace'>;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, navigation }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      scrollEnabled={false}
      contentContainerStyle={styles.productsGrid}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.productRow}
    />
  );
};

export default ProductGrid;
