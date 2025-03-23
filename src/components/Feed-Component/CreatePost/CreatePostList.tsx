// CreatePostContent.tsx
import React, { useState, useCallback } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  Alert
} from "react-native";
import { Icon } from "../../../assets/Icons/Index";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

// Import Components
import UserInfo from "./UserInfo";
import PostContentInput from "./PostContentInput";
import LocationInput from "./LocationInput";
import ImagePreview from "./ImagePreview";
import TaggedPeople from "./TaggedPeople";
import TagPeopleModal from "./TaggedPeopleModal";
import { CreatePostStyles } from "../../../styles/Feed-Styles/CreatePost";


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



interface CreatePostContentProps {
  navigation: any;
  userProfileOverride?: string;
  userNameOverride?: string;
  userIdOverride?: string;
}

const CreatePostContent: React.FC<CreatePostContentProps> = ({ 
  navigation,
  userProfileOverride,
  userNameOverride,
  userIdOverride
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tagModalVisible, setTagModalVisible] = useState(false);
  const [taggedPeople, setTaggedPeople] = useState<typeof contacts>([]);

  // Use overrides if provided
  const currentUserProfile = userProfileOverride || userProfileImage;
  const currentUserName = userNameOverride || userName;
  const currentUserId = userIdOverride || userId;

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


  return (
    <>
      <ScrollView style={CreatePostStyles.scrollContent}>
        {/* User Info */}
        <UserInfo avatarUrl={currentUserProfile} userName={currentUserName} />

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
        <TouchableOpacity style={CreatePostStyles.optionContainer} onPress={handleAddPhotos}>
          <Icon name="image-outline" size={24} color="#666" />
          <Text style={CreatePostStyles.optionText}>add photos</Text>
        </TouchableOpacity>

        {/* Selected Photos Preview */}
        <ImagePreview 
          images={selectedImages}
          onRemoveImage={handleRemoveImage}
        />

        {/* Tag People */}
        <TouchableOpacity style={CreatePostStyles.optionContainer} onPress={toggleTagPeople}>
          <Icon name="people-outline" size={24} color="#666" />
          <Text style={CreatePostStyles.optionText}>Tag people</Text>
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
    </>
  );
};

export default CreatePostContent;