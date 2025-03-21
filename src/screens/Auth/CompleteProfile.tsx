import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  SafeAreaView
} from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import CustomButton from "../../components/Reusables/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, AuthStackParamList } from "../../types/navigation";
import { useTheme } from "../../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have this installed
import { styles } from "../../styles/CompleteProfile";
import ProgressBar from "../../components/Auth/CompleteProfile/ProgressBar";
import StepContent from "../../components/Auth/CompleteProfile/StepContent";
import { hobbies, interests } from "../../data/CompleteProfile";

// Type definition
type CompleteProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "CompleteProfile">,
  NativeStackScreenProps<RootStackParamList, never>
>;

const CompleteProfile: React.FC<CompleteProfileScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const [gender, setGender] = useState<string | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: ""
  });
  const [selectedHobbies, setSelectedHobbies] = useState<number[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Profile completed with:", {
        gender,
        dateOfBirth,
        selectedHobbies: selectedHobbies.map(id => hobbies.find(h => h.id === id)?.name),
        selectedInterests: selectedInterests.map(id => interests.find(i => i.id === id)?.name)
      });
      setIsLoading(false);
      // Navigate to app main screen
      navigation.navigate("App", { screen: "MainTabs" });
    }, 1500);
  };

  const toggleHobby = (id: number) => {
    if (selectedHobbies.includes(id)) {
      setSelectedHobbies(selectedHobbies.filter(hobbyId => hobbyId !== id));
    } else {
      setSelectedHobbies([...selectedHobbies, id]);
    }
  };

  const toggleInterest = (id: number) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(interestId => interestId !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handlePrevious} disabled={currentStep === 1}>
              <Ionicons 
                name="arrow-back" 
                size={24} 
                color={currentStep === 1 ? theme.inputBackground : theme.text} 
              />
            </TouchableOpacity>
            <Text style={[styles.headerTitle, { color: theme.text }]}>Complete Profile</Text>
            <View style={{ width: 24 }} />
          </View>
          <ProgressBar totalSteps={totalSteps} currentStep={currentStep} theme={theme} />
        </View>

        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.formContainer}>
            <StepContent
  currentStep={currentStep}
  theme={theme}
  gender={gender}
  setGender={setGender}
  dateOfBirth={dateOfBirth}
  setDateOfBirth={setDateOfBirth}
  hobbies={hobbies}
  selectedHobbies={selectedHobbies}
  toggleHobby={toggleHobby}
  interests={interests}
  selectedInterests={selectedInterests}
  toggleInterest={toggleInterest}
/>

            </View>

            {/* Next/Complete Button */}
            <CustomButton 
              text={currentStep < totalSteps ? "Next" : "Complete Profile"} 
              style={[styles.actionButton, { backgroundColor: theme.text }]} 
              textStyle={styles.actionButtonText}
              onPress={handleNext} 
            />

            {/* Skip button only on last step */}
            {currentStep === totalSteps && (
              <View style={styles.footerContainer}>
                <TouchableOpacity 
                  style={styles.skipButton} 
                  onPress={() => navigation.navigate("App", { screen: "MainTabs" })}
                >
                  <Text style={[styles.skipText, { color: theme.text }]}>
                    Skip for now
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CompleteProfile;


