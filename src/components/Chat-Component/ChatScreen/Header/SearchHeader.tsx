import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../../hooks/useTheme';
import { sizes } from '../../../../constants';
import CustomInput from '../../../Reusables-Component/CustomInput';
import { ChatScreenStyles } from '../../../../styles/Chat-Styles/ChatScreen';

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onPressAddGroup?: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ searchQuery, setSearchQuery, onPressAddGroup }) => {
  const { theme } = useTheme();

  return (
    <View style={ChatScreenStyles.searchAndGroupContainer}> 
      {/* Search Bar using CustomInput */}
      <CustomInput
        placeholder="Search active users..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        rightIcon='search-outline'
        inputType="search"
        containerStyle={ChatScreenStyles.inputContainer}
      />

      {/* Add Group Button */}
      {
        onPressAddGroup && (
          <TouchableOpacity style={ChatScreenStyles.addGroupIcon} onPress={onPressAddGroup}>
            <Ionicons name="people-outline" size={sizes.icon.medium} color={theme.text} />
          </TouchableOpacity>
        )
      }
    
    </View>
  );
};


export default SearchHeader;
