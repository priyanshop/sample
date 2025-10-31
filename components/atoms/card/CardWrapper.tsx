import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardWrapperProps extends ViewProps {
   children: React.ReactNode;
}

export function CardWrapper({ children, style, ...props }: CardWrapperProps) {
   return (
      <View style={[{ flex: 1 }, style]} {...props}>
         {children}
      </View>
   );
}
