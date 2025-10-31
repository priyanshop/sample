import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   tabBar: {
      backgroundColor: 'transparent',
      elevation: 0, // Remove shadow on Android
      shadowOpacity: 0, // Remove shadow on iOS
      borderBottomWidth: 0,
      padding: 0,
      height: 35,
   },
   tab: {
      alignItems: 'flex-start',
      padding: 0,
      paddingBottom: 20,
   },
   activeIndicator: {
      width: 40,
      height: 3.5,
      borderRadius: 8,
      marginLeft: 5,
   },
   sceneContainer: {
      flex: 1,
   },
});
