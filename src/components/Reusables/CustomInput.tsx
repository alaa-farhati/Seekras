import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "../../hooks/useTheme"; // Hook to access theme
import { Icon, IconName } from "../../assets/Icons/Index"; // Import your custom Icon component
import { fonts, sizes } from "../../constants"; // Import font and sizes from constants

interface CustomInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void; // For actions like search or send
  leftIcon?: IconName; // Left-side icon
  rightIcon?: IconName; // Right-side icon (overridden for passwords)
  secureTextEntry?: boolean; // Hide text for passwords
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  inputType?: "search" | "login" | "message" | "password"; // Define input purpose
  inputStyle?: TextStyle; // Custom input text style
  placeholderStyle?: TextStyle; // Custom placeholder style
  containerStyle?: ViewStyle; // Custom container style
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  onPress,
  leftIcon,
  rightIcon,
  secureTextEntry = false,
  keyboardType = "default",
  inputType = "default",
  inputStyle,
  placeholderStyle,
  containerStyle,
}) => {
  const { theme } = useTheme(); // Get current theme
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.inputBackground, borderColor: theme.border },
        containerStyle, // Allow external style overrides
      ]}
    >
      {leftIcon && (
        <Icon name={leftIcon} color={theme.text} size={sizes.icon.medium} style={styles.icon} />
      )}

      <TextInput
        style={[
          styles.input,
          { color: theme.text, fontFamily: fonts.regular, fontSize: sizes.text.regular },
          inputStyle, // Allow input text styling
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.text}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
      />

      {/* Toggle lock/unlock for password inputs */}
      {secureTextEntry ? (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.button}>
          <Icon name={isSecure ? "lock-closed-outline" : "lock-open-outline"} color={theme.button} size={sizes.icon.medium} />
        </TouchableOpacity>
      ) : rightIcon ? (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Icon name={rightIcon} color={theme.text} size={sizes.icon.medium} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 50,
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  button: {
    padding: 8,
  },
});

export default CustomInput;
