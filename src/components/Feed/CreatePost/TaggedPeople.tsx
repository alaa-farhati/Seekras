// components/TaggedPeople.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../../constants";
import { styles } from "../../../styles/Feed";
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
    <View style={styles.taggedPeopleContainer}>
      <Text style={styles.taggedPeopleTitle}>Tagged:</Text>
      <View style={styles.taggedPeopleList}>
        {taggedPeople.map((person) => (
          <View key={person.id} style={styles.taggedPerson}>
            <Text style={styles.taggedPersonName}>{person.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};



export default TaggedPeople;