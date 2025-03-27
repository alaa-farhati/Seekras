 export interface Product {
   id: string;
   title: string;
   price: number;
   image: string;
   location: string;
   postedTime: string;
   isSponsored?: boolean;
   isSaved?: boolean;
   category?: string;
 }
 
 export const products: Product[] = [
    {
      id: '1',
      title: 'Camping Product - Excellent Condition',
      price: 899,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
      location: 'Brooklyn, NY',
      postedTime: '2 hours ago',
      isSponsored: true,
      category: 'camping',
    },
    {
      id: '2',
      title: 'Modern Sofa - Grey Fabric',
      price: 350,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F6ef78290-18c9-4ee3-8a6a-b3cc8c3c745d_1.f31f5ba308a96bb6128a6c3de17706f6.jpeg&f=1&nofb=1&ipt=e4c9810812adbfc4cb9cd5f7f89b48c300c938889ab4fd727cb32f0f525ea56c&ipo=images',
      location: 'Queens, NY',
      postedTime: '3 hours ago',
      isSaved: true,
      category: 'furniture',
    },
    {
      id: '3',
      title: 'Tente Anti UV, Tente yourte',
      price: 18500,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81X3rtwZSVL._AC_SL1500_.jpg&f=1&nofb=1&ipt=403529e494703a3b8146a7e839159f87b88110f3e07c3416361e823a3ff55f0f&ipo=images',
      location: 'Manhattan, NY',
      postedTime: 'Yesterday',
      category: 'camping',
    },
    {
      id: '4',
      title: 'RYX Tente de Camping',
      price: 1899,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F30%2Fa8%2Fa2%2F30a8a2e649835a42668e8f1e801fa975.jpg&f=1&nofb=1&ipt=d725d8e14832a84ed96cbbdcc017a52a95d3b8b742b16ec928629d2c28294dc4&ipo=images',
      location: 'Bronx, NY',
      postedTime: '2 days ago',
      category: 'camping',
    },
    
  ];
  export const CONDITIONS = ["New", "Like New", "Good", "Fair", "Poor"];
  
  // Categories available for selection
  export const CATEGORIES = [
    "Electronics", 
    "Clothing", 
    "Home Goods", 
    "Furniture", 
    "Sports Equipment",
    "Toys & Games",
    "Vehicles",
    "Other"
  ];
  
  // Listing types
  export const LISTING_TYPES = ["For Sale", "For Trade", "Free", "Wanted"];