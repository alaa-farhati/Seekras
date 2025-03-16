import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  TextInput,
  ScrollView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Define TypeScript interface for post data
interface Post {
  id: string;
  username: string;
  avatarUrl: string;
  content: string;
  timeAgo: string;
  hashtags: string[];
}

// Define TypeScript interface for comment data
interface Comment {
  id: string;
  username: string;
  avatarUrl: string;
  content: string;
  timeAgo: string;
  likes: number;
  isLiked: boolean;
  replies?: Comment[]; // Optional nested replies
  mentionedUser?: string; // For tagging/mentioning users
}

// Sample post data
const POST: Post = {
  id: 'post1',
  username: 'akmalnsrllh',
  avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  content: "When life gives you limes, arrange them in a zesty flatlay and create a 'lime-light' masterpiece! 🍋✨",
  timeAgo: '1h',
  hashtags: ['dogs'],
};

// Sample comments data
const COMMENTS: Comment[] = [
  {
    id: '1',
    username: 'divdivk',
    avatarUrl: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    content: 'You gotta take Molly here. She would love it!! I assume this is Fort Funston or maybe some other beach?',
    timeAgo: '5h',
    likes: 1,
    isLiked: true,
    mentionedUser: 'francescofogu'
  },
  {
    id: '2',
    username: 'kenzoere',
    avatarUrl: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    content: 'This is also a favorite spot of #citycricket! Maybe we should organize a dog meet up for all of our dogs?',
    timeAgo: '5h',
    likes: 1,
    isLiked: false,
  },
  {
    id: '3',
    username: 'amethyst_grl',
    avatarUrl: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    content: 'So in! Molly hates the beach, but we\'ll make it happen.',
    timeAgo: '5h',
    likes: 1,
    isLiked: false,
  },
  {
    id: '4',
    username: 'eloears',
    avatarUrl: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    content: 'I\'ll fly in with the cat and the kids from Tennessee. What could possibly go wrong? Next Saturday work for everyone?',
    timeAgo: '5h',
    likes: 1,
    isLiked: false,
  },
];

// Array of reaction emojis
const REACTIONS = ['❤️', '😍', '❤️', '⚡', '💜', '🖤', '🎉', '🔥'];

const CommentsScreen: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(COMMENTS);
  const [commentText, setCommentText] = useState('');

  const toggleLike = (id: string) => {
    setComments(comments.map(comment => 
      comment.id === id 
        ? { 
            ...comment, 
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1 
          } 
        : comment
    ));
  };

  const renderPost = () => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image source={{ uri: POST.avatarUrl }} style={styles.postAvatar} />
          <Text style={styles.postUsername}>{POST.username}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.postContent}>
        <Text style={styles.postText}>
          {POST.content} 
          {POST.hashtags.map(tag => (
            <Text key={tag} style={styles.hashtag}> #{tag}</Text>
          ))}
        </Text>
        <Text style={styles.postTime}>{POST.timeAgo}</Text>
      </View>
      
      <View style={styles.divider} />
    </View>
  );

  const renderComment = ({ item }: { item: Comment }) => (
    <View style={styles.commentContainer}>
      <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
      
      <View style={styles.commentBody}>
        <View style={styles.commentContent}>
          <Text>
            <Text style={styles.username}>{item.username} </Text>
            {item.mentionedUser && (
              <Text style={styles.mentionedUser}>@{item.mentionedUser} </Text>
            )}
            <Text style={styles.commentText}>{item.content}</Text>
          </Text>
        </View>
        
        <View style={styles.commentFooter}>
          <Text style={styles.timeAgo}>{item.timeAgo}</Text>
          {item.likes > 0 && (
            <Text style={styles.likesCount}>{item.likes} like</Text>
          )}
          <TouchableOpacity>
            <Text style={styles.replyButton}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.likeButton} 
        onPress={() => toggleLike(item.id)}
      >
        <Ionicons 
          name={item.isLiked ? "heart" : "heart-outline"} 
          size={16} 
          color={item.isLiked ? "#ff3040" : "#8e8e8e"} 
        />
      </TouchableOpacity>
    </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comments</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.contentContainer}>
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={item => item.id}
          ListHeaderComponent={renderPost}
          style={styles.commentsList}
          contentContainerStyle={styles.commentsContainer}
          showsVerticalScrollIndicator={false}
        />
        
        
        
        <View style={styles.inputContainer}>
          <Image 
            source={{ uri: POST.avatarUrl }} 
            style={styles.inputAvatar} 
          />
          <TextInput
            style={styles.input}
            placeholder="Add a comment..."
            placeholderTextColor="#a8a8a8"
            value={commentText}
            onChangeText={setCommentText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Solid background instead of gradient
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  postUsername: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  postContent: {
    marginBottom: 8,
  },
  postText: {
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 18,
  },
  postTime: {
    fontSize: 12,
    color: '#8e8e8e',
  },
  hashtag: {
    color: '#00376b',
    fontWeight: '600',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#dbdbdb',
    marginVertical: 8,
  },
  commentsList: {
    flex: 1,
  },
  commentsContainer: {
    paddingBottom: 12,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: 'relative',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  commentBody: {
    flex: 1,
    marginRight: 30,
  },
  commentContent: {
    marginBottom: 4,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  mentionedUser: {
    color: '#00376b',
    fontWeight: '500',
  },
  commentText: {
    fontSize: 14,
    lineHeight: 18,
  },
  commentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeAgo: {
    fontSize: 12,
    color: '#8e8e8e',
    marginRight: 10,
  },
  likesCount: {
    fontSize: 12,
    color: '#8e8e8e',
    marginRight: 10,
  },
  replyButton: {
    fontSize: 12,
    color: '#8e8e8e',
  },
  likeButton: {
    position: 'absolute',
    right: 16,
    top: 10,
  },
  reactionsBar: {
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
  },
  reactionsContainer: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  reactionButton: {
    marginHorizontal: 8,
    padding: 4,
  },
  reactionEmoji: {
    fontSize: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
    backgroundColor: '#fff',
  },
  inputAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#000',
  },
});

export default CommentsScreen;