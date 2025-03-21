import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Share,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Icon } from '../../assets/Icons/Index';


// Types
type AppStackParamList = {
  Home: undefined;
  Marketplace: undefined;
  ProductDetails: { productId: string };
  // Add other screens as needed
};

type ProductDetailsScreenProps = NativeStackScreenProps<AppStackParamList, 'ProductDetails'>;

// Product interface
interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  postedTime: string;
  isSponsored?: boolean;
  isSaved?: boolean;
  category?: string;
  description?: string;
  condition?: string;
  sellerName?: string;
  sellerRating?: number;
  sellerJoined?: string;
  sellerImage?: string;
  views?: number;
  additionalImages?: string[];
}

function ProductDetailsScreen({ route, navigation }: ProductDetailsScreenProps) {
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Dummy products data - normally this would come from an API or context
  const products: Product[] = [
    {
      id: '1',
      title: 'Camping product - Excellent Condition',
      price: 899,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
      location: 'Brooklyn, NY',
      postedTime: '2 hours ago',
      isSponsored: true,
      category: 'electronics',
      description: 'Camping product in excellent condition. 256GB storage, Pacific Blue color. Comes with original charger and box. Battery health at 92%. No scratches or dents.',
      condition: 'Used - Like New',
      sellerName: 'John Smith',
      sellerRating: 4.8,
      sellerJoined: 'January 2020',
      sellerImage: 'https://randomuser.me/api/portraits/men/21.jpg',
      views: 142,
      additionalImages: [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images"
      ],
    },
    {
      id: '9',
      title: '4-Person Camping Tent - Waterproof',
      price: 129,
      image: 'https://randomuser.me/api/portraits/men/35.jpg',
      location: 'Upstate NY',
      postedTime: 'Just now',
      isSponsored: false,
      isSaved: true,
      category: 'camping',
      description: 'High-quality 4-person camping tent with waterproof construction. Features include an easy setup design, reinforced floor, mesh windows for ventilation, and a rainfly. Perfect for family camping trips and outdoor adventures. Used only twice, in excellent condition.',
      condition: 'Used - Excellent',
      sellerName: 'Mike Johnson',
      sellerRating: 4.9,
      sellerJoined: 'March 2022',
      sellerImage: 'https://randomuser.me/api/portraits/men/35.jpg',
      views: 56,
      additionalImages: [
        'https://randomuser.me/api/portraits/men/35.jpg',
        'https://randomuser.me/api/portraits/men/36.jpg',
        'https://randomuser.me/api/portraits/men/37.jpg',
        'https://randomuser.me/api/portraits/men/38.jpg',
      ],
    },
    // Add other products as needed
  ];

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setIsSaved(foundProduct.isSaved || false);
    }
  }, [productId]);

  const handleSave = () => {
    setIsSaved(!isSaved);
    // In a real app, you would update this to your backend
  };

  const handleShare = async () => {
    if (product) {
      try {
        await Share.share({
          message: `Check out this ${product.title} for $${product.price} on Marketplace!`,
        });
      } catch (error) {
        Alert.alert('Error sharing product');
      }
    }
  };

  const handleContact = () => {
    Alert.alert('Contact Seller', 'This would open a chat with the seller.');
  };

  const handleImagePress = (index: number) => {
    setSelectedImageIndex(index);
  };

  if (!product) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Loading product details...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
            <Icon name="share-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleSave}>
            <Icon name={isSaved ? "bookmark" : "bookmark-outline"} size={24} color={isSaved ? "#1877F2" : "#000"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Image */}
        <View style={styles.mainImageContainer}>
          <Image 
            source={{ uri: product.additionalImages ? product.additionalImages[selectedImageIndex] : product.image }} 
            style={styles.mainImage} 
            resizeMode="cover"
          />
          <View style={styles.imageCounter}>
            <Text style={styles.imageCounterText}>
              {selectedImageIndex + 1}/{product.additionalImages?.length || 1}
            </Text>
          </View>
        </View>
        
        {/* Thumbnail Images */}
        {product.additionalImages && product.additionalImages.length > 1 && (
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thumbnailsContainer}
          >
            {product.additionalImages.map((image, index) => (
              <TouchableOpacity 
                key={index}
                onPress={() => handleImagePress(index)}
                style={[
                  styles.thumbnailWrapper,
                  selectedImageIndex === index && styles.selectedThumbnail
                ]}
              >
                <Image source={{ uri: image }} style={styles.thumbnailImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        
        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <Text style={styles.price}>${product.price.toLocaleString()}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.location}>{product.location} • {product.postedTime}</Text>
          <View style={styles.divider} />
          
          {/* Product Details */}
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Condition</Text>
                <Text style={styles.detailValue}>{product.condition}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Category</Text>
                <Text style={styles.detailValue}>{product.category}</Text>
              </View>
            </View>
            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Views</Text>
                <Text style={styles.detailValue}>{product.views}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Posted</Text>
                <Text style={styles.detailValue}>{product.postedTime}</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          
          <View style={styles.divider} />
          
          {/* Seller Info */}
          <View style={styles.sellerSection}>
            <Text style={styles.sectionTitle}>Seller Information</Text>
            <View style={styles.sellerInfo}>
              <Image source={{ uri: product.sellerImage }} style={styles.sellerImage} />
              <View style={styles.sellerDetails}>
                <Text style={styles.sellerName}>{product.sellerName}</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={16} color="#FFD700" />
                  <Text style={styles.sellerRating}>{product.sellerRating} • Member since {product.sellerJoined}</Text>
                </View>
              </View>
            </View>
          </View>
          
          {/* Similar Items Placeholder */}
          <View style={styles.similarItemsSection}>
            <Text style={styles.sectionTitle}>Similar Items</Text>
            <Text style={styles.placeholderText}>Similar items would be shown here</Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Action Bar */}
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.messageButton} onPress={handleContact}>
          <Icon name="chatbubble-outline" size={20} color="#fff" />
          <Text style={styles.messageButtonText}>Message Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.offerButton}>
          <Text style={styles.offerButtonText}>Make Offer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
    zIndex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#E4E6EB',
  },
  headerActions: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: '#E4E6EB',
  },
  mainImageContainer: {
    width: '100%',
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#E4E6EB',
  },
  imageCounter: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  imageCounterText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  thumbnailsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  thumbnailWrapper: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedThumbnail: {
    borderColor: '#1877F2',
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    backgroundColor: '#E4E6EB',
  },
  productInfoContainer: {
    backgroundColor: '#fff',
    padding: 15,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
    fontWeight: '500',
  },
  location: {
    fontSize: 14,
    color: '#65676B',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#E4E6EB',
    marginVertical: 15,
  },
  detailsSection: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#65676B',
    marginBottom: 3,
  },
  detailValue: {
    fontSize: 16,
    color: '#000',
  },
  descriptionSection: {
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
  },
  sellerSection: {
    marginBottom: 15,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E4E6EB',
  },
  sellerDetails: {
    marginLeft: 15,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerRating: {
    marginLeft: 5,
    fontSize: 14,
    color: '#65676B',
  },
  similarItemsSection: {
    marginTop: 10,
    marginBottom: 80, // Extra space for the action bar
  },
  placeholderText: {
    fontSize: 16,
    color: '#65676B',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
  actionBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E4E6EB',
    elevation: 5,
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1877F2',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 2,
    marginRight: 10,
  },
  messageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
  },
  offerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4E6EB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
  },
  offerButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductDetailsScreen



