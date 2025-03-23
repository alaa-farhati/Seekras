// components/LocationInput.tsx
import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../../../assets/Icons/Index";
import { CreatePostStyles } from "../../../styles/Feed-Styles/CreatePost";


interface LocationInputProps {
  destination: string;
  onDestinationChange: (text: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ 
  destination, 
  onDestinationChange 
}) => {
  return (
    <TouchableOpacity style={CreatePostStyles.optionContainer}>
      <Icon name="location-outline" size={24} color="#666" />
      <TextInput
        style={CreatePostStyles.destinationInput}
        placeholder="Destination"
        placeholderTextColor="#999"
        value={destination}
        onChangeText={onDestinationChange}
      />
    </TouchableOpacity>
  );
};



export default LocationInput;