import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTimeSlots } from './hook/useTimeSlots';

interface TimeSelectorProps {
   name: string;
   label: string;
   selectedDate?: Date | null;
   mode?: 'pickup' | 'dropoff';
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
   },
   timeButton: {
      paddingHorizontal: 16,
      paddingVertical: 15,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
   },
   timeText: {
      textAlign: 'center',
   },
   disabledButton: {
      opacity: 0.5,
   },
});

export function TimeSelector({
   name,
   label,
   selectedDate,
   mode,
}: TimeSelectorProps): React.ReactElement {
   const { colors, dark } = useSiliconUIContext();
   const { width } = useWindowDimensions();
   const numberOfColumns = width > 375 ? 3 : 3;
   const buttonWidth = 100 / numberOfColumns - 2;
   const { timeSlots, isTimeDisabled } = useTimeSlots({
      selectedDate: selectedDate ?? null,
      mode,
   });

   return (
      <View style={{ flexDirection: 'column', gap: 20 }}>
         <Text variant="titleSmall">{label}</Text>
         <Controller
            name={name}
            render={({ field }) => {
               return (
                  <View style={styles.container}>
                     {timeSlots.map(time => {
                        const isSelected = time === field.value;
                        const disabled = isTimeDisabled(time);

                        return (
                           <TouchableOpacity
                              key={time}
                              onPress={() => !disabled && field.onChange(time)}
                              disabled={disabled}
                              style={[
                                 styles.timeButton,
                                 { width: `${buttonWidth}%` },
                                 {
                                    backgroundColor: isSelected
                                       ? dark
                                          ? colors.primary
                                          : colors.common.black.main
                                       : dark
                                         ? colors.common.grey.dark
                                         : colors.common.grey.light,
                                 },
                                 disabled && styles.disabledButton,
                              ]}
                           >
                              <Text
                                 style={[
                                    styles.timeText,
                                    {
                                       color: isSelected
                                          ? colors.common.white.main
                                          : colors.common.black.main,
                                    },
                                 ]}
                              >
                                 {time}
                              </Text>
                           </TouchableOpacity>
                        );
                     })}
                  </View>
               );
            }}
         />
      </View>
   );
}
