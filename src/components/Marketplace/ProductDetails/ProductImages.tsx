import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { styles } from '../../../styles/Marketplace/ProductDetails';
interface ProductImagesProps {
  images: string[];
  mainImage: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ images, mainImage }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  
  const displayImages = images.length > 0 ? images : [mainImage];
  
  return (
    <View>
      <View style={styles.mainImageContainer}>
        <Image 
          source={{ uri: displayImages[selectedImageIndex] }} 
          style={styles.mainImage} 
          resizeMode="cover"
        />
        <View style={styles.imageIndicators}>
          {displayImages.length > 1 && displayImages.map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.indicator, 
                selectedImageIndex === index && styles.activeIndicator
              ]} 
            />
          ))}
        </View>
      </View>
    </View>
  );
};



export default ProductImages;