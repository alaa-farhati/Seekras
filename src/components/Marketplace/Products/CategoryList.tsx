import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { Icon, IconName } from '../../../assets/Icons/Index';
import styles from './MarketPlaceStyles';
import { fonts } from '../../../constants';

interface Category {
  id: string;
  name: string;
  icon: IconName;
}

interface CategoryListProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories: Category[] = [
  { id: 'all', name: 'All', icon: 'grid' },
  { id: 'vehicles', name: 'Vehicles', icon: 'car' },
  { id: 'property', name: 'Property', icon: 'home' },
  { id: 'furniture', name: 'Furniture', icon: 'bed' },
  { id: 'electronics', name: 'Electronics', icon: 'laptop' },
  { id: 'clothing', name: 'Clothing', icon: 'shirt' },
  { id: 'hobbies', name: 'Hobbies', icon: 'game-controller' },
  { id: 'garden', name: 'Garden', icon: 'flower' },
  { id: 'camping', name: 'Camping', icon: 'bonfire' },
];

const CategoryList: React.FC<CategoryListProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
            ]}
            onPress={() => setActiveCategory(item.id)}
          >
            <TouchableOpacity 
            onPress={() => setActiveCategory(item.id)}
            style={{backgroundColor:activeCategory === item.id ? '#E7F3FF' : '#fff',padding:10,borderRadius:10}}>
            <Icon
              name={item.icon}
              size={24}
              color={activeCategory === item.id ? '#1877F2' : '#65676B'}
            />
            </TouchableOpacity>
           
            <Text
              style={[
                styles.categoryText,
                {fontFamily:fonts.medium},
                activeCategory === item.id && styles.activeCategoryText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
      />
    </View>
  );
};

export default CategoryList;
