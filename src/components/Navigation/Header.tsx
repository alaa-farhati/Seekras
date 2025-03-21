// Header.tsx

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon, IconName } from "../../assets/Icons/Index"; // Adjust the path
import { useTheme } from "../../hooks/useTheme"; // Adjust the path
import { fonts, sizes } from "../../constants"; // Adjust the path
import { useNavigation } from "@react-navigation/native";

const userProfileImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeebom.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fhow-to-create-reddit-avatar-feat..jpg%3Fquality%3D75%26strip%3Dall&f=1&nofb=1&ipt=e964bb1c7d874892b13bb9ef2dea87719eacb554fbfce08cc4f056a9c983bc5d&ipo=images"; // Replace with your default user image

interface HeaderProps {
  title: string;
  leftIconName: IconName;
  rightIconName: IconName;
  onLeftPress: () => void;
  leftClick?: () => void;
  leftText?: string;
  isFeed?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftIconName,
  rightIconName,
  onLeftPress,
  leftClick,
  leftText,
  isFeed,
}) => {
  const { theme,toggleTheme } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top, backgroundColor: theme.background }]}>
      {isFeed ? (
        <View style={styles.feedHeaderContainer}>
          <TouchableOpacity onPress={() =>navigation.goBack() } style={styles.iconContainer}>
            <Icon name={!isFeed ? leftIconName : "menu-outline"} size={24} color={theme.text} />
          </TouchableOpacity>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search here"
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.searchIconContainer}>
              <Icon name="search" size={20} color="#888" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Notifications" as never)}>
            <Icon name="notifications-outline" size={24} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile" as never)} style={styles.profileContainer}>
            <Image source={{ uri: userProfileImage }} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
            <Icon name={leftIconName} size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.title, { fontFamily: fonts.medium, color: theme.text }]}>{title}</Text>
          {leftText && leftClick ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>


            <TouchableOpacity onPress={leftClick} style={styles.leftTextContainer}>
            <Icon name={"add-outline"} size={16} color={theme.text} />
              <Text style={[styles.leftText, { color: theme.text,fontFamily:fonts.medium }]}>{leftText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile" as never)} style={styles.profileContainer}>
              <Image source={{ uri: userProfileImage }} style={styles.profileImage} />
            </TouchableOpacity>
            </View>

           
            
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("Profile" as never)} style={styles.profileContainer}>
              <Image source={{ uri: userProfileImage }} style={styles.profileImage} />
            </TouchableOpacity>
          )}
        </View>
      )}
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
  feedHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  title: {
    textAlign: "left",
    flex: 1,
  },
  iconContainer: {
    padding: 5,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "70%",
    height: "70%",
    borderRadius: 20,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    marginHorizontal: 10,
    height: 40,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#333",
  },
  searchIconContainer: {
    padding: 5,
  },
  leftTextContainer: {
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
    
  },
  leftText: {
    fontSize: 14,
    marginLeft: 5,
  },
});

export default Header;