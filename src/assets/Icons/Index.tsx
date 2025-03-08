import React from "react";
import { Ionicons } from "@expo/vector-icons";

// Define IconName type
export type IconName = keyof typeof Ionicons.glyphMap; // Ensures only valid icon names are used

// Define IconProps interface
export interface IconProps {
  name: IconName; // Ensures that only valid icon names are used
  color?: string;
  size?: number;
  style?: object; // Allow custom styles
}

// Define the Icon component
export const Icon: React.FC<IconProps> = ({ name, color = "black", size = 24, style }) => {
  return <Ionicons name={name} color={color} size={size} style={style} />;
};
