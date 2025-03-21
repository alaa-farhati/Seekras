// components/TagPeopleModal.tsx
import React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, Image, StyleSheet } from "react-native";
import { Icon } from "../../../assets/Icons/Index";
import { fonts } from "../../../constants";
import { styles } from "../../../styles/Feed";
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
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Tag People</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.contactItem}
                onPress={() => onTagPerson(item)}
              >
                <Image source={{ uri: item.avatar }} style={styles.contactAvatar} />
                <Text style={styles.contactName}>{item.name}</Text>
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