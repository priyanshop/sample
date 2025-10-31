import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { Platform, StyleSheet, View, ViewStyle } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { ThemedView, ThemedViewProps } from '../themed-view/ThemedView';

interface FooterLayoutProps extends ThemedViewProps {
   footer: React.ReactNode;
   contentContainerStyle?: ViewStyle;
   style?: ViewStyle;
   fullscreen?: boolean;
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   scrollContent: {
      flexGrow: 1,
   },
   shadowContainer: {
      width: '100%',
   },
   footer: {
      width: '100%',
      paddingBottom: Platform.OS === 'ios' ? 25 : 18,
   },
});

export const FooterLayout: React.FC<FooterLayoutProps> = ({
   children,
   footer,
   style,
   scroll = false,
}) => {
   const { colors } = useSiliconUIContext();

   return (
      <>
         <ThemedView scroll={scroll} style={style}>
            {children}
         </ThemedView>
         <Shadow
            style={styles.shadowContainer}
            distance={12}
            startColor="#0000000A"
            endColor="#00000000"
            offset={[0, -6]}
         ></Shadow>
         <View
            style={{
               padding: 20,
               paddingTop: 15,
               paddingBottom: Platform.OS === 'ios' ? 45 : 28,
               backgroundColor: colors.background,
            }}
         >
            {footer}
         </View>
      </>
   );
};
