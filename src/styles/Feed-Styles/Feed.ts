import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

export const FeedStyles = StyleSheet.create({
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
      
  });