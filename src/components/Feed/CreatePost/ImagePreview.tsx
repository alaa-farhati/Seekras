// components/ImagePreview.tsx
import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../../../assets/Icons/Index";
import { styles } from "../../../styles/Feed";

interface ImagePreviewProps {
  images: string[];
  onRemoveImage: (index: number) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ images, onRemoveImage }) => {
  if (images.length === 0) return null;
  
  return (
    <View style={styles.imagePreviewContainer}>
      {images.map((image, index) => (
        <View key={index} style={styles.imageWrapper}>
          <Image source={{ uri: image }} style={styles.previewImage} />
          <TouchableOpacity 
            style={styles.removeImageButton}
            onPress={() => onRemoveImage(index)}
          >
            <Icon name="close-circle" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};



export default ImagePreview;