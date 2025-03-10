import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import PostCard from "../../components/Feed/PostCard";
import { useTheme } from "../../hooks/useTheme";




const posts = [
  {
    id: "1",
    user: "akmalnsrllh",
    location: "Bekasi",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    image: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    caption: "When life gives you limes, arrange them in a zesty flatlay and create a 'lime-light' masterpiece! 🍋✨",
    likes: 349,
    comments: 760,
    timePosted: "1 min ago",
    isGroupPost: false,
  },
  {
    id: "2",
    user: "akmalnsrllh",
    location: "Bekasi",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oswego.edu%2Fcts%2Fsites%2Fwww.oswego.edu.cts%2Ffiles%2Fstyles%2Fpanopoly_image_original%2Fpublic%2Foswego_sunset.jpg%3Fitok%3D3pu5u00T&f=1&nofb=1&ipt=2ccda256c1e77bf36e72966e299ed829ca449077c82abe78750396a77002e9ba&ipo=images",
    caption: "When life gives you limes, arrange them in a zesty flatlay and create a 'lime-light' masterpiece! 🍋✨",
    likes: 349,
    comments: 760,
    timePosted: "1 min ago",
    isGroupPost: true,
    groupName: "Photography Enthusiasts",
    groupImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "3",
    user: "akmalnsrllh",
    location: "Bekasi",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    image: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    caption: "When life gives you limes, arrange them in a zesty flatlay and create a 'lime-light' masterpiece! 🍋✨",
    likes: 349,
    comments: 760,
    timePosted: "1 min ago",
    isGroupPost: false,
  },
  {
    id: "4",
    user: "akmalnsrllh",
    location: "Bekasi",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    image: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    caption: "When life gives you limes, arrange them in a zesty flatlay and create a 'lime-light' heheeeaaaaayedeygygduegudgeugduegtduegtudfgeugdekeabdhbeakdbedkabdkeabkdbadkajbed masterpiece! 🍋✨",
    likes: 349,
    comments: 760,
    timePosted: "1 min ago",
    isGroupPost: true,
    groupName: "Nature Lovers",
    groupImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const FeedScreen = () => {
  const { theme } = useTheme(); // Get theme from context

  return (
      <View style={[styles.container,{backgroundColor:theme.background}]}> 

        <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedContent}
      />

      </View  >
    
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedContent: {
    paddingHorizontal: 10,
    paddingTop: 10,  // Ensuring there's no extra space at the top
    flexGrow: 1,  // Ensuring the content stretches to the top-start
  },
});

export default FeedScreen;
