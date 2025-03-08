import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Icon, IconName } from "../../assets/Icons/Index"; // Assuming you have a custom Icon component
import { useTheme } from "../../hooks/useTheme"; // Hook to access theme
import { fonts, sizes } from "../../constants"; // Import fonts and sizes

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  icon?: IconName; // Optional icon name from Ionicons
  style?: object; // Custom style for the button
  buttonType?: "primary" | "secondary" | "tertiary" | "danger" | "outline" | "ghost"; // Button type
  size?: "small" | "medium" | "large"; // Size of the button
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  icon,
  style,
  buttonType = "primary",
  size = "medium",
}) => {
  const { theme } = useTheme(); // Get current theme

  // Define button size styles
  const sizeStyles = {
    small: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: sizes.text.small,
      iconSize: sizes.icon.small,
    },
    medium: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      fontSize: sizes.text.medium,
      iconSize: sizes.icon.medium,
    },
    large: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      fontSize: sizes.text.large,
      iconSize: sizes.icon.large,
    },
  };

  // Define button type styles (primary, secondary, tertiary, etc.)
  const typeStyles = {
    primary: {
      backgroundColor: theme.text,
      color: theme.background,
    },
    secondary: {
      backgroundColor: theme.secondary,
      color: theme.text,
    },
    tertiary: {
      backgroundColor: "transparent",
      color: theme.text,
      borderWidth: 1,
      borderColor: theme.border,
    },
    danger: {
      backgroundColor: theme.accent,
      color: theme.buttonText,
    },
    outline: {
      backgroundColor: "transparent",
      color: theme.text,
      borderWidth: 1,
      borderColor: theme.border,
    },
    ghost: {
      backgroundColor: "transparent",
      color: theme.text,
      borderWidth: 0,
    },
  };

  // Dynamically determine icon size
  const iconSize = sizeStyles[size]?.iconSize || sizes.icon.medium;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        sizeStyles[size], // Apply size-specific styles
        typeStyles[buttonType], // Apply type-specific styles
        style, // Allow external style overrides
      ]}
    >
      {icon && (
        <Icon
          name={icon}
          color={typeStyles[buttonType].color}
          size={iconSize} // Dynamically set icon size
          style={styles.icon}
        />
      )}
      <Text
        style={[
          styles.buttonText,
          {
            color: typeStyles[buttonType].color,
            fontSize: sizeStyles[size].fontSize,
            fontFamily: fonts.regular,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "space-between",
  
   
  },
  buttonText: {
    textAlign: "center",
  },
  icon: {
    marginRight: 10, // Space between the icon and text
  },
});

export default CustomButton;
