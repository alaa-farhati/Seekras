// ProgressBar.tsx

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../hooks/useTheme';
import { fonts } from '../../../constants';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.progressContainer}>
      {[...Array(totalSteps)].map((_, index) => (
        <View key={index} style={styles.progressItemContainer}>
          <View 
            style={[
              styles.progressCircle, 
              { 
                backgroundColor: index + 1 <= currentStep ? theme.accent : theme.inputBackground,
                borderColor: index + 1 <= currentStep ? theme.accent : theme.inputBackground
              }
            ]}
          >
            {index + 1 < currentStep && (
              <Ionicons name="checkmark" size={12} color="#FFFFFF" />
            )}
            {index + 1 === currentStep && (
              <Text style={styles.progressCurrentText}>{index + 1}</Text>
            )}
          </View>
          {index < totalSteps - 1 && (
            <View 
              style={[
                styles.progressLine, 
                { backgroundColor: index + 1 < currentStep ? theme.accent : theme.inputBackground }
              ]} 
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  progressItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    zIndex: 1,
  },
  progressCurrentText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  progressLine: {
    flex: 1,
    height: 2,
    marginHorizontal: -2,
  },
});

export default ProgressBar;