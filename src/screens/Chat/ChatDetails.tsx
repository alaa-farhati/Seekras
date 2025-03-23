import React from "react";
import { View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../types/navigation";
import ChatDetailsList from "../../components/Chat-Component/ChatDetails/ChatDetailsList";

interface ChatDetailsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamList, "ChatDetails">;
}

const ChatDetailsScreen: React.FC<ChatDetailsScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ChatDetailsList navigation={navigation} />
    </View>
  );
};

export default ChatDetailsScreen;
