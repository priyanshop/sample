import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { ScrollView, StyleSheet, View, type ViewProps } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ErrorBoundary } from '../errorBoundary/ErrorBoundary';

export type ThemedViewProps = ViewProps & {
   lightColor?: string;
   scroll?: boolean;
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   viewContent: {
      flex: 1,
   },
   scrollContent: {
      flexGrow: 1,
   },
   overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255,255,255,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
   },
});

const DEFAULT_PADDING = 20;

export function ThemedView({
   style,
   scroll = false,
   ...otherProps
}: ThemedViewProps): React.ReactElement {
   const { colors, dark } = useSiliconUIContext();

   const backgroundColor = dark ? colors.common.white.main : colors.background;

   const viewStyle = [
      { ...styles.viewContent, backgroundColor },
      { paddingHorizontal: DEFAULT_PADDING },
      style,
   ];

   return (
      <ErrorBoundary>
         <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, height: '100%', backgroundColor }}>
               {scroll ? (
                  <ScrollView
                     showsVerticalScrollIndicator={false}
                     bounces
                     style={viewStyle}
                     {...otherProps}
                  />
               ) : (
                  <View style={[viewStyle]} {...otherProps} />
               )}
            </SafeAreaView>
         </SafeAreaProvider>
      </ErrorBoundary>
   );
}
