import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

export const PasswordIcon: React.FC<{
   icon: keyof typeof MaterialCommunityIcons.glyphMap | undefined;
   position: 'left' | 'right';
   color: string;
   style?: any;
   iconPosition?: 'left' | 'right';
}> = ({ icon, position, color, iconPosition = 'right', style }) => {
   if (!icon || position !== iconPosition) return null;

   return (
      <MaterialCommunityIcons
         name={icon}
         size={20}
         color={color}
         style={{
            marginLeft: 8,
            opacity: 0.5,
            ...style,
         }}
      />
   );
};