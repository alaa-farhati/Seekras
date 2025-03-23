import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import { OnboardingStyle } from '../../../styles/Auth/Onboarding';
import { logo } from '../../../assets/Index';

interface SplashScreenProps {
  onSplashComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onSplashComplete }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.9,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Delay before completing animation
      setTimeout(() => onSplashComplete(), 400);
    });
  }, []);

  return (
    <View style={[OnboardingStyle.splashContainer]}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          alignItems: 'center',
        }}
      >
        <Image
          source={logo}
          style={OnboardingStyle.splashLogo}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;