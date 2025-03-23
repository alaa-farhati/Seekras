import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Animated, Pressable, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../hooks/useTheme";
import { sizes } from "../../../constants";
import { fonts } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { PostCardStyles } from "../../../styles/Feed/PostCard";

interface PostCardProps {
  post: {
    userImage: string;
    user: string;
    location: string;
    timePosted: string;
    image: string;
    caption: string;
    likes: number;
    comments: number;
    // Add group information properties
    isGroupPost?: boolean;
    groupName?: string;
    groupImage?: string;
  };
}

// Track reactions across all posts (in a real app, this would come from API/database)
const globalReactions = {
  "😁": 45,
  "😍": 32,
  "😮": 15,
  "😢": 8
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  
  // State for reaction handling
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [likeCount, setLikeCount] = useState(post.likes);
  
  // State for share modal
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  
  // Animation for the reaction pop-up
  const scaleAnim = useRef(new Animated.Value(0)).current;
  
  // Available reactions
  const reactions = [
    { emoji: "❤️", name: "Like" },
    { emoji: "😍", name: "Love" },
    { emoji: "😮", name: "Wow" },
    { emoji: "😢", name: "Sad" }
  ];
  
  // Get top 3 reactions for display
  const getTopReactions = () => {
    return Object.entries(globalReactions)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([emoji]) => emoji);
  };
  
  // Handle long press for reaction panel
  const handleLongPress = () => {
    setShowReactions(true);
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true
    }).start();
  };
  
  // Handle reaction selection
  const handleReaction = (reaction: string, name: string) => {
    setSelectedReaction(reaction);
    
    // Only increase like count if not already liked
    if (!selectedReaction) {
      setLikeCount(likeCount + 1);
    }
    
    // Update global reactions (in a real app, this would update to a database)
    if (reaction in globalReactions) {
      globalReactions[reaction as keyof typeof globalReactions]++;
    }
    
    setShowReactions(false);
    scaleAnim.setValue(0);
  };
  
  // Handle simple like press
  const handleLikePress = () => {
    if (!selectedReaction) {
      setSelectedReaction("😍");
      setLikeCount(likeCount + 1);
      
      // Update global reactions
      globalReactions["😍"]++;
    } else {
      // Decrease global reactions
      if (selectedReaction in globalReactions && globalReactions[selectedReaction as keyof typeof globalReactions] > 0) {
        globalReactions[selectedReaction as keyof typeof globalReactions]--;
      }
      
      setSelectedReaction(null);
      setLikeCount(likeCount - 1);
    }
  };
  
  // Close reactions panel
  const closeReactions = () => {
    setShowReactions(false);
    scaleAnim.setValue(0);
  };
  
  // Open share modal
  const handleSharePress = () => {
    setShowShareModal(true);
  };
  
  // Share the post
  const handleShare = () => {
    // In a real app, this would call your API to share the post
    console.log("Sharing post with message:", shareMessage);
    setShowShareModal(false);
    setShareMessage("");
  };

  // Get top reactions for display
  const topReactions = getTopReactions();

  return (
    <View style={[
      PostCardStyles.postContainer, 
      { 
        backgroundColor: theme.card,
        // Apply different style for group posts
        ...(post.isGroupPost && PostCardStyles.groupPostContainer)
      }
    ]}>
      
      {/* Group Header - Only shown for group posts */}
      {post.isGroupPost && (
        <View style={PostCardStyles.groupHeader}>
          {!post.groupImage ? (
            <Image source={{ uri: post.groupImage }} style={PostCardStyles.groupImage} />
          ) : (
            <View style={[PostCardStyles.groupImageFallback, { backgroundColor: theme.accent }]}>
              <Text style={PostCardStyles.groupImageFallbackText}>
                {post.groupName?.charAt(0) || "G"}
              </Text>
            </View>
          )}
          <View style={PostCardStyles.groupInfo}>
            <Text style={[PostCardStyles.groupName, { color: theme.text, fontFamily: fonts.semiBold,fontSize:11 }]}>
            {post.isGroupPost ? `${post.user.charAt(0)}/${post.groupName}` : post.user}
            </Text>
          </View>
          <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={sizes.icon.medium} color={theme.text} />
        </TouchableOpacity>
        </View>
      )}
      
      {/* Post Header - Modified for group posts */}
      <View style={PostCardStyles.header}>
        {/* Only show profile image for non-group posts */}
        {!post.isGroupPost && (
          <Image source={{ uri: post.userImage }} style={PostCardStyles.profileImage} />
        )}
        {
          !post.isGroupPost && (
            <View style={PostCardStyles.userInfo}>
            <Text style={[
              PostCardStyles.userName, 
              { 
                color: theme.text, 
                fontFamily: fonts.semiBold, 
                fontSize: sizes.text.regular,
                // Add left padding for group posts to align with group name
                ...(post.isGroupPost ? { paddingLeft: 2 } : {})
              }
            ]}>
              {post.user}
            </Text>
            <View style={PostCardStyles.locationContainer}>
              <Ionicons name="location-outline" size={sizes.icon.small} color={theme.text} />
              <Text style={[PostCardStyles.location, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.extraSmall }]}>
                {post.location} • {post.timePosted}
              </Text>
            </View>
            
          </View>
          )
        }
        {
          !post.isGroupPost &&
          <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={sizes.icon.medium} color={theme.text} />
        </TouchableOpacity>
        }
       
        
       
      </View>
{/* Caption */}
<Text style={[PostCardStyles.caption, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.label }]}>
        <Text style={{ fontWeight: "bold", fontFamily: fonts.semiBold, fontSize: sizes.text.caption }}>
          - {post.isGroupPost ? `/${post.user}` : post.user}{" : "}
        </Text>
        {post.caption}
      </Text>
      {/* Post Image */}
      <Image source={{ uri: post.image }} style={PostCardStyles.postImage} />

      

      {/* Reaction Counter with Top Emojis */}
      {likeCount > 0 && (
        <View style={PostCardStyles.reactionCounter}>
          <View style={PostCardStyles.reactionIcons}>
            {topReactions.map((emoji, index) => (
              <View 
                key={index} 
                style={[
                  PostCardStyles.reactionIcon, 
                  { 
                    backgroundColor: theme.inputBackground,
                    zIndex: 3 - index, // Higher z-index for first items
                    marginLeft: index > 0 ? -7 : 0 // Overlap icons
                  }
                ]}
              >
                <Text>{emoji}</Text>
              </View>
            ))}
          </View>
          <Text style={[PostCardStyles.reactionCountText, { color: theme.text }]}>
            {post.likes}
          </Text>
        </View>
      )}

      {/* Likes and Comments */}
      <View style={PostCardStyles.actions}>
        <TouchableOpacity 
          style={PostCardStyles.actionButton}
          onPress={handleLikePress}
          onLongPress={handleLongPress}
          delayLongPress={300}
        >
          {selectedReaction ? (
            <Text style={{ fontSize: 16, marginRight: 5 }}>{selectedReaction}</Text>
          ) : (
            <Ionicons name="heart-outline" size={sizes.icon.medium} color={theme.text} />
          )}
          <Text style={[PostCardStyles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
            {selectedReaction ? selectedReaction !== "👍" ? "Reactions" : "Likes" : "Like"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={PostCardStyles.actionButton} onPress={()=>navigation.navigate('Comments'as never)} >
          <Ionicons name="chatbubble-outline" size={sizes.icon.medium} color={theme.text}  />
          <Text style={[PostCardStyles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
            {post.comments > 0 ? `${post.comments} Comments` : "Comment"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={PostCardStyles.actionButton} onPress={handleSharePress}>
          <Ionicons name="share-social-outline" size={sizes.icon.medium} color={theme.text} />
          <Text style={[PostCardStyles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Reaction Modal */}
      <Modal
        visible={showReactions}
        transparent={true}
        animationType="none"
        onRequestClose={closeReactions}
      >
        <Pressable style={PostCardStyles.modalOverlay} onPress={closeReactions}>
          <Animated.View 
            style={[
              PostCardStyles.reactionPanel, 
              { 
                transform: [{ scale: scaleAnim }],
                backgroundColor: theme.card,
              }
            ]}
          >
            {reactions.map((reaction, index) => (
              <TouchableOpacity 
                key={index} 
                style={PostCardStyles.reactionButton}
                onPress={() => handleReaction(reaction.emoji, reaction.name)}
              >
                <Text style={PostCardStyles.reactionEmoji}>{reaction.emoji}</Text>
                <Text style={[PostCardStyles.reactionName, { color: theme.text }]}>{reaction.name}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </Pressable>
      </Modal>
      
      {/* Share Modal */}
      <Modal
        visible={showShareModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowShareModal(false)}
      >
        <View style={PostCardStyles.modalOverlay}>
          <View style={[PostCardStyles.shareModal, { backgroundColor: theme.card }]}>
            <View style={PostCardStyles.shareHeader}>
              <Text style={[PostCardStyles.shareTitle, { color: theme.text }]}>Share Post</Text>
              <TouchableOpacity onPress={() => setShowShareModal(false)}>
                <Ionicons name="close" size={24} color={theme.text} />
              </TouchableOpacity>
            </View>
            
            <View style={PostCardStyles.shareContent}>
              <View style={PostCardStyles.userShareInfo}>
                <Image source={{ uri: post.userImage }} style={PostCardStyles.shareUserImage} />
                <Text style={[PostCardStyles.shareUserName, { color: theme.text }]}>You</Text>
              </View>
              
              <TextInput
                style={[PostCardStyles.shareInput, { color: theme.text, borderColor: theme.border }]}
                placeholder="Write something..."
                placeholderTextColor={theme.text}
                multiline
                value={shareMessage}
                onChangeText={setShareMessage}
              />
              
              <View style={PostCardStyles.postPreview}>
                <Image source={{ uri: post.image }} style={PostCardStyles.previewImage} />
                <View style={PostCardStyles.previewContent}>
                  <Text style={[PostCardStyles.previewUser, { color: theme.text }]}>
                    {post.isGroupPost ? `${post.groupName} • /${post.user}` : post.user}
                  </Text>
                  <Text 
                    style={[PostCardStyles.previewCaption, { color: theme.text }]}
                    numberOfLines={2}
                  >
                    {post.caption}
                  </Text>
                </View>
              </View>
              
              <View style={PostCardStyles.shareOptions}>
                <Text style={[PostCardStyles.shareOptionTitle, { color: theme.text }]}>Share to:</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity style={[PostCardStyles.shareOption, { backgroundColor: theme.border }]}>
                    <Ionicons name="globe-outline" size={20} color={theme.text} />
                    <Text style={[PostCardStyles.shareOptionText, { color: theme.text }]}>Public</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[PostCardStyles.shareOption, { backgroundColor: theme.border }]}>
                    <Ionicons name="people-outline" size={20} color={theme.text} />
                    <Text style={[PostCardStyles.shareOptionText, { color: theme.text }]}>Friends</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[PostCardStyles.shareOption, { backgroundColor: theme.border }]}>
                    <Ionicons name="chatbubbles-outline" size={20} color={theme.text} />
                    <Text style={[PostCardStyles.shareOptionText, { color: theme.text }]}>Message</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
            
            <TouchableOpacity 
              style={[PostCardStyles.shareButton, { backgroundColor: theme.accent }]}
              onPress={handleShare}
            >
              <Text style={PostCardStyles.shareButtonText}>Share Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};



export default PostCard;