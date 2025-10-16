import type { MD3Theme } from 'react-native-paper/lib/typescript/types';

type PaperFontWeight = NonNullable<MD3Theme['fonts']['bodyMedium']['fontWeight']>;
interface FontStyle {
   fontFamily?: string;
   fontSize: number;
   lineHeight?: number;
   letterSpacing?: number;
   fontWeight?: PaperFontWeight;
}

export interface CustomFonts {
   headlineXLarge: FontStyle;
   headlineLarge: FontStyle;
   headlineMedium: FontStyle;
   titleLarge: FontStyle;
   titleMedium: FontStyle;
   titleSmall: FontStyle;
   labelLarge: FontStyle;
   labelMedium: FontStyle;
   labelSmall: FontStyle;
   bodyLarge: FontStyle;
   bodyMedium: FontStyle;
   bodySmall: FontStyle;
   inputText: FontStyle;
   searchBar: FontStyle;
}

export const customFonts: CustomFonts = {
   headlineXLarge: {
      fontSize: 24,
      lineHeight: 30.36,
      letterSpacing: -0.015,
   },
   headlineLarge: {
      fontSize: 22,
      lineHeight: 30,
      letterSpacing: -0.015,
   },
   headlineMedium: {
      fontSize: 21,
      lineHeight: 30,
      letterSpacing: -0.015,
   },
   titleLarge: {
      fontSize: 20,
      fontWeight: '600',
   },
   titleMedium: {
      fontSize: 19,
      lineHeight: 25,
      letterSpacing: 0,
      fontWeight: '600',
   },
   titleSmall: {
      fontSize: 17.5,
      lineHeight: 22,
      fontWeight: '500',
   },
   labelLarge: {
      fontSize: 16,
      lineHeight: 21,
   },
   labelMedium: {
      fontSize: 15,
      lineHeight: 20,
   },
   labelSmall: {
      fontSize: 12.5,
      lineHeight: 17.5,
   },
   bodyLarge: {
      fontSize: 18,
      lineHeight: 27,
   },
   bodyMedium: {
      fontSize: 16,
      lineHeight: 22.5,
   },
   bodySmall: {
      fontSize: 15.5,
      lineHeight: 23,
      letterSpacing: 0.05,
   },
   inputText: {
      fontSize: 18,
      lineHeight: 20.24,
      letterSpacing: -0.03,
   },
   searchBar: {
      fontSize: 14,
      lineHeight: 24,
      letterSpacing: 0,
   },
};
