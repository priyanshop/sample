import { Colors } from '@/theme/types';
import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
const { width } = Dimensions.get('window');

interface NumericInputStyles {
   container: ViewStyle;
   inputWrapper: ViewStyle;
   box: ViewStyle;
   input: TextStyle;
   errorContainer: ViewStyle;
   errorText: TextStyle;
}

export const createStyles = (colors: Colors, length: number): NumericInputStyles => {
   const HORIZONTAL_PADDING = Math.max(10, Math.min(30, width * 0.05));
   const BOX_SIZE = Math.min(90, (width - HORIZONTAL_PADDING * 2 - 12 * (length - 1)) / length);
   const CONTAINER_HEIGHT = BOX_SIZE + 50;

   return StyleSheet.create({
      container: {
         flexDirection: 'column',
         alignItems: 'center',
         width: '100%',
         height: CONTAINER_HEIGHT,
         position: 'relative',
      },
      inputWrapper: {
         flexDirection: 'row',
         justifyContent: 'center',
         width: '100%',
         paddingHorizontal: HORIZONTAL_PADDING,
         height: CONTAINER_HEIGHT,
         gap: 12,
      },
      box: {
         width: BOX_SIZE,
         height: BOX_SIZE,
         borderRadius: BOX_SIZE / 5,
         paddingTop: 4,
         justifyContent: 'center',
         alignItems: 'center',
         borderWidth: 1,
         borderColor: colors.surfaceVariant,
      },
      input: {
         textAlign: 'center',
         padding: 0,
         fontSize: BOX_SIZE / 2,
         color: colors.common.black.main,
      },
      errorContainer: {
         position: 'absolute',
         bottom: 4,
         left: 0,
         right: 0,
         alignItems: 'center',
      },
      errorText: {
         textAlign: 'center',
         width: '100%',
         paddingHorizontal: 10,
         fontSize: 12,
         lineHeight: 16,
      },
   });
};
