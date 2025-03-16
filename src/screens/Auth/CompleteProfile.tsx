import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  FlatList,
  SafeAreaView
} from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import CustomButton from "../../components/Reusables/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, AuthStackParamList } from "../../types/navigation";
import { useTheme } from "../../hooks/useTheme";
import CustomInput from "../../components/Reusables/CustomInput";
import { fonts } from "../../constants";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have this installed

// Type definition
type CompleteProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "CompleteProfile">,
  NativeStackScreenProps<RootStackParamList, never>
>;

// Interfaces for data
interface Hobby {
  id: number;
  name: string;
}

interface Interest {
  id: number;
  name: string;
}

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

  // Sample data for hobbies and interests
  const hobbies: Hobby[] = [
    { id: 1, name: "Sports" },
    { id: 2, name: "Reading" },
    { id: 3, name: "Cooking" },
    { id: 4, name: "Gaming" },
    { id: 5, name: "Music" },
    { id: 6, name: "Art" },
    { id: 7, name: "Travel" },
    { id: 8, name: "Photography" },
    { id: 9, name: "Gardening" },
  ];
  
  const interests: Interest[] = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Science" },
    { id: 3, name: "Business" },
    { id: 4, name: "Education" }
  ];

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

  const renderProgressBar = () => (
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Text style={[styles.stepTitle, { color: theme.text }]}>Tell us about yourself</Text>
            <Text style={[styles.stepSubtitle, { color: theme.text }]}>
              Let's get to know you better
            </Text>
            {/* Gender Section */}
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Gender</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity 
                style={[
                  styles.genderButton, 
                  { backgroundColor: gender === "Male" ? theme.text : theme.inputBackground }
                ]}
                onPress={() => setGender("Male")}
              >
                <Text 
                  style={[
                    styles.genderButtonText, 
                    { color: gender === "Male" ? "#FFFFFF" : theme.text }
                  ]}
                >
                  Male
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[
                  styles.genderButton, 
                  { backgroundColor: gender === "Female" ? theme.text : theme.inputBackground }
                ]}
                onPress={() => setGender("Female")}
              >
                <Text 
                  style={[
                    styles.genderButtonText, 
                    { color: gender === "Female" ? "#FFFFFF" : theme.text }
                  ]}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>

            {/* Date of Birth Section */}
            <Text style={[styles.sectionTitle, { color: theme.text, marginTop: 24 }]}>Date of birth</Text>
            <View style={styles.dobContainer}>
              <View style={styles.dobInputContainer}>
                <CustomInput 
                  placeholder="DD" 
                  value={dateOfBirth.day} 
                  onChangeText={(text: string) => setDateOfBirth({...dateOfBirth, day: text})} 
                  containerStyle={styles.dobInput} 
                  inputStyle={{ color: theme.inputText, textAlign: 'center' }} 
                  placeholderStyle={{ color: "#4C4C4C" }}
                  keyboardType="numeric"
                 
                />
              </View>
              
              <View style={styles.dobInputContainer}>
                <CustomInput 
                  placeholder="MM" 
                  value={dateOfBirth.month} 
                  onChangeText={(text: string) => setDateOfBirth({...dateOfBirth, month: text})} 
                  containerStyle={styles.dobInput} 
                  inputStyle={{ color: theme.inputText, textAlign: 'center' }} 
                  placeholderStyle={{ color: "#4C4C4C" }}
                 keyboardType="numeric"
                />
              </View>
              
              <View style={styles.dobInputContainer}>
                <CustomInput 
                  placeholder="YYYY" 
                  value={dateOfBirth.year} 
                  onChangeText={(text: string) => setDateOfBirth({...dateOfBirth, year: text})} 
                  containerStyle={styles.dobInput} 
                  inputStyle={{ color: theme.inputText, textAlign: 'center' }} 
                  placeholderStyle={{ color: "#4C4C4C" }}
                  keyboardType="numeric"
                  
                />
              </View>
            </View>
          </>
        );
      case 2:
        return (
          <>
            <Text style={[styles.stepTitle, { color: theme.text }]}>Your Hobbies</Text>
            <Text style={[styles.stepSubtitle, { color: theme.text }]}>
              What do you enjoy doing?
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Select your hobbies</Text>
            <View style={styles.hobbiesContainer}>
              <FlatList
              key="hobbies-list"  // Add this key
                data={hobbies}
                numColumns={3}
                scrollEnabled={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.hobbyItem,
                      { backgroundColor: selectedHobbies.includes(item.id) ? theme.text : theme.inputBackground }
                    ]}
                    onPress={() => toggleHobby(item.id)}
                  >
                    <View style={styles.hobbyIconContainer}>
                      <View style={[
                        styles.hobbyIcon, 
                        { backgroundColor: selectedHobbies.includes(item.id) ? '#FFFFFF20' : '#DDDDDD' }
                      ]}>
                        {/* Placeholder for icon */}
                      </View>
                    </View>
                    <Text 
                      style={[
                        styles.hobbyText, 
                        { color: selectedHobbies.includes(item.id) ? '#FFFFFF' : theme.text }
                      ]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.hobbiesGrid}
              />
            </View>
          </>
        );
      case 3:
        return (
          <>
            <Text style={[styles.stepTitle, { color: theme.text }]}>Your Interests</Text>
            <Text style={[styles.stepSubtitle, { color: theme.text }]}>
              What topics are you passionate about?
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Select your interests</Text>
            <View style={styles.interestsContainer}>
              <FlatList
               key="interests-list"  // Add this key
                data={interests}
                numColumns={2}
                scrollEnabled={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.interestItem,
                      { backgroundColor: selectedInterests.includes(item.id) ? theme.text : theme.inputBackground }
                    ]}
                    onPress={() => toggleInterest(item.id)}
                  >
                    <View style={styles.interestIconContainer}>
                      <View style={[
                        styles.interestIcon,
                        { backgroundColor: selectedInterests.includes(item.id) ? '#FFFFFF20' : '#DDDDDD' }
                      ]}>
                        {/* Placeholder for icon */}
                      </View>
                    </View>
                    <Text 
                      style={[
                        styles.interestText, 
                        { color: selectedInterests.includes(item.id) ? '#FFFFFF' : theme.text }
                      ]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.interestsGrid}
              />
            </View>
          </>
        );
      default:
        return null;
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
          {renderProgressBar()}
        </View>

        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.formContainer}>
              {renderStepContent()}
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    headerWrapper: {
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#EFEFEF',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: fonts.medium,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      left:40,
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
    stepTitle: {
      fontSize: 24,
      fontFamily: fonts.bold,
      marginBottom: 8,
      textAlign: 'center',
    },
    stepSubtitle: {
      fontSize: 16,
      fontFamily: fonts.regular,
      opacity: 0.8,
      marginBottom: 32,
      textAlign: 'center',
    },
    formContainer: {
      width: "100%",
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: fonts.medium,
      marginBottom: 12,
    },
    genderContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    genderButton: {
      width: "48%",
      height: 56,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    genderButtonText: {
      fontFamily: fonts.medium,
      fontSize: 16,
    },
    dobContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    dobInputContainer: {
      width: "31%",
    },
    dobInput: {
      height: 56,
      borderRadius: 12,
    },
    hobbiesContainer: {
      width: "100%",
    },
    hobbiesGrid: {
      paddingVertical: 8,
    },
    hobbyItem: {
      flex: 1,
      aspectRatio: 1,
      margin: 4,
      borderRadius: 12,
      padding: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    hobbyIconContainer: {
      marginBottom: 8,
    },
    hobbyIcon: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
    },
    hobbyText: {
      fontFamily: fonts.regular,
      fontSize: 12,
      textAlign: "center",
    },
    interestsContainer: {
      width: "100%",
    },
    interestsGrid: {
      paddingVertical: 8,
    },
    interestItem: {
      flex: 1,
      aspectRatio: 1.2,
      margin: 4,
      borderRadius: 12,
      padding: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    interestIconContainer: {
      marginBottom: 12,
    },
    interestIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    interestText: {
      fontFamily: fonts.medium,
      fontSize: 14,
      textAlign: "center",
    },
    actionButton: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: 56,
      borderRadius: 12,
      marginTop: 16,
      marginBottom: 16,
    },
    actionButtonText: {
      fontFamily: fonts.bold,
      fontSize: 16,
      color: "#FFFFFF",
    },
    footerContainer: {
      alignItems: "center",
    },
    skipButton: {
      padding: 8,
    },
    skipText: {
      fontFamily: fonts.regular,
      fontSize: 14,
      opacity: 0.7,
    },
  });
