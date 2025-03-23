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
import ChatHeader from "../../components/Chat/ChatDetails/ChatHeader";
import MessageBubble from "../../components/Chat/ChatDetails/MessageBubble";

// Types
import { AppStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { dummyMessages } from "../../data/Chat";
import { styles } from "../../styles/Chat";


type ChatDetailsScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "ChatDetails"
>;

const ChatDetailsScreen = ({ navigation }: ChatDetailsScreenProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>(dummyMessages);
  const [messageText, setMessageText] = useState<string>("");
  const user_id = "1234";
  const first_name = "John";
  const last_name = "Doe";
  const profile_image_id = "https://randomuser.me/api/portraits/men/53.jpg";
  // Send Message
  const sendMessage = () => {
    if (!messageText.trim()) return;

    const newMessage: ChatMessage = {
      id: String(messages.length + 1),
      message: messageText,
      sender_id: user_id,
      type: "sent",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      is_read: false,
      sender: {
        id: user_id,
        name: `${first_name} ${last_name}`,
        avatar: profile_image_id,
      },
    };

    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setMessageText("");
  };
  // Render Messages
  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <View style={styles.messageWrapper}>
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
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ChatHeader
        navigation={navigation}
        emp_name={`${first_name} ${last_name}`}
        online={true}
        profile_image_id={profile_image_id}
        onPressProfileImage={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <FlatList
        data={[...messages].reverse()}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        inverted
        contentContainerStyle={styles.listContent}
      />

      {/* Chat Input Box */}
      <View style={styles.inputContainer}>
        {/* Emoji Button */}
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="add-circle-outline" size={24} color="#555" />
        </TouchableOpacity>

        {/* Text Input */}
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#aaa"
          value={messageText}
          onChangeText={setMessageText}
        />

        {/* Voice Message Button */}
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color="#555"
          />
        </TouchableOpacity>

        {/* Send Button */}
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="arrow-up-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



export default ChatDetailsScreen;
