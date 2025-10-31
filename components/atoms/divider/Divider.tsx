import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Divider as PaperDivider } from 'react-native-paper';

interface DividerProps {
   bold?: boolean | undefined;
   color?: string;
   style?: StyleProp<ViewStyle>;
}

export const Divider: React.FC<DividerProps> = ({ color, bold, style }) => {
   const dividerColor = color ? { backgroundColor: color } : {};
   return (
      <View style={{ width: '100%' }}>
         <PaperDivider bold={bold} style={[dividerColor, style]} />
      </View>
   );
};
