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
      category: 'electronics',
    },
    {
      id: '2',
      title: 'Modern Sofa - Grey Fabric',
      price: 350,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQEDIcdBrMMoQ5rOpuj6sAHaFX%26pid%3DApi&f=1&ipt=da90fd1e0e441b381c10f1bd9cc9574e7f4abc35352f00bc1fd0d3de190a7788&ipo=images',
      location: 'Queens, NY',
      postedTime: '3 hours ago',
      isSaved: true,
      category: 'furniture',
    },
    {
      id: '3',
      title: 'Toyota Camry 2019 - Low Mileage',
      price: 18500,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      location: 'Manhattan, NY',
      postedTime: 'Yesterday',
      category: 'vehicles',
    },
    {
      id: '4',
      title: 'MacBook Pro 16" - 2022 Model',
      price: 1899,
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      location: 'Bronx, NY',
      postedTime: '2 days ago',
      category: 'electronics',
    },
    {
      id: '5',
      title: 'Gaming PC - RTX 3080, i9 Processor',
      price: 1500,
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      location: 'Staten Island, NY',
      postedTime: '3 days ago',
      category: 'electronics',
    },
    {
      id: '6',
      title: 'Dining Table with 6 Chairs',
      price: 450,
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      location: 'Brooklyn, NY',
      postedTime: '4 days ago',
      category: 'furniture',
    },
    {
      id: '7',
      title: 'Sony PlayStation 5 - Brand New',
      price: 499,
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      location: 'Manhattan, NY',
      postedTime: '5 days ago',
      isSponsored: true,
      category: 'electronics',
    },
    {
      id: '8',
      title: 'Vintage Vinyl Record Collection',
      price: 250,
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      location: 'Queens, NY',
      postedTime: '1 week ago',
      category: 'hobbies',
    },
    {
      id: '9',
      title: '4-Person Camping Tent - Waterproof',
      price: 129,
      image: 'https://randomuser.me/api/portraits/men/35.jpg', // Camping product with man image
      location: 'Upstate NY',
      postedTime: 'Just now',
      isSponsored: false,
      isSaved: true,
      category: 'camping',
    },
  ];