import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView,Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { products } from '../../data/Marketplace';
import CustomInput from '../../components/Reusables-Component/CustomInput';
import CategoryList from '../../components/Marketplace-Component/Products/CategoryList';
import ProductGrid from '../../components/Marketplace-Component/Products/ProductGrid';
import styles from '../../components/Marketplace-Component/Products/MarketPlaceStyles';
import { AppStackParamList } from '../../types/navigation';
import { fonts, sizes } from '../../constants';


type MarketplaceScreenProps = NativeStackScreenProps<AppStackParamList, 'Marketplace'>;

const MarketplaceScreen: React.FC<MarketplaceScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 0}}>
        <View style={{paddingHorizontal: 15}}>
        <CustomInput
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          rightIcon="search-outline"
          containerStyle={{ height: 44, }}
        />
        </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:13,marginBottom:10}}>
        <Text style={{fontFamily:fonts.medium,fontSize:sizes.text.label}}>{'Categories'}</Text>
        <Text style={{fontFamily:fonts.medium,fontSize:sizes.text.small}}>{'See More'}</Text>
        </View>
        <CategoryList activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </View>
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:13,marginBottom:10}}>
        <Text style={{fontFamily:fonts.medium,fontSize:sizes.text.label}}>{'Featured Products'}</Text>
       
        </View>
        <ProductGrid products={filteredProducts} navigation={navigation} />
      </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarketplaceScreen;
