import React, { useState } from 'react';
import SplashScreen from '../../components/Auth-Component/Onboarding/SplashScreen';
import OnboardingCard from '../../components/Auth-Component/Onboarding/OnboardingCard';
import { onboardingData } from '../../data/Auth/Onboarding';

interface OnboardingScreenProps {
  onNavigateToAuth: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onNavigateToAuth }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  
  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate to auth when on last card
      onNavigateToAuth();
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  // Show splash screen initially
  if (showSplash) {
    return <SplashScreen onSplashComplete={handleSplashComplete} />;
  }
  
  // Show onboarding cards after splash
  return (
    <OnboardingCard
      item={onboardingData[currentIndex]}
      currentIndex={currentIndex}
      totalItems={onboardingData.length}
      onPrev={handlePrev}
      onNext={handleNext}
      onSkip={onNavigateToAuth}
    />
  );
};

export default OnboardingScreen;