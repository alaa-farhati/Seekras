import { StyleSheet } from 'react-native';
import { fonts, sizes } from '../../constants';

export const PostCardStyles = StyleSheet.create({
    postContainer: {
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 15,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    // Special styling for group posts
    groupPostContainer: {
      borderLeftWidth: 3,
      borderLeftColor: "#FF4500", // Reddit-like color
    },
    groupHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 6,
      paddingBottom: 6,
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0,0,0,0.05)",
    },
    groupImage: {
      width: 28,
      height: 28,
      borderRadius: 14,
      marginRight: 8,
    },
    groupImageFallback: {
      width: 28,
      height: 28,
      borderRadius: 14,
      marginRight: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    groupImageFallbackText: {
      color: "#fff",
      fontSize: 12,
      fontWeight: "bold",
    },
    groupInfo: {
      flex: 1,
    },
    groupName: {
      fontSize: sizes.text.small,
      fontWeight: "bold",
    
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      // Add less margin for group posts
      marginTop: 0,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    userInfo: {
      flexDirection: "column",
      flexGrow: 1,
    },
    userName: {
      fontWeight: "bold",
      fontSize: sizes.text.regular,
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    location: {
      fontSize: sizes.text.extraSmall,
    },
    postImage: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      marginVertical: 10,
      resizeMode: "cover",
    },
    caption: {
      fontSize: sizes.text.body,
      marginBottom: 10,
      lineHeight: 20,
    },
    reactionCounter: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    reactionIcons: {
      flexDirection: "row",
      marginRight: 5,
    },
    reactionIcon: {
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#fff",
    },
    reactionCountText: {
      fontSize: sizes.text.small,
      marginLeft: 5,
    },
    actions: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 5,
      borderTopWidth: 1,
      borderTopColor: "rgba(0,0,0,0.1)",
      paddingTop: 10,
    },
    actionButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    actionText: {
      marginLeft: 5,
      fontSize: sizes.text.small,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    reactionPanel: {
      flexDirection: "row",
      padding: 10,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    reactionButton: {
      alignItems: "center",
      padding: 10,
      marginHorizontal: 5,
    },
    reactionEmoji: {
      fontSize: 24,
      marginBottom: 5,
    },
    reactionName: {
      fontSize: 10,
      fontFamily: fonts.regular,
    },
    shareModal: {
      width: "90%",
      maxHeight: "80%",
      borderRadius: 15,
      overflow: "hidden",
    },
    shareHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0,0,0,0.1)",
    },
    shareTitle: {
      fontSize: sizes.text.large,
      fontWeight: "bold",
      fontFamily: fonts.semiBold,
    },
    shareContent: {
      padding: 15,
    },
    userShareInfo: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
    },
    shareUserImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    shareUserName: {
      fontWeight: "bold",
      fontSize: sizes.text.regular,
      fontFamily: fonts.semiBold,
    },
    shareInput: {
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      minHeight: 80,
      textAlignVertical: "top",
      marginBottom: 15,
      fontFamily: fonts.regular,
    },
    postPreview: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.1)",
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: 15,
    },
    previewImage: {
      width: 80,
      height: 80,
    },
    previewContent: {
      flex: 1,
      padding: 10,
    },
    previewUser: {
      fontWeight: "bold",
      fontFamily: fonts.semiBold,
      fontSize: sizes.text.small,
      marginBottom: 5,
    },
    previewCaption: {
      fontFamily: fonts.regular,
      fontSize: sizes.text.small,
    },
    shareOptions: {
      marginBottom: 15,
    },
    shareOptionTitle: {
      fontFamily: fonts.semiBold,
      fontSize: sizes.text.small,
      marginBottom: 10,
    },
    shareOption: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 20,
      marginRight: 10,
    },
    shareOptionText: {
      marginLeft: 5,
      fontFamily: fonts.regular,
      fontSize: sizes.text.small,
    },
    shareButton: {
      padding: 15,
      alignItems: "center",
    },
    shareButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontFamily: fonts.semiBold,
      fontSize: sizes.text.regular,
    },
  });