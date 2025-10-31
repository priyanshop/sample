import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      justifyContent: 'center',
   },
   containerLarge: {
      flex: 1,
      padding: 10,
      paddingHorizontal: 0,
   },
   button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
   },
   buttonSmall: {
      width: 48,
      height: 48,
   },
   buttonLarge: {
      width: '100%',
      height: 56,
   },
   label: {
      marginTop: 12,
   },
});
