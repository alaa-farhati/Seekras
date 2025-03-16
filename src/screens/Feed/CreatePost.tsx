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
import axios from "axios";

// Mock user data (replace with actual user data from your auth system)
const userProfileImage = "https://randomuser.me/api/portraits/men/53.jpg";
const userName = "Alex Johnson";
const userId = "46796f09-4fa1-4465-90de-849dd0bb01d4"; // User ID from your example

// API endpoint
const API_URL = "http://localhost:3000/feed/create-post";

// Explicitly type the props for CreatePostScreen
type CreatePostScreenProps = NativeStackScreenProps<AppStackParamList, "CreatePost">;

// Post type definition
type PostType = "photo" | "video" | "text";

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [destination, setDestination] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isVideo, setIsVideo] = useState<boolean[]>([]);
  const [isPublic, setIsPublic] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Determine post type based on media
  const getPostType = (): PostType => {
    if (selectedImages.length === 0) return "text";
    if (isVideo.some(v => v)) return "video";
    return "photo";
  };

  const handlePost = async () => {
    try {
      setIsSubmitting(true);
      
      // Prepare post data
      const postData = {
        userId: userId,
        groupId: null,
        content: postContent,
        mediaUrls: selectedImages.length ? selectedImages.join(",") : null,
        postType: getPostType(),
        visibility: isPublic ? "public" : "private",
        locationName: destination || null
      };
      
      console.log("Submitting post:", postData);
      
      // Send post to API
      const response = await axios.post(API_URL, postData);
      
      console.log("Post created successfully:", response.data);
      Alert.alert("Success", "Your post has been published!");
      navigation.goBack(); // Navigate back after posting
    } catch (error) {
      console.error("Error creating post:", error);
      Alert.alert("Error", "Failed to publish your post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddPhoto = () => {
    // In a real app, use image picker and upload to your server
    console.log("Adding photo");
    // Using the profile image as a placeholder
    setSelectedImages([...selectedImages, "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg"]);
    setIsVideo([...isVideo, false]);
  };

  const handleAddVideo = () => {
    // In a real app, use video picker and upload to your server
    console.log("Adding video");
    // Example of adding a placeholder video thumbnail
    setSelectedImages([...selectedImages, "https://via.placeholder.com/150/333333/FFFFFF?text=VIDEO"]);
    setIsVideo([...isVideo, true]);
  };

  const toggleVisibility = () => {
    setIsPublic(!isPublic);
  };

  const removeMedia = (index: number) => {
    const newImages = [...selectedImages];
    const newIsVideo = [...isVideo];
    newImages.splice(index, 1);
    newIsVideo.splice(index, 1);
    setSelectedImages(newImages);
    setIsVideo(newIsVideo);
  };

  const isPostEnabled = destination.trim() !== "" || postContent.trim() !== "" || selectedImages.length > 0;

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView style={styles.scrollContent} contentContainerStyle={{paddingBottom: 20}}>
        {/* Header with user profile */}
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: userProfileImage }} style={styles.profilePicture} />
            <View style={styles.userInfoContainer}>
              <Text style={styles.username}>{userName}</Text>
              <TouchableOpacity style={styles.visibilitySelector} onPress={toggleVisibility}>
                <Icon name={isPublic ? "globe-outline" : "lock-closed-outline"} size={14} color="#666" />
                <Text style={styles.visibilityText}>{isPublic ? "Public" : "Private"}</Text>
                <Icon name="chevron-down" size={14} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity 
            onPress={handlePost} 
            style={[
              styles.postButton, 
              !isPostEnabled || isSubmitting ? styles.postButtonDisabled : null
            ]}
            disabled={!isPostEnabled || isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.postButtonText}>Post</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Destination Input with card styling */}
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <View style={styles.iconWrapper}>
              <Icon name="location-outline" size={20} color="#5E72E4" />
            </View>
            <TextInput
              style={styles.destinationInput}
              placeholder="Where are you traveling to?"
              placeholderTextColor="#999"
              value={destination}
              onChangeText={setDestination}
            />
          </View>
        </View>

        {/* Content Input with card styling */}
        <View style={styles.card}>
          <TextInput
            style={styles.contentInput}
            placeholder="Share your travel experience..."
            placeholderTextColor="#999"
            multiline
            value={postContent}
            onChangeText={setPostContent}
            textAlignVertical="top"
          />
        </View>

        {/* Image/Video Preview Section */}
        {selectedImages.length > 0 && (
          <View style={styles.mediaPreviewCard}>
            <Text style={styles.sectionTitle}>Media</Text>
            <View style={styles.imagePreviewContainer}>
              {selectedImages.map((image, index) => (
                <View key={index} style={styles.imageWrapper}>
                  <Image source={{ uri: image }} style={styles.previewImage} />
                  {isVideo[index] && (
                    <View style={styles.videoIndicator}>
                      <Icon name="play-circle" size={30} color="#FFFFFF" />
                    </View>
                  )}
                  <TouchableOpacity 
                    style={styles.removeImageButton}
                    onPress={() => removeMedia(index)}
                  >
                    <View style={styles.removeButtonCircle}>
                      <Icon name="close" size={16} color="#fff" />
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bottom Action Bar with elevated design */}
      <View style={[styles.actionBar, { paddingBottom: insets.bottom || 16 }]}>
        <TouchableOpacity style={styles.actionButton} onPress={handleAddPhoto}>
          <Icon name="image-outline" size={22} color="#5E72E4" />
          <Text style={styles.actionText}>Photos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleAddVideo}>
          <Icon name="videocam-outline" size={22} color="#5E72E4" />
          <Text style={styles.actionText}>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="people-outline" size={22} color="#5E72E4" />
          <Text style={styles.actionText}>Tag</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="happy-outline" size={22} color="#5E72E4" />
          <Text style={styles.actionText}>Feeling</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#EAECEF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  postButton: {
    backgroundColor: "#5E72E4",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: "#5E72E4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    minWidth: 70,
    alignItems: 'center',
    left:-80
  },
  postButtonDisabled: {
    backgroundColor: "#B8C2F8",
    shadowOpacity: 0,
    elevation: 0,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  scrollContent: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  mediaPreviewCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#EEF0FF",
  },
  userInfoContainer: {
    flex: 1,
  },
  username: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  visibilitySelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FF",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  visibilityText: {
    fontSize: 12,
    color: "#666",
    marginHorizontal: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  iconWrapper: {
    marginRight: 10,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  destinationInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  contentInput: {
    padding: 16,
    fontSize: 16,
    color: "#333",
    minHeight: 150,
    textAlignVertical: "top",
  },
  imagePreviewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
    justifyContent: 'center',
  },
  imageWrapper: {
    position: "relative",
    margin: 4,
  },
  previewImage: {
    width: 105,
    height: 105,
    borderRadius: 12,
  },
  videoIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 12,
  },
  removeImageButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 10,
  },
  removeButtonCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  actionBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: "#EAECEF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  actionButton: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  actionText: {
    marginTop: 4,
    color: "#5E72E4",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default CreatePostScreen;