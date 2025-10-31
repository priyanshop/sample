import { Colors } from '@/theme/types';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface CounterStyles {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  quantityContainer: ViewStyle;
  quantityText: TextStyle;
}

export const createStyles = (colors: Colors, dark: boolean): CounterStyles =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.common.white.main,
      borderRadius: 16,
      borderWidth: 1.5,
      borderColor: colors.common.grey.medium,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flex: 1,
    },
    button: {
      padding: 8,
    },
    buttonText: {
      fontSize: 28,
      fontWeight: '400',
      color: colors.text.main,
    },
    quantityContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    quantityText: {
      fontSize: 20,
      fontWeight: '600',
      color: colors.text.main,
    },
  });