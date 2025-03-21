 interface Sender {
    id?: string;
    name: string;
    avatar: string;
  }
  
   interface ChatMessage {
    id: string;
    sender: Sender;
    message: string;
    sender_id?:string;
    time: string;
    unreadCount?: number;
    isAdmin?: boolean;
    type?: 'sent' | 'received';
    is_read?: boolean;
  }
  
   interface OnlineFriend {
    id: string;
    name: string;
    avatar: string;
    status: boolean
  }
interface ChatHeaderProps {
  navigation: any;
  emp_name: string;
  online: boolean;
  profile_image_id?: string;
  onPressProfileImage: () => void;
}
interface MessageBubbleProps {
  text: string;
  time: string;
  type: 'sent' | 'received';
  status?: 'read' | 'unread'; // Only for sent messages
  sender?: string; // Only for received messages
  avatar?: string; // Only for received messages
  onDelete?: () => void; // Only for sent messages
}
interface OnlineFriendsListProps {
  friends: OnlineFriend[];
  onSelectFriend?: (friend: OnlineFriend) => void;
  
}