import { StyleSheet } from "react-native";

export const ChatDetailsStyles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#fff",
    },
    messageWrapper: {
      marginVertical: 5,
      marginHorizontal: 10,
    },
    listContent: {
      paddingBottom: 10,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 8,
      // backgroundColor: '#f1f1f1',
      borderTopWidth: 1,
      borderTopColor: "#ddd",
    },
    iconButton: {
      padding: 10,
    },
    input: {
      flex: 1,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#fafafa",
      borderColor: "#eaeaea",
      borderWidth: 0.8,
      paddingHorizontal: 15,
      fontSize: 16,
      color: "#333",
    },
    sendButton: {
      marginLeft: 10,
      backgroundColor: "#007AFF",
      borderRadius: 20,
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 10,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
    },
    backButton: {
      padding: 8,
    },
    profileContainer: {
      marginLeft: 8,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    userInfo: {
      flex: 1,
      marginLeft: 12,
    },
    userName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333333',
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 6,
    },
    statusText: {
      fontSize: 12,
      color: '#757575',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginVertical: 6,
      paddingHorizontal: 10,
    },
    receivedContainer: {
      alignSelf: 'flex-start',
    },
    sentContainer: {
      alignSelf: 'flex-end',
    },
    avatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      marginRight: 8,
    },
    contentContainer: {
      maxWidth: '75%',
      flexShrink: 1,
    },
    senderName: {
      fontSize: 12,
      fontWeight: '600',
      color: '#616161',
      marginBottom: 4,
      marginLeft: 6,
    },
    messageBubble: {
      borderRadius: 16,
      paddingVertical: 8,
      paddingHorizontal: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    receivedBubble: {
      backgroundColor: '#FFF',
      borderBottomLeftRadius: 6,
    },
    sentBubble: {
      backgroundColor: '#007AFF',
      borderBottomRightRadius: 6,
    },
    messageText: {
      fontSize: 16,
      color: '#303030',
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-end',
      marginTop: 4,
    },
    timeText: {
      fontSize: 12,
      color: '#8E8E8E',
      marginRight: 4,
    },
    readIcon: {
      marginTop: 1,
      marginLeft: 4,
    },
    optionsContainer: {
      alignSelf: 'flex-end',
      marginTop: 8,
      borderRadius: 8,
      overflow: 'hidden',
    },
    deleteButton: {
      backgroundColor: '#E53935',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
    },
    deleteText: {
      color: '#FFF',
      marginLeft: 6,
      fontSize: 14,
      fontWeight: '500',
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
  });