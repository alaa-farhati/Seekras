import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../../../styles/Marketplace-Styles/ProductDetails';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.sectionTitle}>Description</Text>
      <View style={styles.descriptionContent}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};



export default Description;
