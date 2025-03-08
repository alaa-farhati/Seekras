import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../../hooks/useTheme';
import { sizes } from '../../../../constants';
import CustomInput from '../../../Reusables/CustomInput';

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onPressAddGroup?: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ searchQuery, setSearchQuery, onPressAddGroup }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.searchAndGroupContainer}> 
      {/* Search Bar using CustomInput */}
      <CustomInput
        placeholder="Search active users..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        rightIcon='search-outline'
        inputType="search"
        containerStyle={styles.inputContainer}
      />

      {/* Add Group Button */}
      <TouchableOpacity style={styles.addGroupIcon} onPress={onPressAddGroup}>
        <Ionicons name="people-circle-outline" size={sizes.icon.medium} color={theme.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchAndGroupContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15, 
    marginTop: 10,
  },
  inputContainer: {
    flex: 1, // Makes the input take most of the space
    marginRight: 10, // Spacing between input and button
    height:40
  },
  addGroupIcon: {
    paddingLeft: 10,
  },
});

export default SearchHeader;
