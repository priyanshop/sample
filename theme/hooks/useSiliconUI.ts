import { useColorScheme } from 'react-native';
import { darkTheme } from '../constants/darkTheme';
import { lightTheme } from '../constants/lightTheme';

export const useSiliconUI = (): typeof darkTheme | typeof lightTheme => {
   const colorScheme = useColorScheme() ?? 'dark';
   return colorScheme === 'dark' ? darkTheme : lightTheme;
};
