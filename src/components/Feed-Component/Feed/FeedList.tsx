// FeedList.tsx
import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  ListRenderItem
} from "react-native";
import PostCard from "./PostCard";
import { useTheme } from "../../../hooks/useTheme";
import { formatTimeAgo } from "../../../utils/dateUtils";
import { dummyPosts } from "../../../data/Feed/Posts";
import Loader from "../../Reusables-Component/Loader";
import ErrorText from "../../Reusables-Component/ErrorText";
import { FeedStyles } from "../../../styles/Feed-Styles/Feed";

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

interface FeedListProps {
  navigation?: any; // Optional navigation prop if needed
}

export const FeedList: React.FC<FeedListProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

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
      setError(null);
      
      // Simulate network delay
      setTimeout(() => {
        // Simulate random error for demonstration (1 in 4 chance)
        
        
        const formattedPosts: Post[] = formatPostData(dummyPosts);
        setPosts(formattedPosts);
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

  // Handle retry when error occurs
  const handleRetry = (): void => {
    setRetryCount(prev => prev + 1);
    loadDummyPosts();
  };

  // Render each post item
  const renderPostItem: ListRenderItem<Post> = ({ item }) => (
    <PostCard post={item} />
  );

  // Loading state
  if (loading && posts.length === 0) {
    return (
      <Loader 
        text="Loading posts"
        pulsating={true}
        size="large"
        color={theme.primary}
        timeout={10000} // 10 seconds timeout
        onTimeout={() => {
          setLoading(false);
          setError("Loading timed out. Please check your connection and try again.");
        }}
      />
    );
  }

  // Error state
  if (error && posts.length === 0) {
    return (
      <ErrorText
        message={error}
        color={theme.error}
        onRetry={handleRetry}
        retryText="Reload Posts"
        autoHide={false}
        showRetryTimer={true}
        retryAfter={3000}
        maxRetries={5}
      />
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={renderPostItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={FeedStyles.feedContent}
      refreshing={loading}
      onRefresh={handleRefresh}
      ListEmptyComponent={
        <ErrorText
          message="No posts found. Try refreshing or check back later."
          color={theme.text}
          onRetry={handleRefresh}
          retryText="Refresh"
        />
      }
    />
  );
};

