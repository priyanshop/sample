import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      width: '100%',
   },
   option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderRadius: 12,
   },
   radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      gap: 16,
   },
   icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
   },
   label: {
      fontSize: 16,
      fontWeight: '500',
   },
});
