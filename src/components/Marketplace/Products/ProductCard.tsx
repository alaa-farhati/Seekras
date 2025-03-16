import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from '../../../assets/Icons/Index';
import { Product } from '../../../data/Marketplace';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './MarketPlaceStyles';
import { AppStackParamList } from '../../../types/navigation';

interface ProductCardProps {
  product: Product;
  navigation: NativeStackNavigationProp<AppStackParamList, 'Marketplace'>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        {product.isSaved && (
          <View style={styles.savedBadge}>
            <Icon name="bookmark" size={16} color="#fff" />
          </View>
        )}
      </View>
      <View style={styles.productInfo}>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${product.price.toLocaleString()}</Text>
          <TouchableOpacity>
            <Icon name="heart" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        {/* <View style={styles.bottomRow}>
          <Text style={styles.timePosted}>{product.postedTime}</Text>
          {product.isSponsored && <Text style={styles.sponsored}>Sponsored</Text>}
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
