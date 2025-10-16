import { DefaultTheme } from 'react-native-paper';
import { COLORS } from './colors';
import { customFonts } from './fonts';

export const lightTheme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      ...COLORS.light,
      primary: COLORS.light.palette.primary.main,
      background: COLORS.light.background.main,
   },
   fonts: {
      ...DefaultTheme.fonts,
      ...customFonts,
   },
   palette: {
      colore: 'blue',
   },
};
