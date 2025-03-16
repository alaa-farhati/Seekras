import React, { useState, useEffect } from "react";
import { 
  View, 
  FlatList, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  ListRenderItem 
} from "react-native";
import PostCard from "../../components/Feed/PostCard";
import { useTheme } from "../../hooks/useTheme";

// Define the types for a post
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

// Define the structure of API response
interface ApiResponse {
  posts: {
    id: string;
    user?: {
      firstName?: string;
      lastName?: string;
      profilePictureUrl?: string;
    };
    locationName?: string;
    mediaUrl?: string;
    content?: string;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: string;
    groupId?: string;
    group?: {
      name?: string;
      profilePictureUrl?: string;
    };
  }[];
}

const FeedScreen: React.FC = () => {
  const { theme } = useTheme(); // Get theme from context
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to format the API data to match your PostCard component requirements
  const formatPostData = (apiData: ApiResponse | null): Post[] => {
    if (!apiData || !apiData.posts || !Array.isArray(apiData.posts)) {
      return [];
    }
    const extractImageUrl = (url: string): string => {
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      return params.get("u") ? decodeURIComponent(params.get("u")!) : url;
    };
    return apiData.posts.map(post => {
      const user = post.user || {};
      const group = post.group || null;

      return {
        id: post.id,
        user: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User',
        location: post.locationName || '',
        userImage: user.profilePictureUrl || "https://randomuser.me/api/portraits/men/1.jpg", // Default
        image:  "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg", // Default
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

  // Helper function to format timestamp to "time ago" format
  const formatTimeAgo = (timestamp?: string): string => {
    if (!timestamp) return '';

    const now = new Date();
    const postTime = new Date(timestamp);
    const diffMs = now.getTime() - postTime.getTime();

    // Convert to minutes, hours, days
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins} min ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else {
      return `${diffDays} days ago`;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/feed/posts/46796f09-4fa1-4465-90de-849dd0bb01d4');

      if (!response.ok) {
        console.log('err')
      }

      const data: ApiResponse = await response.json();
      const formattedPosts: Post[] = formatPostData(data);
      setPosts(formattedPosts);
      setError(null);
    } catch (err) {
      console.log('Error fetching posts:', err);
      setError('Failed to load posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle pull-to-refresh functionality
  const handleRefresh = (): void => {
    fetchPosts();
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
      <View style={[styles.container, styles.centerContent, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  // Error state
  if (error && posts.length === 0) {
    return (
      <View style={[styles.container, styles.centerContent, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.accent }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPostItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedContent}
        refreshing={loading}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexGrow: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default FeedScreen;
