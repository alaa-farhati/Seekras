import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Image,
  Platform,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../types/navigation";
import { Icon } from "../../assets/Icons/Index";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Explicitly type the props for CreateProductScreen
type CreateProductScreenProps = NativeStackScreenProps<AppStackParamList, "CreateProduct">;

// Product condition options
const CONDITIONS = ["New", "Like New", "Good", "Fair", "Poor"];

// Categories available for selection
const CATEGORIES = [
  "Electronics", 
  "Clothing", 
  "Home Goods", 
  "Furniture", 
  "Sports Equipment",
  "Toys & Games",
  "Vehicles",
  "Other"
];

// Listing types
const LISTING_TYPES = ["For Sale", "For Trade", "Free", "Wanted"];

const CreateProductScreen: React.FC<CreateProductScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [listingType, setListingType] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Maximum number of photos allowed
  const MAX_PHOTOS = 10;

  const handlePublish = async () => {
    try {
      setIsSubmitting(true);
      
      // Validate required fields
      if (!title || !price || !category || !condition || !listingType) {
        Alert.alert("Missing Information", "Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }
      
      // Here you would typically send the data to your API
      console.log("Publishing product:", {
        title,
        price,
        description,
        location,
        category,
        condition,
        listingType,
        imageCount: selectedImages.length
      });
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        Alert.alert("Success", "Your item has been published!");
        navigation.goBack(); // Navigate back after posting
      }, 1500);
      
    } catch (error) {
      console.error("Error publishing item:", error);
      Alert.alert("Error", "Failed to publish your item. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleAddPhoto = () => {
    // In a real app, use image picker and upload to your server
    if (selectedImages.length < MAX_PHOTOS) {
      // Using a placeholder image for demo purposes
      const newImage = "https://via.placeholder.com/150/EEEEEE/999999?text=Photo";
      setSelectedImages([...selectedImages, newImage]);
    }
  };

  const removePhoto = (index: number) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const isPublishEnabled = title.trim() !== "" && price.trim() !== "";

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      {/* Header with back button and publish button */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Sell item</Text>
        
        <TouchableOpacity 
          style={[
            styles.publishButton, 
            !isPublishEnabled || isSubmitting ? styles.publishButtonDisabled : null
          ]}
          onPress={handlePublish}
          disabled={!isPublishEnabled || isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <Text style={styles.publishButtonText}>Publish</Text>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContent}>
        {/* Photos Section */}
        <View style={styles.photoSection}>
          <TouchableOpacity 
            style={styles.addPhotoButton}
            onPress={handleAddPhoto}
            disabled={selectedImages.length >= MAX_PHOTOS}
          >
            <View style={styles.addPhotoCircle}>
              <Icon name="add" size={30} color="#333" />
            </View>
            <Text style={styles.addPhotoText}>Add photos</Text>
            <Text style={styles.photoCount}>{selectedImages.length}/{MAX_PHOTOS}</Text>
          </TouchableOpacity>
          
          {/* Photo Preview Grid */}
          {selectedImages.length > 0 && (
            <View style={styles.photoGrid}>
              {selectedImages.map((image, index) => (
                <View key={index} style={styles.photoContainer}>
                  <Image source={{ uri: image }} style={styles.photoThumbnail} />
                  <TouchableOpacity 
                    style={styles.removePhotoButton}
                    onPress={() => removePhoto(index)}
                  >
                    <Icon name="close" size={12} color="#000" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
        
        {/* Product Information Form */}
        <View style={styles.formSection}>
          
          
          <TextInput
            style={styles.textInput}
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
          
          <TouchableOpacity style={styles.dropdownInput}>
            <Text style={listingType ? styles.dropdownText : styles.placeholderText}>
              {listingType || "Listing type"}
            </Text>
            <Icon name="chevron-down" size={18} color="#333" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.dropdownInput}>
            <Text style={category ? styles.dropdownText : styles.placeholderText}>
              {category || "Category"}
            </Text>
            <Icon name="chevron-down" size={18} color="#333" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.dropdownInput}>
            <Text style={condition ? styles.dropdownText : styles.placeholderText}>
              {condition || "Condition"}
            </Text>
            <Icon name="chevron-down" size={18} color="#333" />
          </TouchableOpacity>
          
          <TextInput
            style={[styles.textInput, styles.multilineInput]}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            placeholderTextColor="#999"
            textAlignVertical="top"
          />
          
          <TouchableOpacity style={styles.locationInput}>
            <Text style={location ? styles.dropdownText : styles.placeholderText}>
              {location || "Location"}
            </Text>
            <Icon name="location-outline" size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>

     
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EAECEF",
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  publishButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  publishButtonDisabled: {
    opacity: 0.5,
  },
  publishButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  scrollContent: {
    flex: 1,
  },
  photoSection: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EAECEF",
  },
  addPhotoButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  addPhotoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  addPhotoText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  photoCount: {
    fontSize: 14,
    color: "#666",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  photoContainer: {
    position: "relative",
    margin: 5,
  },
  photoThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  removePhotoButton: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EAECEF",
  },
  formSection: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  textInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 12,
    color: "#333",
  },
  multilineInput: {
    minHeight: 120,
    textAlignVertical: "top",
    paddingTop: 14,
  },
  dropdownInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  placeholderText: {
    fontSize: 16,
    color: "#999",
  },
 
});

export default CreateProductScreen;