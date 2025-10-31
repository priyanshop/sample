import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      borderWidth: 1,
      borderRadius: 12,
      marginBottom: 15,
   },
   content: {
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
   },
   textContainer: {
      flex: 1,
      gap: 4,
   },
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
   },
   description: {
      lineHeight: 16.8,
   },
   sliderContainer: {},
   sliderLabels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
   },
});
