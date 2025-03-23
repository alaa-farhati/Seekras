import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

export const CompleteProfileStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    headerWrapper: {
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#EFEFEF',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: fonts.medium,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      left:40,
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
    progressItemContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    progressCircle: {
      width: 24,
      height: 24,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      zIndex: 1,
    },
    progressCurrentText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontFamily: fonts.medium,
    },
    progressLine: {
      flex: 1,
      height: 2,
      marginHorizontal: -2,
    },
    stepTitle: {
      fontSize: 24,
      fontFamily: fonts.bold,
      marginBottom: 8,
      textAlign: 'center',
    },
    stepSubtitle: {
      fontSize: 16,
      fontFamily: fonts.regular,
      opacity: 0.8,
      marginBottom: 32,
      textAlign: 'center',
    },
    formContainer: {
      width: "100%",
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: fonts.medium,
      marginBottom: 12,
    },
    genderContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    genderButton: {
      width: "48%",
      height: 56,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    genderButtonText: {
      fontFamily: fonts.medium,
      fontSize: 16,
    },
    dobContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    dobInputContainer: {
      width: "31%",
    },
    dobInput: {
      height: 56,
      borderRadius: 12,
    },
    hobbiesContainer: {
      width: "100%",
    },
    hobbiesGrid: {
      paddingVertical: 8,
    },
    hobbyItem: {
      flex: 1,
      aspectRatio: 1,
      margin: 4,
      borderRadius: 12,
      padding: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    hobbyIconContainer: {
      marginBottom: 8,
    },
    hobbyIcon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    hobbyText: {
      fontFamily: fonts.regular,
      fontSize: 12,
      textAlign: "center",
    },
    interestsContainer: {
      width: "100%",
    },
    interestsGrid: {
      paddingVertical: 8,
    },
    interestItem: {
      flex: 1,
      aspectRatio: 1.2,
      margin: 4,
      borderRadius: 12,
      padding: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    interestIconContainer: {
      marginBottom: 12,
    },
    interestIcon: {
      width: 60,
      height: 60,
      borderRadius: 30,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    interestText: {
      fontFamily: fonts.medium,
      fontSize: 14,
      textAlign: "center",
    },
    actionButton: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: 56,
      borderRadius: 12,
      marginTop: 16,
      marginBottom: 16,
    },
    actionButtonText: {
      fontFamily: fonts.bold,
      fontSize: 16,
      color: "#FFFFFF",
    },
    footerContainer: {
      alignItems: "center",
    },
    skipButton: {
      padding: 8,
    },
    skipText: {
      fontFamily: fonts.regular,
      fontSize: 14,
      opacity: 0.7,
    },
  });