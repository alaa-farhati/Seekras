import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { OnboardingStyle } from '../../../styles/Auth-Styles/Onboarding';

interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface OnboardingCardProps {
  item: OnboardingItem;
  currentIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingCard: React.FC<OnboardingCardProps> = ({
  item,
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  onSkip,
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalItems - 1;

  return (
    <SafeAreaView style={OnboardingStyle.container}>
      <View style={OnboardingStyle.skipContainer}>
        <TouchableOpacity onPress={onSkip}>
          <Text style={OnboardingStyle.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      
      <View style={OnboardingStyle.onboardingScreen}>
        <Image source={{ uri: item.image }} style={OnboardingStyle.onboardingImage} />
        
        <View style={OnboardingStyle.contentContainer}>
          <Text style={OnboardingStyle.onboardingTitle}>{item.title}</Text>
          <Text style={OnboardingStyle.onboardingDescription}>{item.description}</Text>
        </View>
      </View>
      
      <View style={OnboardingStyle.navigationContainer}>
        {!isFirst && (
          <TouchableOpacity onPress={onPrev} style={OnboardingStyle.navButton}>
            <Text style={OnboardingStyle.navButtonText}>Prev</Text>
          </TouchableOpacity>
        )}
        
        <View style={OnboardingStyle.paginationDotsContainer}>
          {Array(totalItems).fill(0).map((_, index) => (
            <View
              key={index}
              style={[
                OnboardingStyle.paginationDot,
                index === currentIndex && OnboardingStyle.paginationDotActive,
              ]}
            />
          ))}
        </View>
        
        <TouchableOpacity 
          style={OnboardingStyle.nextButton} 
          onPress={onNext}
        >
          <Text style={OnboardingStyle.nextButtonText}>
            {isLast ? 'Get Started' : 'Next'}
            {' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingCard;