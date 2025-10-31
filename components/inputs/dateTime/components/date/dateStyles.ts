import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      height: 44,
   },
   input: {
      flex: 1,
      fontSize: 16,
      textAlign: 'center',
      padding: 0,
   },
   separator: {
      fontSize: 16,
      marginHorizontal: 4,
   },
});
