import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      width: '100%',
   },
   sliderContainer: {
      height: 40,
      justifyContent: 'center',
   },
   track: {
      height: 4,
      backgroundColor: '#E0E0E0',
      borderRadius: 2,
   },
   activeTrack: {
      height: '100%',
      borderRadius: 2,
   },
   thumb: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#fff',
      position: 'absolute',
      top: 10,
      marginLeft: -10,
      borderWidth: 2,
      borderColor: '#000',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
   },
   labels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
});