// same component another style 

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
//   StatusBar,
//   Dimensions,
//   Alert,
// } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Import components
// import ProductDetailsHeader from '../../components/Marketplace/ProductDetails/ProductDetailHeader';
// import ProductImages from '../../components/Marketplace/ProductDetails/ProductImages';
// import ProductBasicInfo from '../../components/Marketplace/ProductDetails/ProductBasicInfo';
// import Description from '../../components/Marketplace/ProductDetails/Description';
// import SellerInfo from '../../components/Marketplace/ProductDetails/SellerInfo';
// import SimilarProducts from '../../components/Marketplace/ProductDetails/SimilairProducts';
// import MessageInput from '../../components/Marketplace/ProductDetails/MessageInput';

// Types
// type AppStackParamList = {
//   Home: undefined;
//   Marketplace: undefined;
//   ProductDetails: { productId: string };
//   Add other screens as needed
// };

// type ProductDetailsScreenProps = NativeStackScreenProps<AppStackParamList, 'ProductDetails'>;

// Product interface
// interface Product {
//   id: string;
//   title: string;
//   price: number;
//   image: string;
//   location: string;
//   postedTime: string;
//   isSponsored?: boolean;
//   isSaved?: boolean;
//   category?: string;
//   description?: string;
//   condition?: string;
//   sellerName?: string;
//   sellerRating?: number;
//   sellerJoined?: string;
//   sellerImage?: string;
//   views?: number;
//   additionalImages?: string[];
// }

