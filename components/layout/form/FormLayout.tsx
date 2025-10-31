import { useSiliconUIContext } from '@/theme';
import { Children } from '@/types';
import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { ThemedView } from '../themed-view/ThemedView';

interface FormLayoutProps {
   title?: string;
   description?: string;
   children: ReactNode;
   buttons?: Children;
   buttonContainerStyle?: StyleProp<ViewStyle>;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
   title,
   description,
   children,
   buttons,
   buttonContainerStyle,
}) => {
   const { colors } = useSiliconUIContext();

   const renderButtons = (): Children => {
      if (!buttons) return null;
      if (Array.isArray(buttons)) {
         return buttons.map((button, index) => (
            <React.Fragment key={index}>{button}</React.Fragment>
         ));
      }
      return buttons;
   };

   return (
      <ThemedView
         style={[
            {
               flex: 1,
               justifyContent: 'space-between',
               paddingHorizontal: 20,
            },
         ]}
      >
         {(title || description) && (
            <View style={{ gap: 8, marginBottom: 40 }}>
               {title && (
                  <Text variant="titleMedium" style={{ color: colors.common.black.main }}>
                     {title}
                  </Text>
               )}
               {description && (
                  <Text variant="bodyMedium" style={{ color: colors.text.light }}>
                     {description}
                  </Text>
               )}
            </View>
         )}
         <View style={{ flex: 1 }}>{children}</View>
         <View style={buttonContainerStyle}>{renderButtons()}</View>
      </ThemedView>
   );
};
