import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useMultistepsContext } from '../hooks/useMultistepsContext';

export const StepContent: React.FC = () => {
   const { colors, dark } = useSiliconUIContext();
   const { steps, currentStepIndex } = useMultistepsContext();

   const currentStep = steps[currentStepIndex - 1];

   return (
      <>
         <View
            style={{
               gap: 5,
               paddingHorizontal: 20,
               backgroundColor: dark ? colors.common.black.main : colors.background,
            }}
         >
            <View style={{ gap: 8 }}>
               {currentStep.title && (
                  <Text variant="titleMedium" style={{ color: colors.common.black.main }}>
                     {currentStep.title}
                  </Text>
               )}
               {currentStep.description && (
                  <Text variant="bodyMedium" style={{ color: colors.text.light }}>
                     {currentStep.description}
                  </Text>
               )}
            </View>
         </View>
         <View style={{ flex: 1 }}>{currentStep.component}</View>
      </>
   );
};
