import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  descriptionContent: {
    backgroundColor: '#EBECED',
    padding: 10,
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
  },
});

export default Description;
