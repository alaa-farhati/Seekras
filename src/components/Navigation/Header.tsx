import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";  
import { Icon, IconName } from "../../assets/Icons/Index"; 
import { useTheme } from "../../hooks/useTheme"; 
import { fonts, sizes } from "../../constants"; 


const userProfileImage = "https://randomuser.me/api/portraits/men/53.jpg"; // Replace with actual user image URL

interface HeaderProps {
  title: string;
  leftIconName: IconName;
  rightIconName: IconName; // Keeping this but replacing its use with an image
  onLeftPress: () => void;
  onRightPress: () => void; // Will be used for profile press
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftIconName,
  rightIconName, // Not used, but kept for consistency
  onLeftPress,
  onRightPress,
}) => {
  const { theme,toggleTheme } = useTheme(); 
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        {
          backgroundColor: theme.primary,
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.contentContainer}>
        {/* Left Icon */}
        <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
          <Icon name={leftIconName} size={sizes.icon.medium} color={theme.text} />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={[
            styles.title,
            {
              fontFamily: fonts.semiBold,
              fontSize: sizes.text.medium,
              color: theme.text,
            },
          ]}
        >
          {title}
        </Text>

        {/* Profile Picture instead of Right Icon */}
        <TouchableOpacity onPress={toggleTheme} style={styles.profileContainer}>
          <Image source={{ uri: userProfileImage }} style={styles.profileImage} />
          {/* <StatusIndicator status={true} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    borderBottomWidth: 0.4,
    borderColor: "#eaeaea",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 10,
  },
  title: {
    textAlign: 'left',
    flex: 1,
  },
  iconContainer: {
    padding: 5,
    width: 40, // Keeps layout consistent
    alignItems: "center",
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden", // Ensures image stays circular
  },
  profileImage: {
    width: "80%",
    height: "80%",
    borderRadius: 20,
  },
});

export default Header;
