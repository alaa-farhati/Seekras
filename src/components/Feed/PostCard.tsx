import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Animated, Pressable, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/useTheme";
import { sizes } from "../../constants";
import { fonts } from "../../constants";
import { useNavigation } from "@react-navigation/native";

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
    { emoji: "😁", name: "Like" },
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
      styles.postContainer, 
      { 
        backgroundColor: theme.card,
        // Apply different style for group posts
        ...(post.isGroupPost && styles.groupPostContainer)
      }
    ]}>
      
      {/* Group Header - Only shown for group posts */}
      {post.isGroupPost && (
        <View style={styles.groupHeader}>
          {post.groupImage ? (
            <Image source={{ uri: post.groupImage }} style={styles.groupImage} />
          ) : (
            <View style={[styles.groupImageFallback, { backgroundColor: theme.accent }]}>
              <Text style={styles.groupImageFallbackText}>
                {post.groupName?.charAt(0) || "G"}
              </Text>
            </View>
          )}
          <View style={styles.groupInfo}>
            <Text style={[styles.groupName, { color: theme.text, fontFamily: fonts.semiBold,fontSize:11 }]}>
            {post.isGroupPost ? `${post.user.charAt(0)}/${post.groupName}` : post.user}
            </Text>
          </View>
          <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={sizes.icon.medium} color={theme.text} />
        </TouchableOpacity>
        </View>
      )}
      
      {/* Post Header - Modified for group posts */}
      <View style={styles.header}>
        {/* Only show profile image for non-group posts */}
        {!post.isGroupPost && (
          <Image source={{ uri: post.userImage }} style={styles.profileImage} />
        )}
        {
          !post.isGroupPost && (
            <View style={styles.userInfo}>
            <Text style={[
              styles.userName, 
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
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={sizes.icon.small} color={theme.text} />
              <Text style={[styles.location, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.extraSmall }]}>
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

      {/* Post Image */}
      <Image source={{ uri: post.image }} style={styles.postImage} />

      {/* Caption */}
      <Text style={[styles.caption, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.label }]}>
        <Text style={{ fontWeight: "bold", fontFamily: fonts.semiBold, fontSize: sizes.text.caption }}>
          {post.isGroupPost ? `/${post.user}` : post.user}{" -"}
        </Text>
        {post.caption}
      </Text>

      {/* Reaction Counter with Top Emojis */}
      {likeCount > 0 && (
        <View style={styles.reactionCounter}>
          <View style={styles.reactionIcons}>
            {topReactions.map((emoji, index) => (
              <View 
                key={index} 
                style={[
                  styles.reactionIcon, 
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
          <Text style={[styles.reactionCountText, { color: theme.text }]}>
            {likeCount}
          </Text>
        </View>
      )}

      {/* Likes and Comments */}
      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={handleLikePress}
          onLongPress={handleLongPress}
          delayLongPress={300}
        >
          {selectedReaction ? (
            <Text style={{ fontSize: 16, marginRight: 5 }}>{selectedReaction}</Text>
          ) : (
            <Ionicons name="heart-outline" size={sizes.icon.medium} color={theme.text} />
          )}
          <Text style={[styles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
            {selectedReaction ? selectedReaction !== "👍" ? "Reactions" : "Likes" : "Like"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={()=>navigation.navigate('Comments')}>
          <Ionicons name="chatbubble-outline" size={sizes.icon.medium} color={theme.text}  />
          <Text style={[styles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
            {post.comments > 0 ? `${post.comments} Comments` : "Comment"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleSharePress}>
          <Ionicons name="share-social-outline" size={sizes.icon.medium} color={theme.text} />
          <Text style={[styles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
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
        <Pressable style={styles.modalOverlay} onPress={closeReactions}>
          <Animated.View 
            style={[
              styles.reactionPanel, 
              { 
                transform: [{ scale: scaleAnim }],
                backgroundColor: theme.card,
              }
            ]}
          >
            {reactions.map((reaction, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.reactionButton}
                onPress={() => handleReaction(reaction.emoji, reaction.name)}
              >
                <Text style={styles.reactionEmoji}>{reaction.emoji}</Text>
                <Text style={[styles.reactionName, { color: theme.text }]}>{reaction.name}</Text>
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
        <View style={styles.modalOverlay}>
          <View style={[styles.shareModal, { backgroundColor: theme.card }]}>
            <View style={styles.shareHeader}>
              <Text style={[styles.shareTitle, { color: theme.text }]}>Share Post</Text>
              <TouchableOpacity onPress={() => setShowShareModal(false)}>
                <Ionicons name="close" size={24} color={theme.text} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.shareContent}>
              <View style={styles.userShareInfo}>
                <Image source={{ uri: post.userImage }} style={styles.shareUserImage} />
                <Text style={[styles.shareUserName, { color: theme.text }]}>You</Text>
              </View>
              
              <TextInput
                style={[styles.shareInput, { color: theme.text, borderColor: theme.border }]}
                placeholder="Write something..."
                placeholderTextColor={theme.text}
                multiline
                value={shareMessage}
                onChangeText={setShareMessage}
              />
              
              <View style={styles.postPreview}>
                <Image source={{ uri: post.image }} style={styles.previewImage} />
                <View style={styles.previewContent}>
                  <Text style={[styles.previewUser, { color: theme.text }]}>
                    {post.isGroupPost ? `${post.groupName} • /${post.user}` : post.user}
                  </Text>
                  <Text 
                    style={[styles.previewCaption, { color: theme.text }]}
                    numberOfLines={2}
                  >
                    {post.caption}
                  </Text>
                </View>
              </View>
              
              <View style={styles.shareOptions}>
                <Text style={[styles.shareOptionTitle, { color: theme.text }]}>Share to:</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity style={[styles.shareOption, { backgroundColor: theme.border }]}>
                    <Ionicons name="globe-outline" size={20} color={theme.text} />
                    <Text style={[styles.shareOptionText, { color: theme.text }]}>Public</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.shareOption, { backgroundColor: theme.border }]}>
                    <Ionicons name="people-outline" size={20} color={theme.text} />
                    <Text style={[styles.shareOptionText, { color: theme.text }]}>Friends</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.shareOption, { backgroundColor: theme.border }]}>
                    <Ionicons name="chatbubbles-outline" size={20} color={theme.text} />
                    <Text style={[styles.shareOptionText, { color: theme.text }]}>Message</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
            
            <TouchableOpacity 
              style={[styles.shareButton, { backgroundColor: theme.accent }]}
              onPress={handleShare}
            >
              <Text style={styles.shareButtonText}>Share Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  // Special styling for group posts
  groupPostContainer: {
    borderLeftWidth: 3,
    borderLeftColor: "#FF4500", // Reddit-like color
  },
  groupHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  groupImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  groupImageFallback: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  groupImageFallbackText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: sizes.text.small,
    fontWeight: "bold",
  
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // Add less margin for group posts
    marginTop: 0,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "column",
    flexGrow: 1,
  },
  userName: {
    fontWeight: "bold",
    fontSize: sizes.text.regular,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: sizes.text.extraSmall,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    resizeMode: "cover",
  },
  caption: {
    fontSize: sizes.text.body,
    marginBottom: 10,
    lineHeight: 20,
  },
  reactionCounter: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  reactionIcons: {
    flexDirection: "row",
    marginRight: 5,
  },
  reactionIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  reactionCountText: {
    fontSize: sizes.text.small,
    marginLeft: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.1)",
    paddingTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    fontSize: sizes.text.small,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  reactionPanel: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reactionButton: {
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
  },
  reactionEmoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  reactionName: {
    fontSize: 10,
    fontFamily: fonts.regular,
  },
  shareModal: {
    width: "90%",
    maxHeight: "80%",
    borderRadius: 15,
    overflow: "hidden",
  },
  shareHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  shareTitle: {
    fontSize: sizes.text.large,
    fontWeight: "bold",
    fontFamily: fonts.semiBold,
  },
  shareContent: {
    padding: 15,
  },
  userShareInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  shareUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  shareUserName: {
    fontWeight: "bold",
    fontSize: sizes.text.regular,
    fontFamily: fonts.semiBold,
  },
  shareInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    minHeight: 80,
    textAlignVertical: "top",
    marginBottom: 15,
    fontFamily: fonts.regular,
  },
  postPreview: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },
  previewImage: {
    width: 80,
    height: 80,
  },
  previewContent: {
    flex: 1,
    padding: 10,
  },
  previewUser: {
    fontWeight: "bold",
    fontFamily: fonts.semiBold,
    fontSize: sizes.text.small,
    marginBottom: 5,
  },
  previewCaption: {
    fontFamily: fonts.regular,
    fontSize: sizes.text.small,
  },
  shareOptions: {
    marginBottom: 15,
  },
  shareOptionTitle: {
    fontFamily: fonts.semiBold,
    fontSize: sizes.text.small,
    marginBottom: 10,
  },
  shareOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  shareOptionText: {
    marginLeft: 5,
    fontFamily: fonts.regular,
    fontSize: sizes.text.small,
  },
  shareButton: {
    padding: 15,
    alignItems: "center",
  },
  shareButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: fonts.semiBold,
    fontSize: sizes.text.regular,
  },
});

export default PostCard;