import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FeedList } from '../../components/Feed-Component/Feed/FeedList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../types/navigation';

interface FeedScreenProps {
  navigation: NativeStackNavigationProp<AppStackParamList>;
}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FeedList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default FeedScreen;