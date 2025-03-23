// components/TaggedPeople.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CreatePostStyles } from "../../../styles/Feed/CreatePost";

interface TaggedPeopleProps {
  taggedPeople: Array<{
    id: string;
    name: string;
    avatar: string;
  }>;
}

const TaggedPeople: React.FC<TaggedPeopleProps> = ({ taggedPeople }) => {
  if (taggedPeople.length === 0) return null;
  
  return (
    <View style={CreatePostStyles.taggedPeopleContainer}>
      <Text style={CreatePostStyles.taggedPeopleTitle}>Tagged:</Text>
      <View style={CreatePostStyles.taggedPeopleList}>
        {taggedPeople.map((person) => (
          <View key={person.id} style={CreatePostStyles.taggedPerson}>
            <Text style={CreatePostStyles.taggedPersonName}>{person.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};



export default TaggedPeople;