// function ProductDetailsScreen({ route, navigation }: ProductDetailsScreenProps) {
//   const { productId } = route.params;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [isSaved, setIsSaved] = useState<boolean>(false);

//   Dummy products data - normally this would come from an API or context
//   const products: Product[] = [
//     {
//       id: '1',
//       title: 'Camping product ',
//       price: 899,
//       image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
//       location: 'Brooklyn, NY',
//       postedTime: '2 hours ago',
//       isSponsored: true,
//       category: 'electronics',
//       description: 'Camping product in excellent condition. 256GB storage, Pacific Blue color. Comes with original charger and box. Battery health at 92%. No scratches or dents.',
//       condition: 'Used - Like New',
//       sellerName: 'John Smith',
//       sellerRating: 4.8,
//       sellerJoined: 'January 2020',
//       sellerImage: 'https://randomuser.me/api/portraits/men/21.jpg',
//       views: 142,
//       additionalImages: [
//         'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
//         'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
//         'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
//         'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
//         'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
//         'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images'
//       ],
//     },
//     {
//       id: '9',
//       title: '4-Person Camping Tent - Waterproof',
//       price: 129,
//       image: 'https://randomuser.me/api/portraits/men/35.jpg',
//       location: 'Upstate NY',
//       postedTime: 'Just now',
//       isSponsored: false,
//       isSaved: true,
//       category: 'camping',
//       description: 'High-quality 4-person camping tent with waterproof construction. Features include an easy setup design, reinforced floor, mesh windows for ventilation, and a rainfly. Perfect for family camping trips and outdoor adventures. Used only twice, in excellent condition.',
//       condition: 'Used - Excellent',
//       sellerName: 'Mike Johnson',
//       sellerRating: 4.9,
//       sellerJoined: 'March 2022',
//       sellerImage: 'https://randomuser.me/api/portraits/men/35.jpg',
//       views: 56,
//       additionalImages: [
//         'https://randomuser.me/api/portraits/men/35.jpg',
//         'https://randomuser.me/api/portraits/men/36.jpg',
//         'https://randomuser.me/api/portraits/men/37.jpg',
//         'https://randomuser.me/api/portraits/men/38.jpg',
//       ],
//     },
//     Add other products as needed
//   ];

//   useEffect(() => {
//     Find the product by ID
//     const foundProduct = products.find(p => p.id === productId);
//     if (foundProduct) {
//       setProduct(foundProduct);
//       setIsSaved(foundProduct.isSaved || false);
//     }
//   }, [productId]);

//   const handleSave = () => {
//     setIsSaved(!isSaved);
//     In a real app, you would update this to your backend
//   };

//   const handleShare = async () => {
//     Alert.alert('Share', 'Product sharing functionality would be implemented here');
//   };

//   const handleContact = () => {
//     Alert.alert('Contact Seller', 'This would open a chat with the seller.');
//   };

//   const handleMakeOffer = () => {
//     Alert.alert('Make Offer', 'Offer functionality would be implemented here');
//   };

//   if (!product) {
//     return (
//       <SafeAreaView style={styles.loadingContainer}>
//         <Text>Loading product details...</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      
//       {/* Header */}
//       <ProductDetailsHeader 
//         navigation={navigation}
//         isSaved={isSaved}
//         handleSave={handleSave}
//         handleShare={handleShare}
//       />
      
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Product Images */}
//         <ProductImages images={product.additionalImages || [product.image]} mainImage={product.image[0]} />
//         {/* Product Basic Info */}
//         <ProductBasicInfo
//           price={product.price}
//           title={product.title}
//           isReserved = {true}
//           postedTime={product.postedTime}
         
//         />
      
//         {/* Description */}
//         <Description description={product.description || 'No description available'} />
        
       
        
//         {/* Seller Info */}
//         <SellerInfo
//          sellerName='Ben arouss'
//          condition='Used - Like New'
//         />
        
        
        
//         {/* Similar Products */}
//         <SimilarProducts />
//       </ScrollView>
      
//       {/* Message Input */}
//       <MessageInput />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F2F5',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F0F2F5',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#E4E6EB',
//     marginVertical: 15,
//   },
// });

// export default ProductDetailsScreen;