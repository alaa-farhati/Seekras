import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

export const CreatePostStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    scrollContent: {
      flex: 1,
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#f2f2f2",
    },
    optionText: {
      marginLeft: 12,
      fontSize: 16,
      color: "#666",
      fontFamily: fonts.regular,
    },
      feedContent: {
        paddingHorizontal: 10,
        paddingTop: 10,
        flexGrow: 1,
      },
      centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      imagePreviewContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 16,
      },
      imageWrapper: {
        position: "relative",
        margin: 4,
      },
      previewImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
      },
      removeImageButton: {
        position: "absolute",
        top: -8,
        right: -8,
        backgroundColor: "transparent",
        zIndex: 1,
      },
      
      destinationInput: {
        flex: 1,
        marginLeft: 12,
        fontSize: 16,
        color: "#333",
        fontFamily: fonts.regular,
      },
      inputContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
      },
      titleInput: {
        fontSize: 16,
        color: "#333",
        padding: 8,
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
        fontFamily: fonts.regular,
      },
      bodyInput: {
        fontSize: 16,
        color: "#333",
        padding: 8,
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
        minHeight: 150,
        fontFamily: fonts.regular,
      },
      taggedPeopleContainer: {
        padding: 16,
      },
      taggedPeopleTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 8,
        color: "#333",
        fontFamily: fonts.medium,
      },
      taggedPeopleList: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      taggedPerson: {
        backgroundColor: "#f0f2f5",
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
        marginBottom: 8,
      },
      taggedPersonName: {
        fontSize: 14,
        color: "#333",
        fontFamily: fonts.regular,
      },
      modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",
      },
      modalContent: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "70%",
      },
      modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        fontFamily: fonts.semiBold,
      },
      contactItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      },
      contactAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
      },
      contactName: {
        flex: 1,
        fontSize: 16,
        color: "#333",
        fontFamily: fonts.regular,
      },
      userInfoSection: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
      },
      userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
      },
      userName: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        fontFamily: fonts.medium,
      },
  });