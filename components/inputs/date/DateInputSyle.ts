import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BOX_WIDTH = Math.min(100, (width - 80) / 3);
const BOX_HEIGHT = 50;
const CONTAINER_HEIGHT = BOX_HEIGHT + 60; // Increased to accommodate label above

export const createStyles = (colors: any) =>
   StyleSheet.create({
      container: {
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'space-between',
         width: '100%',
         height: CONTAINER_HEIGHT,
         position: 'relative',
      },
      inputContainer: {
         width: '100%',
         flexDirection: 'row',
         justifyContent: 'space-between',
      },
      inputGroup: {
         alignItems: 'flex-start',
         gap: 4,
      },
      inputWrapper: {
         width: BOX_WIDTH,
         height: BOX_HEIGHT,
         borderRadius: 8,
         borderWidth: 1,
         paddingTop: 4,
         borderColor: colors.surfaceVariant,
         justifyContent: 'center',
         alignItems: 'center',
      },
      label: {
         fontSize: 12,
         marginBottom: 4,
      },
      input: {
         textAlign: 'center',
         padding: 0,
         fontSize: 18,
         width: '100%',
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
