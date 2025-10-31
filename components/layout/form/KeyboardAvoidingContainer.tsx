import React from 'react';
import { KeyboardAvoidingView, Platform, ViewStyle } from 'react-native';

interface KeyboardAvoidingContainerProps {
   children: React.ReactNode;
   style?: ViewStyle;
   behavior?: 'height' | 'position' | 'padding';
   keyboardVerticalOffset?: number;
}

export const KeyboardAvoidingContainer: React.FC<KeyboardAvoidingContainerProps> = ({
   children,
   style,
   behavior = Platform.OS === 'ios' ? 'padding' : undefined,
   keyboardVerticalOffset = Platform.OS === 'ios' ? 120 : 0,
}) => {
   return (
      <KeyboardAvoidingView
         style={[{ flex: 1 }, style]}
         behavior={behavior}
         keyboardVerticalOffset={keyboardVerticalOffset}
         enabled
      >
         {children}
      </KeyboardAvoidingView>
   );
};
