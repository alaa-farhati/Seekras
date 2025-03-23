import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StatusIndicatorProps {
  status: boolean | null; // true = online, false = away, null = offline
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const backgroundColor = status 
    ? '#4CAF50'      // online - green
    : status === false 
      ? '#FFC107'    // away - yellow
      : '#757575';   // offline - gray

  return (
    <View style={[styles.statusIndicator, { backgroundColor }]} />
  );
};

const styles = StyleSheet.create({
  statusIndicator: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'white',
    bottom: 0,
    right: 0,
  },
});

export default StatusIndicator;