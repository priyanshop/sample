import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

interface SelectOption {
   label: string;
   description?: string;
   value: string | number;
}

interface RadioGroupProps {
   name: string;
   options: SelectOption[];
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      gap: 8,
   },
   option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
   },
   radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
   },
});

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, options }) => {
   const { colors } = useSiliconUIContext();

   return (
      <Controller
         name={name}
         render={({ field }) => (
            <View style={styles.container}>
               {options.map(option => (
                  <TouchableOpacity
                     key={option.value}
                     style={[styles.option]}
                     onPress={() => field.onChange(option.value)}
                  >
                     <View style={styles.radioContainer}>
                        <RadioButton
                           value={option.value.toString()}
                           status={field.value === option.value ? 'checked' : 'unchecked'}
                           onPress={() => field.onChange(option.value)}
                           color={colors.primary}
                        />
                        <Text
                           variant="bodyMedium"
                           style={{ color: colors.common.black.main, fontSize: 16 }}
                        >
                           {option.label}
                        </Text>
                     </View>
                  </TouchableOpacity>
               ))}
            </View>
         )}
      />
   );
};
