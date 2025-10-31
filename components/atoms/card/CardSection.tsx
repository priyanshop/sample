import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardSectionProps extends ViewProps {
   children: React.ReactNode;
   spacing?: number;
}

export function CardSection({ children, style, spacing = 0, ...props }: CardSectionProps) {
   return (
      <View style={[{ marginBottom: spacing }, style]} {...props}>
         {children}
      </View>
   );
}
