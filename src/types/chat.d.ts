export interface Sender {
    id?: string;
    name: string;
    avatar: string;
  }
  
 export  interface ChatMessage {
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
  
 export  interface OnlineFriend {
    id: string;
    name: string;
    avatar: string;
    status: boolean
  }
//   export interface Message {
//     message_id: string;
//     content: string;
//     sender_id: string;
//     type: 'sent' | 'received';
//     time: string;
//     is_read?: boolean;
//     active: string;
//     avatar?: string;
//     sender?: string;
//   }