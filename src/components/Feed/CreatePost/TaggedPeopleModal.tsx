// components/TagPeopleModal.tsx
import React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, Image, StyleSheet } from "react-native";
import { Icon } from "../../../assets/Icons/Index";
import { CreatePostStyles } from "../../../styles/Feed/CreatePost";

interface Contact {
  id: string;
  name: string;
  avatar: string;
}

interface TagPeopleModalProps {
  visible: boolean;
  contacts: Contact[];
  taggedPeople: Contact[];
  onClose: () => void;
  onTagPerson: (person: Contact) => void;
}

const TagPeopleModal: React.FC<TagPeopleModalProps> = ({ 
  visible, 
  contacts, 
  taggedPeople, 
  onClose, 
  onTagPerson 
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={CreatePostStyles.modalContainer}>
        <View style={CreatePostStyles.modalContent}>
          <View style={CreatePostStyles.modalHeader}>
            <Text style={CreatePostStyles.modalTitle}>Tag People</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={CreatePostStyles.contactItem}
                onPress={() => onTagPerson(item)}
              >
                <Image source={{ uri: item.avatar }} style={CreatePostStyles.contactAvatar} />
                <Text style={CreatePostStyles.contactName}>{item.name}</Text>
                {taggedPeople.some(p => p.id === item.id) && (
                  <Icon name="checkmark-circle" size={24} color="#5E72E4" />
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};



export default TagPeopleModal;