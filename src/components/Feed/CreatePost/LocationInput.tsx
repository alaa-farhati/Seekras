// components/LocationInput.tsx
import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../../../assets/Icons/Index";
import { fonts } from "../../../constants";
import { styles } from "../../../styles/Feed";
interface LocationInputProps {
  destination: string;
  onDestinationChange: (text: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ 
  destination, 
  onDestinationChange 
}) => {
  return (
    <TouchableOpacity style={styles.optionContainer}>
      <Icon name="location-outline" size={24} color="#666" />
      <TextInput
        style={styles.destinationInput}
        placeholder="Destination"
        placeholderTextColor="#999"
        value={destination}
        onChangeText={onDestinationChange}
      />
    </TouchableOpacity>
  );
};



export default LocationInput;