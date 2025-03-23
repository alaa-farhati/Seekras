import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../constants';

const { width, height } = Dimensions.get('window');

export const OnboardingStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    splashLogo: {
      width: 180,
      height: 180,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    logoText: {
      fontSize: 42,
      fontFamily: fonts.bold,
      color: '#ffffff',
      marginBottom: 20,
      letterSpacing: 1.5,
    },
    tagline: {
      fontSize: 14,
      fontFamily: fonts.medium,
      color: '#ffffff',
      marginTop: 10,
      letterSpacing: 0.5,
    },
    onboardingScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
    },
    contentContainer: {
      width: width * 0.85,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    onboardingImage: {
      width: width * 0.85,
      height: height * 0.4,
      resizeMode: 'cover',
      marginBottom: 30,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 8,
    },
    onboardingTitle: {
      fontSize: 26,
      fontFamily: fonts.semiBold,
      color: colors.accent,
      textAlign: 'center',
      marginBottom: 16,
    },
    onboardingDescription: {
      fontSize: 16,
      fontFamily: fonts.regular,
      color: '#555555',
      textAlign: 'center',
      marginBottom: 40,
      lineHeight: 24,
    },
    navigationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 30,
    },
    navButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    navButtonText: {
      fontSize: 16,
      fontFamily: fonts.medium,
      color: colors.accent,
    },
    paginationDotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    paginationDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#DDDDDD',
      marginHorizontal: 5,
    },
    paginationDotActive: {
      backgroundColor: colors.accent,
      width: 20,
    },
    nextButton: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      backgroundColor: colors.accent,
      borderRadius: 25,
      shadowColor: colors.accent,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
    nextButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontFamily: fonts.bold,
    },
    skipContainer: {
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    skipText: {
      color: '#1E6738',
      fontSize: 16,
      fontFamily: fonts.medium,
    },
  });