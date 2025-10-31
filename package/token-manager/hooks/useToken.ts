import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'auth_token';

const get = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

const set = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error setting token:', error);
  }
};

const remove = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

const validate = async (): Promise<boolean> => {
  const token = await get();
  return !!token;
};

export const token = { get, set, validate, remove };
