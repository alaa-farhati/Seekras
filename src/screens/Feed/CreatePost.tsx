// CreatePostScreen.tsx
import React, { useState, useCallback } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../types/navigation";
import { Icon } from "../../assets/Icons/Index";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";


// Import Components
import UserInfo from "../../components/Feed/CreatePost/UserInfo";
import PostContentInput from "../../components/Feed/CreatePost/PostContentInput";
import LocationInput from "../../components/Feed/CreatePost/LocationInput";
import ImagePreview from "../../components/Feed/CreatePost/ImagePreview";
import TaggedPeople from "../../components/Feed/CreatePost/TaggedPeople";
import TagPeopleModal from "../../components/Feed/CreatePost/TaggedPeopleModal";
import { styles } from "../../styles/Feed";

// API endpoint
const API_URL = "http://localhost:3000/feed/create-post";

// Mock user data
const userProfileImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeebom.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fhow-to-create-reddit-avatar-feat..jpg%3Fquality%3D75%26strip%3Dall&f=1&nofb=1&ipt=e964bb1c7d874892b13bb9ef2dea87719eacb554fbfce08cc4f056a9c983bc5d&ipo=images";
const userName = "AdventureSeeker";
const userId = "46796f09-4fa1-4465-90de-849dd0bb01d4";

// Mock friends/contacts data for tagging
const contacts = [
  { id: "1", name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "2", name: "Michael Brown", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: "3", name: "Emily Wilson", avatar: "https://randomuser.me/api/portraits/women/17.jpg" },
  { id: "4", name: "David Clark", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: "5", name: "Sarah Johnson", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
];

type CreatePostScreenProps = NativeStackScreenProps<AppStackParamList, "CreatePost">;
type PostType = "photo" | "video" | "text";

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tagModalVisible, setTagModalVisible] = useState(false);
  const [taggedPeople, setTaggedPeople] = useState<typeof contacts>([]);

  // Cleanup when leaving the screen
  useFocusEffect(
    useCallback(() => {
      // Setup code when screen is focused

      return () => {
        // Cleanup function when screen is unfocused
        setTitle("");
        setBody("");
        setDestination("");
        setSelectedImages([]);
        setTaggedPeople([]);
        setIsSubmitting(false);
        setTagModalVisible(false);
      };
    }, [])
  );

  // Determine post type based on media
  const getPostType = (): PostType => {
    if (selectedImages.length === 0) return "text";
    return "photo"; // Simplified for now, can add video support later
  };

  const handlePost = async () => {
    try {
      setIsSubmitting(true);
      
      // Prepare post data
      const postData = {
        userId: userId,
        title: title,
        content: body,
        mediaUrls: selectedImages.length ? selectedImages.join(",") : null,
        postType: getPostType(),
        locationName: destination || null,
        taggedUsers: taggedPeople.map(person => person.id).join(",")
      };
      
      console.log("Submitting post:", postData);
      
      // Send post to API
      const response = await axios.post(API_URL, postData);
      
      console.log("Post created successfully:", response.data);
      Alert.alert("Success", "Your post has been published!");
      navigation.goBack();
    } catch (error) {
      console.error("Error creating post:", error);
      Alert.alert("Error", "Failed to publish your post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddPhotos = () => {
    // In a real app, use image picker and upload to your server
    console.log("Adding photos");
    // Using a placeholder image
    setSelectedImages([...selectedImages, "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg"]);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const toggleTagPeople = () => {
    setTagModalVisible(!tagModalVisible);
  };

  const handleTagPerson = (person: { id: string; name: string; avatar: string; }) => {
    // Check if person is already tagged
    if (taggedPeople.some(p => p.id === person.id)) {
      // Remove from tagged list
      setTaggedPeople(taggedPeople.filter(p => p.id !== person.id));
    } else {
      // Add to tagged list
      setTaggedPeople([...taggedPeople, person]);
    }
  };

  const isPostEnabled = title.trim() !== "" || body.trim() !== "" || destination.trim() !== "";

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      

      <ScrollView style={styles.scrollContent}>
        {/* User Info */}
        <UserInfo avatarUrl={userProfileImage} userName={userName} />

        {/* Post Content Input */}
        <PostContentInput 
          title={title}
          body={body}
          onTitleChange={setTitle}
          onBodyChange={setBody}
        />

        {/* Location Input */}
        <LocationInput
          destination={destination}
          onDestinationChange={setDestination}
        />

        {/* Add Photos */}
        <TouchableOpacity style={styles.optionContainer} onPress={handleAddPhotos}>
          <Icon name="image-outline" size={24} color="#666" />
          <Text style={styles.optionText}>add photos</Text>
        </TouchableOpacity>

        {/* Selected Photos Preview */}
        <ImagePreview 
          images={selectedImages}
          onRemoveImage={handleRemoveImage}
        />

        {/* Tag People */}
        <TouchableOpacity style={styles.optionContainer} onPress={toggleTagPeople}>
          <Icon name="people-outline" size={24} color="#666" />
          <Text style={styles.optionText}>Tag people</Text>
        </TouchableOpacity>

        {/* Tagged People */}
        <TaggedPeople taggedPeople={taggedPeople} />
      </ScrollView>

      {/* Tag People Modal */}
      <TagPeopleModal 
        visible={tagModalVisible}
        contacts={contacts}
        taggedPeople={taggedPeople}
        onClose={() => setTagModalVisible(false)}
        onTagPerson={handleTagPerson}
      />
    </KeyboardAvoidingView>
  );
};



export default CreatePostScreen;