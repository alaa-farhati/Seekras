interface Post {
    id: string;
    title: string;
    location: string;
    upvotes: number;
    comments: number;
    time: string;
    image?: string;
    type: 'post' | 'saved' | 'shared';
    
  }
  
  interface Achievement {
    id: string;
    name: string;
    icon: string;
    color: string;
    description: string;
    points: number;
  }
  
  interface Badge {
    id: string;
    name: string;
    icon: string;
    color: string;
  }
  
  interface VisitedPlace {
    id: string;
    name: string;
    location: string;
    date: string;
    image: string;
    rating: number;
    visits: number;
  }