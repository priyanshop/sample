import { MD3DarkTheme as DarkTheme } from 'react-native-paper';
import { COLORS } from './colors';
import { customFonts } from './fonts';

export const darkTheme = {
   ...DarkTheme,
   colors: {
      ...DarkTheme.colors,
      ...COLORS.dark,
      primary: COLORS.dark.palette.primary.main,
      background: COLORS.dark.background.main,
   },
   fonts: {
      ...DarkTheme.fonts,
      ...customFonts,
   },
   palette: {
      colore: 'blue',
   },
};
