import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle, 
  TouchableOpacity, 
  Animated, 
  LayoutAnimation, 
  Platform, 
  UIManager 
} from 'react-native';
import { useTheme } from '../../hooks/useTheme'; // Assuming you have this hook

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Props interface for ErrorText component
interface ErrorTextProps {
  message: string;
  color?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  icon?: React.ReactNode;
  onRetry?: () => void;
  retryText?: string;
  retryTextStyle?: TextStyle;
  // Additional smart features
  autoHide?: boolean;
  hideAfter?: number;
  showRetryTimer?: boolean;
  retryAfter?: number;
  maxRetries?: number;
}

/**
 * Smart error message component with customizable properties
 * - Supports animations
 * - Auto-retry functionality
 * - Auto-hide capability
 * - Retry countdown timer
 * - Maximum retry limiting
 */
const ErrorText: React.FC<ErrorTextProps> = ({
  message,
  color,
  textStyle,
  containerStyle,
  icon,
  onRetry,
  retryText = 'Try Again',
  retryTextStyle,
  autoHide = false,
  hideAfter = 5000,
  showRetryTimer = false,
  retryAfter = 3000,
  maxRetries = 0
}) => {
  const { theme } = useTheme(); // Get theme from context
  const [visible, setVisible] = useState(true);
  const [canRetry, setCanRetry] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [countdown, setCountdown] = useState(retryAfter / 1000);
  const fadeAnim = new Animated.Value(1);
  
  // Use theme color if no color provided
  const errorColor = color || theme.error || '#FF3B30';

  // Handle auto-hide functionality
  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        }).start(() => {
          setVisible(false);
        });
      }, hideAfter);
      
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideAfter, fadeAnim]);

  // Handle retry countdown timer
  useEffect(() => {
    if (showRetryTimer && !canRetry) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanRetry(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [showRetryTimer, canRetry]);

  // Custom retry handler with limitations
  const handleRetry = () => {
    if (!canRetry || !onRetry) return;
    
    // Check max retries
    if (maxRetries > 0 && retryCount >= maxRetries) {
      return;
    }
    
    // Animate the button press
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    // Call the retry function
    onRetry();
    setRetryCount(prev => prev + 1);
    
    // Handle retry timer if enabled
    if (showRetryTimer) {
      setCanRetry(false);
      setCountdown(retryAfter / 1000);
    }
  };

  if (!visible) return null;

  return (
    <Animated.View style={[
      styles.errorContainer, 
      containerStyle,
      { opacity: fadeAnim }
    ]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={[styles.errorText, { color: errorColor }, textStyle]}>
        {message}
      </Text>
      {onRetry && (
        <TouchableOpacity
          onPress={handleRetry}
          disabled={!canRetry || (maxRetries > 0 && retryCount >= maxRetries)}
          style={[
            styles.retryButton,
            !canRetry && styles.retryButtonDisabled
          ]}
        >
          <Text style={[
            styles.retryText, 
            retryTextStyle,
            !canRetry && styles.retryTextDisabled
          ]}>
            {showRetryTimer && !canRetry ? `${retryText} (${countdown}s)` : retryText}
            {maxRetries > 0 && ` (${retryCount}/${maxRetries})`}
          </Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  retryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    borderRadius: 4,
  },
  retryButtonDisabled: {
    opacity: 0.6,
  },
  retryText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  retryTextDisabled: {
    opacity: 0.7,
  },
  iconContainer: {
    marginBottom: 10,
  }
});

export default ErrorText;