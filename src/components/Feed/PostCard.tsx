import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/useTheme";
import { sizes } from "../../constants"; // Assuming sizes is predefined in constants
import { fonts } from "../../constants"; // Custom fonts

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
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { theme } = useTheme();  // Get theme from context

  return (
    <View style={[styles.postContainer, { backgroundColor: theme.card }]}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.userImage }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={[styles.userName, { color: theme.text, fontFamily: fonts.semiBold, fontSize: sizes.text.regular }]}>
            {post.user}
          </Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={sizes.icon.small} color={theme.text} />
            <Text style={[styles.location, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.extraSmall }]}>
              {post.location} • {post.timePosted}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={sizes.icon.medium} color={theme.text} />
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      <Image source={{ uri: post.image }} style={styles.postImage} />

      {/* Caption */}
      <Text style={[styles.caption, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.label }]}>
        <Text style={{ fontWeight: "bold", fontFamily: fonts.semiBold,fontSize:sizes.text.caption }}>
          {post.user}{" -"}
        </Text>
        {post.caption}
      </Text>

      {/* Likes and Comments */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={sizes.icon.medium} color={theme.text} />
          <Text style={[styles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
            {post.likes} Likes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={sizes.icon.medium} color={theme.text} />
          <Text style={[styles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
            {post.comments} Comments
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={sizes.icon.medium} color={theme.text} />
          <Text style={[styles.actionText, { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.small }]}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
    fontSize: sizes.text.regular,  // Apply regular font size
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: sizes.text.extraSmall, // Apply extra small font size for location
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    resizeMode: "cover",
  },
  caption: {
    fontSize: sizes.text.body,  // Apply body font size for caption
    marginBottom: 10,
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    fontSize: sizes.text.small,  // Apply small font size for action text
  },
});

export default PostCard;
