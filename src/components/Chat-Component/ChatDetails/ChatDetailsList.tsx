// ChatDetailsList.tsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Components
import MessageBubble from "./MessageBubble";

// Types
import { dummyMessages } from "../../../data/Chat";
import { ChatDetailsStyles } from "../../../styles/Chat-Styles/ChatDetails";
import ChatHeader from "./ChatHeader";

interface ChatDetailsListProps {
  navigation?: any;
  initialMessages?: ChatMessage[];
  userId?: string;
  firstName?: string;
  lastName?: string;
  profileImageId?: string;
}

const ChatDetailsList: React.FC<ChatDetailsListProps> = ({
  navigation,
  initialMessages = dummyMessages,
  userId = "1234",
  firstName = "John",
  lastName = "Doe",
  profileImageId = "https://randomuser.me/api/portraits/men/53.jpg",
}) => {
  const [messages, setMessages] = useState(initialMessages);
  const [messageText, setMessageText] = useState("");

  // Render Messages
  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <MessageBubble
      type={item.type as "sent" | "received"}
      text={item.message}
      time={item.time}
      status={
        item.type === "sent" ? (item.is_read ? "read" : "unread") : undefined
      }
      sender={item.type === "received" ? item.sender.name : undefined}
      avatar={item.type === "received" ? item.sender.avatar : undefined}
    />
  );

  return (
    <SafeAreaView style={ChatDetailsStyles.safeArea}>
      <ChatHeader
        navigation={navigation}
        emp_name={`${firstName} ${lastName}`}
        online={true}
        profile_image_id={profileImageId}
        onPressProfileImage={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <FlatList
        data={[...messages].reverse()}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        inverted
        contentContainerStyle={ChatDetailsStyles.listContent}
      />

      {/* Chat Input Box */}
      <View style={ChatDetailsStyles.inputContainer}>
        {/* Emoji Button */}
        <TouchableOpacity style={ChatDetailsStyles.iconButton}>
          <Ionicons name="add-circle-outline" size={24} color="#555" />
        </TouchableOpacity>

        {/* Text Input */}
        <TextInput
          style={ChatDetailsStyles.input}
          placeholder="Type a message..."
          placeholderTextColor="#aaa"
          value={messageText}
          onChangeText={setMessageText}
        />

        {/* Voice Message Button */}
        <TouchableOpacity style={ChatDetailsStyles.iconButton}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color="#555"
          />
        </TouchableOpacity>

        {/* Send Button */}
        <TouchableOpacity onPress={()=>console.log("Send Message")} style={ChatDetailsStyles.sendButton}>
          <Ionicons name="arrow-up-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatDetailsList;