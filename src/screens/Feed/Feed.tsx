import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  ListRenderItem
} from "react-native";
import PostCard from "../../components/Feed/Feed/PostCard";
import { useTheme } from "../../hooks/useTheme";
import { formatTimeAgo } from "../../utils/dateUtils";



// Dummy data for posts
import { dummyPosts } from "../../data/Feed/Posts";
import { FeedStyles } from "../../styles/Feed/Feed";

interface Post {
  id: string;
  user: string;
  location: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timePosted: string;
  isGroupPost: boolean;
  groupName: string;
  groupImage: string;
}

const FeedScreen: React.FC = () => {
  const { theme } = useTheme(); // Get theme from context
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to format the dummy data to match your PostCard component requirements
  const formatPostData = (dummyData: any[]): Post[] => {
    return dummyData.map(post => {
      const user = post.user || {};
      const group = post.group || null;

      return {
        id: post.id,
        user: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User',
        location: post.locationName || '',
        userImage: user.profilePictureUrl || "https://randomuser.me/api/portraits/men/1.jpg", // Default
        image: post.image || "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg", // Default
        caption: post.content || '',
        likes: post.likesCount || 0,
        comments: post.commentsCount || 0,
        timePosted: formatTimeAgo(post.createdAt),
        isGroupPost: !!post.groupId,
        groupName: group ? group.name || '' : '',
        groupImage: group ? group.profilePictureUrl || '' : '',
      };
    });
  };

  // Load dummy data instead of fetching from API
  const loadDummyPosts = (): void => {
    try {
      setLoading(true);
      // Simulate network delay
      setTimeout(() => {
        const formattedPosts: Post[] = formatPostData(dummyPosts);
        setPosts(formattedPosts);
        setError(null);
        setLoading(false);
      }, 800); // 800ms delay to simulate loading
    } catch (err) {
      console.log('Error loading posts:', err);
      setError('Failed to load posts. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDummyPosts();
  }, []);

  // Handle pull-to-refresh functionality
  const handleRefresh = (): void => {
    loadDummyPosts();
  };

  // Render each post item
  const renderPostItem: ListRenderItem<Post> = ({ item }) => (
    <PostCard
      post={item}
    />
  );

  // Loading state
  if (loading && posts.length === 0) {
    return (
      <View style={[FeedStyles.container, FeedStyles.centerContent, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  // Error state
  if (error && posts.length === 0) {
    return (
      <View style={[FeedStyles.container, FeedStyles.centerContent, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.accent }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={[FeedStyles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPostItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={FeedStyles.feedContent}
        refreshing={loading}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default FeedScreen;