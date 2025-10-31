import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
   container: {
      width: width,
      position: 'relative',
   },
   loadingContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
   },
   image: {
      width: width,
   },
   overlay: {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   },
   backButton: {
      position: 'absolute',
      top: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 20,
      left: 20,
      zIndex: 10,
   },
   leftArrow: {
      left: 10,
   },
   rightArrow: {
      right: 10,
   },
   counter: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
   },
   counterText: {
      fontSize: 14,
   },
   noImagesContainer: {
      justifyContent: 'center',
      alignItems: 'center',
   },
});
