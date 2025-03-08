import { Dimensions } from "react-native";

// Get the screen dimensions
const { width, height } = Dimensions.get("window");

export const sizes = {
  text: {
    title: 24,        // Title text size
    heading: 22,      // Heading text size
    subheading: 18,   // Subheading text size
    label: 14,        // Label text size
    body: 16,         // Body text (regular text) size
    caption: 12,      // Caption text size
    extraSmall: 10,    // Extra small text size
    small: 12,         // Small text size
    regular: 14,       // Regular text size
    medium: 16,        // Medium text size
    large: 18,         // Large text size
    extraLarge: 22,
  },

  icon: {
    small: 16,        // Small icon size
    medium: 20,       // Medium icon size
    large: 32,        // Large icon size
  },

  // Optional: You can also add other size-related categories, such as spacing or layout
  spacing: {
    small: 8,         // Small spacing (margin, padding, etc.)
    medium: 16,       // Medium spacing
    large: 24,        // Large spacing
  },

  layout: {
    buttonHeight: 50, // Button height
    cardHeight: 200,  // Card height (example)
  },

  // Screen dimensions
  screen: {
    width,  // Screen width
    height, // Screen height
  },
};
