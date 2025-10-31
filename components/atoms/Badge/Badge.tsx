import React from 'react';
import { View } from 'react-native';

interface BadgeProps {
   show: boolean;
   size?: 'sm' | 'md' | 'lg';
   color?: string;
}

export function Badge({
   show,
   size = 'sm',
   color = '#FF0000',
}: BadgeProps): React.ReactElement | null {
   if (!show) return null;

   const sizeStyles = {
      sm: {
         width: 8,
         height: 8,
         borderRadius: 4,
      },
      md: {
         width: 10,
         height: 10,
         borderRadius: 5,
      },
      lg: {
         width: 12,
         height: 12,
         borderRadius: 6,
      },
   };

   const currentSize = sizeStyles[size];

   return (
      <View
         style={{
            position: 'absolute',
            top: -2,
            right: -2,
            zIndex: 1,
            backgroundColor: color,
            width: currentSize.width,
            height: currentSize.height,
            borderRadius: currentSize.borderRadius,
         }}
      />
   );
}
