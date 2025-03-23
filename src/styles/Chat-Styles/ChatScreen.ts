import { StyleSheet } from "react-native";

export const ChatScreenStyles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#fff",
    },
    chatListContainer: {
        flex: 1,
        marginTop: 10,
      },
      sectionTitle: {
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
      onlineFriendItem: {
        alignItems: 'center',
        marginRight: 15,
        width: 65,
      },
      avatarContainer: {
        position: 'relative',
        marginBottom: 5,
      },
      onlineAvatar: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
      },
      onlineFriendName: {
        textAlign: 'center',
        width: '100%',
      },
      chatList: {
        flex: 1,
      },
    chatItem: {
      flexDirection: "row",
      padding: 15,
      borderBottomWidth: 0.5,
    },
    chatAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    chatContent: {
      flex: 1,
      justifyContent: "center",
    },
    chatHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5,
    },
    chatName: {
      fontWeight: "bold",
    },
    chatTime: {},
    chatMessageContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    chatMessage: {
      flex: 1,
    },
    unreadBadge: {
      backgroundColor: "#ffcc00",
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 10,
    },
    unreadText: {
      color: "black",
      fontWeight: "bold",
    },
    onlineFriendsContainer: {
        marginTop: 0,
      },
     
      onlineFriendsList: {
        paddingLeft: 15,
        paddingRight: 5,
      },
      searchAndGroupContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15, 
        marginTop: 10,
      },
      inputContainer: {
        flex: 1, // Makes the input take most of the space
        marginRight: 10, // Spacing between input and button
        height:40
      },
      addGroupIcon: {
        paddingLeft: 10,
      },
      container: {
        flex: 1,
      },
      scrollContainer: {
        flexGrow: 1, // Ensures scrollability
        paddingBottom: 10, // Adds space at the bottom
      },
  });