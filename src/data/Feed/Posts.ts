export const dummyPosts = [
  {
    id: "1",
    user: {
      firstName: "John",
      lastName: "Doe",
      profilePictureUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    locationName: "New York, NY",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W50l6_cJnhnl3Lkyowx_SQHaE8%26pid%3DApi&f=1&ipt=32fa6a9ba1978cf27e4aea4fdf9bb1fa7250cde77403e558847f3e1b717495ed&ipo=images",
    content: "Having a great time exploring the city!",
    likesCount: 42,
    commentsCount: 8,
    createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    groupId: null,
    group: null
  },
  {
    id: "2",
    user: {
      firstName: "Jane",
      lastName: "Smith",
      profilePictureUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    locationName: "Los Angeles, CA",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.65yMFCGctnXsW75Orr8dBgHaFm%26pid%3DApi&f=1&ipt=2ace06cf8d2f757f4b9bcd420cb41babc78d40907cc44549a9198c1fb18499a2&ipo=images",
    content: "Perfect beach day with friends!",
    likesCount: 87,
    commentsCount: 15,
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    groupId: "group1",
    group: {
      name: "Beach Lovers",
      profilePictureUrl: "https://randomuser.me/api/portraits/groups/1.jpg"
    }
  },
  {
    id: "3",
    user: {
      firstName: "Mike",
      lastName: "Johnson",
      profilePictureUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    groupImage: "https://randomuser.me/api/portraits/men/3.jpg",
    locationName: "Chicago, IL",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F019%2F137%2F887%2Flarge_2x%2Fdowntown-istanbul-city-skyline-cityscape-of-turkey-photo.jpg&f=1&nofb=1&ipt=509f448f7d8010e14ca45b87bcae05e34ac536670a7ab1ee958c87ebdff19c9d&ipo=images",
    content: "Downtown views never get old!",
    likesCount: 36,
    commentsCount: 5,
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    groupId: null,
    group: null
  }
];