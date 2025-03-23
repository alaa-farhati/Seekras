

export const chats = [
    {
      id: "1",
      sender: { name: "Angel Curtis", avatar: "https://randomuser.me/api/portraits/men/72.jpg" },
      message: "Please help me find a good monitor for t...",
      time: "02:11",
      unreadCount: 2
    },
    {
      id: "2",
      sender: { name: "Zaire Dorwart", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
      message: "✓ Gacor pisan kang",
      time: "02:11",
    },
    {
      id: "3",
      sender: { name: "Kelas Malam", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
      message: "Bima : No one can come today?",
      time: "02:11",
      unreadCount: 2
    },
    {
      id: "4",
      sender: { name: "Jocelyn Gouse", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
      message: "You're now an admin",
      time: "02:11",
      isAdmin: true
    },
    {
      id: "5",
      sender: { name: "Jaylon Dias", avatar: "https://randomuser.me/api/portraits/men/66.jpg" },
      message: "✓ Buy back 10k gallons, top up credit, b...",
      time: "02:11",
    },
    {
      id: "6",
      sender: { name: "Chance Rhiel Madsen", avatar: "https://randomuser.me/api/portraits/men/77.jpg" },
      message: "Thank you mate!",
      time: "02:11",
      unreadCount: 2
    },
    {
      id: "7",
      sender: { name: "Livia Dias", avatar: "https://randomuser.me/api/portraits/women/88.jpg" },
      message: "hey where are you going tomorow",
      time: "02:11",
    },
  ];

  // Online friends list based on the images provided
  export const onlineFriends = [
    {
      id: "1",
      name: "Alex",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      status: true
    },
    {
      id: "2",
      name: "Mina",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      status: true
    },
    {
      id: "3",
      name: "Brian",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      status: true
    },
    {
      id: "4",
      name: "Katrina",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      status: false
    },
    {
      id: "5",
      name: "Priya",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      status: true
    },
    {
      id: "6",
      name: "Amber",
      avatar: "https://randomuser.me/api/portraits/women/37.jpg",
      status: true
    },
    {
      id: "7",
      name: "Jake",
      avatar: "https://randomuser.me/api/portraits/men/53.jpg",
      status: false
    }
  ];
   const user_id = '1234';
    const first_name = 'John';
    const last_name = 'Doe';
    const profile_image_id = "https://randomuser.me/api/portraits/men/53.jpg";
  export const dummyMessages: ChatMessage[] = [
      {
        id: '1',
        message: 'Hey, how are you doing?',
        sender_id: '1002',
        type: 'received',
        time: '09:30 AM',
        sender: { id: '1002', name: `${first_name} ${last_name}`, avatar: profile_image_id },
      },
      {
        id: '2',
        message: 'I\'m good, thanks! How about you?',
        sender_id: user_id,
        type: 'sent',
        time: '09:32 AM',
        is_read: true,
        sender: { id: user_id, name: `${first_name} ${last_name}`, avatar: profile_image_id },
      },
    ];