import { StyleSheet } from 'react-native';
import { fonts } from '../constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 24,
    },
    headerContainer: {
      marginBottom: 40,
      alignItems: "center",
    },
    title: {
      fontSize: 28,
      fontFamily: fonts.bold,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: fonts.regular,
      opacity: 0.8,
    },
    formContainer: {
      width: "100%",
      marginBottom: 24,
    },
    input: {
      marginBottom: 16,
      width: "100%",
    },
    forgotPasswordButton: {
      alignSelf: "flex-end",
      marginBottom: 24,
    },
    forgotPasswordText: {
      fontFamily: fonts.medium,
      fontSize: 14,
    },
    loginButton: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: 56,
      borderRadius: 12,
      marginBottom: 16,
    },
    loginButtonText: {
      fontFamily: fonts.bold,
      fontSize: 16,
      color: "#FFFFFF",
    },
    dividerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 24,
    },
    divider: {
      flex: 1,
      height: 1,
    },
    dividerText: {
      paddingHorizontal: 16,
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    socialButtonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 32,
    },
    socialButton: {
      width: "48%",
      height: 56,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    footerContainer: {
      alignItems: "center",
    },
    linkButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    linkText: {
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    linkTextBold: {
      fontFamily: fonts.bold,
      fontSize: 14,
    },
  
    signupButton: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: 56,
      borderRadius: 12,
      marginTop: 8,
      marginBottom: 16,
    },
    signupButtonText: {
      fontFamily: fonts.bold,
      fontSize: 16,
      color: "#FFFFFF",
    },
    termsContainer: {
      marginBottom: 32,
      paddingHorizontal: 8,
    },
    termsText: {
      fontFamily: fonts.regular,
      fontSize: 14,
      textAlign: "center",
      lineHeight: 20,
    },
    termsLink: {
      fontFamily: fonts.medium,
    },
   
    loginLink: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
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
 