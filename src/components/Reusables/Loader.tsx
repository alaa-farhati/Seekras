import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle, Animated, Easing } from 'react-native';
import { useTheme } from '../../hooks/useTheme'; // Assuming you have this hook

// Props interface for Loader component
interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
  text?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  showText?: boolean;
  pulsating?: boolean;
  // For timeout functionality
  timeout?: number;
  onTimeout?: () => void;
}

/**
 * Smart loader component with customizable properties
 * - Supports animation
 * - Auto-detects theme
 * - Handles timeouts
 */
const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  color,
  text = 'Loading...',
  textStyle,
  containerStyle,
  showText = true,
  pulsating = false,
  timeout,
  onTimeout
}) => {
  const { theme } = useTheme(); // Get theme from context
  const [dots, setDots] = useState('...');
  const pulseAnim = new Animated.Value(1);

  // Use theme color if no color provided
  const loaderColor = color || theme.text;
  
  // Handle animated dots for text
  useEffect(() => {
    if (showText) {
      const interval = setInterval(() => {
        setDots(prevDots => {
          if (prevDots === '...') return '.';
          if (prevDots === '.') return '..';
          if (prevDots === '..') return '...';
          return '.';
        });
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [showText]);

  // Handle pulsating animation
  useEffect(() => {
    if (pulsating) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
          })
        ])
      ).start();
    }
  }, [pulsating, pulseAnim]);

  // Handle timeout
  useEffect(() => {
    if (timeout && onTimeout) {
      const timer = setTimeout(() => {
        onTimeout();
      }, timeout);
      
      return () => clearTimeout(timer);
    }
  }, [timeout, onTimeout]);

  const displayText = showText ? text.replace(/\.+$/, '') + dots : '';

  return (
    <View style={[styles.loaderContainer, containerStyle]}>
      <Animated.View style={{ transform: [{ scale: pulsating ? pulseAnim : 1 }] }}>
        <ActivityIndicator size={size} color={loaderColor} />
      </Animated.View>
      {showText && (
        <Text style={[styles.loaderText, { color: loaderColor }, textStyle]}>
          {displayText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Loader;