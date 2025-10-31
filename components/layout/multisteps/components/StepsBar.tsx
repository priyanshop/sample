import { useSiliconUIContext } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useMultistepsContext } from '../hooks/useMultistepsContext';

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 6,
   },
   stepColumn: {
      flex: 1,
      alignItems: 'center',
   },
   progressStep: {
      width: '100%',
      height: 7,
      marginHorizontal: 2,
      borderRadius: 20,
   },
   stepName: {
      textAlign: 'center',
      marginTop: 8,
      fontWeight: 400,
   },
});

export function StepsBar({ style }: { style?: Record<string, unknown> }): React.ReactElement {
   const { colors, dark } = useSiliconUIContext();
   const { steps, currentStepIndex } = useMultistepsContext();

   const currentStepColor = dark ? colors.common.white.main : colors.common.black.main;
   const stepColor = dark ? colors.common.grey.main : colors.common.grey.medium;

   const group = steps[currentStepIndex - 1].group;

   return (
      <View
         style={[
            styles.container,
            {
               paddingHorizontal: 20,
               backgroundColor: dark ? colors.common.black.main : colors?.background,
            },
            { ...style },
         ]}
      >
         {steps.map(
            (step, index) =>
               step?.group?.id === group?.id && (
                  <View key={index} style={styles.stepColumn}>
                     <View
                        style={[
                           styles.progressStep,
                           {
                              backgroundColor:
                                 index < currentStepIndex ? currentStepColor : stepColor,
                           },
                        ]}
                     />
                     <Text
                        variant="labelMedium"
                        numberOfLines={1}
                        style={[
                           styles.stepName,
                           {
                              color: index < currentStepIndex ? currentStepColor : stepColor,
                           },
                        ]}
                     >
                        {step.name || ''}
                     </Text>
                  </View>
               ),
         )}
      </View>
   );
}
