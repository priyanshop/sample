import { Colors } from '@/theme/types';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ButtonStyles {
   button: ViewStyle;
   fullWidth: ViewStyle;
   gradient: ViewStyle;
   content: ViewStyle;
   label: TextStyle;
   icon: TextStyle;
   secondaryButton: ViewStyle;
   secondaryLabel: TextStyle;
   tertiaryButton: ViewStyle;
   tertiaryLabel: TextStyle;
   textButton: ViewStyle;
   dangerButton: ViewStyle;
   dangerLabel: TextStyle;
   textLabel: TextStyle;
   outlineButton: ViewStyle;
   outlineLabel: TextStyle;
   disabledButton: ViewStyle;
   disabledLabel: TextStyle;
   disabledTextButton: ViewStyle;
   disabledTextLabel: TextStyle;
}

export const createStyles = (colors: Colors, dark: boolean): ButtonStyles =>
   StyleSheet.create({
      button: {
         borderRadius: 25,
         overflow: 'hidden',
         width: '50%',
      },
      fullWidth: {
         width: '100%',
      },
      gradient: {
         borderRadius: 25,
      },
      content: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
         paddingVertical: 12,
         paddingHorizontal: 24,
         marginTop: -2,
      },
      label: {
         color: colors.common.white.main,
         fontSize: 15,
         fontWeight: '600',
      },
      icon: {
         marginLeft: 8,
      },
      secondaryButton: {
         backgroundColor: 'transparent',
         borderWidth: 1.2,
         borderColor: colors.primary,
      },
      secondaryLabel: {
         color: colors.primary,
      },
      tertiaryButton: {
         backgroundColor: dark ? colors.common.white.main : colors.common.black.main,
      },
      tertiaryLabel: {
         color: dark ? colors.common.black.main : colors.common.white.main,
      },
      dangerButton: {
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: colors.common.red.main,
      },
      dangerLabel: {
         color: colors.common.white.main,
      },
      textButton: {
         backgroundColor: 'transparent',
      },
      textLabel: {
         color: colors.primary,
      },
      outlineButton: {
         backgroundColor: 'transparent',
         borderWidth: 1,
         borderColor: colors.surfaceVariant,
      },
      outlineLabel: {
         color: colors.common.black.main,
      },
      disabledButton: {
         backgroundColor: colors.buttons.disabledBackground,
         borderRadius: 25,
      },
      disabledLabel: {
         color: colors.buttons.disabledText,
      },
      disabledTextButton: {
         backgroundColor: 'transparent',
      },
      disabledTextLabel: {
         color: colors.buttons.disabledText,
      },
   });
