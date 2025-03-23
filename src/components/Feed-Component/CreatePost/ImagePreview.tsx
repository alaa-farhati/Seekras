// components/ImagePreview.tsx
import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../../../assets/Icons/Index";
import { CreatePostStyles } from "../../../styles/Feed-Styles/CreatePost";


interface ImagePreviewProps {
  images: string[];
  onRemoveImage: (index: number) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ images, onRemoveImage }) => {
  if (images.length === 0) return null;
  
  return (
    <View style={CreatePostStyles.imagePreviewContainer}>
      {images.map((image, index) => (
        <View key={index} style={CreatePostStyles.imageWrapper}>
          <Image source={{ uri: image }} style={CreatePostStyles.previewImage} />
          <TouchableOpacity 
            style={CreatePostStyles.removeImageButton}
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