import React from "react";
import { View, Text } from "react-native";
import { Icon } from "../../../assets/Icons/Index";
import { CompleteProfileStyles } from "../../../styles/Auth-Styles/CompleteProfile";



const ProgressBar: React.FC<ProgressBarProps> = ({ totalSteps, currentStep, theme }) => {
  return (
    <View style={CompleteProfileStyles.progressContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View key={index} style={CompleteProfileStyles.progressItemContainer}>
          <View
            style={[
              CompleteProfileStyles.progressCircle,
              {
                backgroundColor: index + 1 <= currentStep ? theme?.accent ?? "blue" : theme?.inputBackground ?? "gray",
                borderColor: index + 1 <= currentStep ? theme?.accent ?? "blue" : theme?.inputBackground ?? "gray",
              },
            ]}
          >
            {index + 1 < currentStep && Icon ? <Icon name="checkmark" size={12} color="#FFFFFF" /> : null}
            {index + 1 === currentStep && <Text style={CompleteProfileStyles.progressCurrentText}>{index + 1}</Text>}
          </View>
          {index < totalSteps - 1 && (
            <View
              style={[
                CompleteProfileStyles.progressLine,
                { backgroundColor: index + 1 < currentStep ? theme?.accent ?? "blue" : theme?.inputBackground ?? "gray" },
              ]}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default ProgressBar;
