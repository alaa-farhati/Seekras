import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import CustomInput from "../../Reusables/CustomInput";
import { CompleteProfileStyles } from "../../../styles/Auth/CompleteProfile";


interface Hobby {
  id: number;
  name: string;
  image?: string; // Add image URL property
}

interface Interest {
  id: number;
  name: string;
  image?: string; // Add image URL property
}

interface Theme {
  text: string;
  inputBackground?: string;
  inputText: string;
  // Add other theme properties as needed
}

interface StepContentProps {
  currentStep: number;
  theme: Theme;
  gender: string | null;
  setGender: (gender: string) => void;
  dateOfBirth: { day: string; month: string; year: string };
  setDateOfBirth: (dob: { day: string; month: string; year: string }) => void;
  hobbies: Hobby[];
  selectedHobbies: number[];
  toggleHobby: (id: number) => void;
  interests: Interest[];
  selectedInterests: number[];
  toggleInterest: (id: number) => void;
}

const StepContent: React.FC<StepContentProps> = ({
  currentStep,
  theme,
  gender,
  setGender,
  dateOfBirth,
  setDateOfBirth,
  hobbies,
  selectedHobbies = [],
  toggleHobby,
  interests,
  selectedInterests = [],
  toggleInterest,
}) => {
  switch (currentStep) {
    case 1:
      return (
        <>
          <Text style={[CompleteProfileStyles.stepTitle, { color: theme.text }]}>Tell us about yourself</Text>
          <Text style={[CompleteProfileStyles.stepSubtitle, { color: theme.text }]}>
            Let's get to know you better
          </Text>

          {/* Gender Selection */}
          <Text style={[CompleteProfileStyles.sectionTitle, { color: theme.text }]}>Gender</Text>
          <View style={CompleteProfileStyles.genderContainer}>
            {["Male", "Female"].map((g) => (
              <TouchableOpacity
                key={g}
                style={[
                  CompleteProfileStyles.genderButton,
                  { backgroundColor: gender === g ? theme.text : theme.inputBackground ?? "gray" },
                ]}
                onPress={() => setGender(g)}
              >
                <Text
                  style={[
                    CompleteProfileStyles.genderButtonText,
                    { color: gender === g ? "#FFFFFF" : theme.text },
                  ]}
                >
                  {g}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Date of Birth */}
          <Text style={[CompleteProfileStyles.sectionTitle, { color: theme.text, marginTop: 24 }]}>
            Date of birth
          </Text>
          <View style={CompleteProfileStyles.dobContainer}>
            {["day", "month", "year"].map((key, index) => (
              <View key={index} style={CompleteProfileStyles.dobInputContainer}>
                <CustomInput
                  placeholder={key.toUpperCase()}
                  value={dateOfBirth[key as keyof typeof dateOfBirth] || ""}
                  onChangeText={(text) =>
                    setDateOfBirth({ ...dateOfBirth, [key]: text })
                  }
                  containerStyle={CompleteProfileStyles.dobInput}
                  inputStyle={{ color: theme.inputText, textAlign: "center" }}
                  placeholderStyle={{ color: "#4C4C4C" }}
                  keyboardType="numeric"
                />
              </View>
            ))}
          </View>
        </>
      );

    case 2:
      return (
        <>
          <Text style={[CompleteProfileStyles.stepTitle, { color: theme.text }]}>Your Hobbies</Text>
          <Text style={[CompleteProfileStyles.stepSubtitle, { color: theme.text }]}>
            What do you enjoy doing?
          </Text>
          <Text style={[CompleteProfileStyles.sectionTitle, { color: theme.text }]}>Select your hobbies</Text>
          <View style={CompleteProfileStyles.hobbiesContainer}>
            <FlatList
              key="hobbies-list"
              data={hobbies}
              numColumns={3}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    CompleteProfileStyles.hobbyItem,
                    { backgroundColor: selectedHobbies?.includes(item.id) ? theme.text : theme.inputBackground },
                  ]}
                  onPress={() => toggleHobby(item.id)}
                >
                  <View style={CompleteProfileStyles.hobbyIconContainer}>
                    {item.image ? (
                      <Image 
                        source={{ uri: item.image }} 
                        style={CompleteProfileStyles.hobbyIcon} 
                        resizeMode="cover"
                      />
                    ) : (
                      <View
                        style={[
                          CompleteProfileStyles.hobbyIcon,
                          { backgroundColor: selectedHobbies?.includes(item.id) ? "#FFFFFF20" : "#DDDDDD" },
                        ]}
                      />
                    )}
                  </View>
                  <Text
                    style={[
                      CompleteProfileStyles.hobbyText,
                      { color: selectedHobbies?.includes(item.id) ? "#FFFFFF" : theme.text },
                    ]}
                  >
                    {item.name ?? "Unknown"}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={CompleteProfileStyles.hobbiesGrid}
            />
          </View>
        </>
      );

    case 3:
      return (
        <>
          <Text style={[CompleteProfileStyles.stepTitle, { color: theme.text }]}>Your Interests</Text>
          <Text style={[CompleteProfileStyles.stepSubtitle, { color: theme.text }]}>
            What topics are you passionate about?
          </Text>
          <Text style={[CompleteProfileStyles.sectionTitle, { color: theme.text }]}>Select your interests</Text>
          <View style={CompleteProfileStyles.interestsContainer}>
            <FlatList
              key="interests-list"
              data={interests}
              numColumns={2}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    CompleteProfileStyles.interestItem,
                    { backgroundColor: selectedInterests?.includes(item.id) ? theme.text : theme.inputBackground },
                  ]}
                  onPress={() => toggleInterest(item.id)}
                >
                  <View style={CompleteProfileStyles.interestIconContainer}>
                    {item.image ? (
                      <Image 
                        source={{ uri: item.image }} 
                        style={CompleteProfileStyles.interestIcon} 
                        resizeMode="cover"
                      />
                    ) : (
                      <View
                        style={[
                          CompleteProfileStyles.interestIcon,
                          { backgroundColor: selectedInterests?.includes(item.id) ? "#FFFFFF20" : "#DDDDDD" },
                        ]}
                      />
                    )}
                  </View>
                  <Text
                    style={[
                      CompleteProfileStyles.interestText,
                      { color: selectedInterests?.includes(item.id) ? "#FFFFFF" : theme.text },
                    ]}
                  >
                    {item.name ?? "Unknown"}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={CompleteProfileStyles.interestsGrid}
            />
          </View>
        </>
      );

    default:
      return null;
  }
};

export default StepContent;