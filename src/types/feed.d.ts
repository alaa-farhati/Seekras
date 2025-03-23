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
    type: 'post' | 'saved' | 'shared';
  }
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
