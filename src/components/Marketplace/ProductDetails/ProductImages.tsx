import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  mainImageContainer: {
    width: '100%',
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: 240,
    backgroundColor: '#E4E6EB',
  },
  imageIndicators: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCC',
    marginHorizontal: 3,
  },
  activeIndicator: {
    backgroundColor: '#666',
  },
});

export default ProductImages;