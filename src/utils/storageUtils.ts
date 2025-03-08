import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data to AsyncStorage
export const saveToStorage = async (key: string, value: any): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

// Get data from AsyncStorage by key const user = await getFromStorage<User>('user_key');
export const getFromStorage = async <T>(key: string): Promise<T | null> => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

// Remove data from AsyncStorage
export const removeFromStorage = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};

// Clear all data from AsyncStorage
export const clearStorage = async (): Promise<void> => {
  await AsyncStorage.clear();
};