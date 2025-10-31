import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { Slider } from '../slider/Slider';
import { styles } from './SyledCheckboxStyle';

interface StyledCheckboxProps<T = unknown> {
   name: string;
   title: string;
   description: string;
   showSlider?: boolean;
   min?: number;
   max?: number;
   value?: T | number;
}

export const StyledCheckbox = <T = unknown,>({
   name,
   title,
   description,
   showSlider = false,
   min = 100,
   max = 500,
   value,
}: StyledCheckboxProps<T>): React.ReactElement => {
   const { control } = useFormContext();
   const { field } = useController({
      control,
      name,
      defaultValue: null,
   });

   const { colors, dark } = useSiliconUIContext();
   const borderColor = dark ? colors.common.grey.dark : colors.common.grey.medium;
   const borderColorChecked = dark ? colors.common.white.main : colors.common.black.main;

   const handleValueChange = (value: number): void => {
      field.onChange(value);
   };

   const handleCheckboxPress = (): void => {
      if (showSlider) {
         field.onChange(field.value ? null : min);
      } else {
         field.onChange(field.value ? null : value);
      }
   };

   return (
      <View
         style={[styles.container, { borderColor: field.value ? borderColorChecked : borderColor }]}
      >
         {showSlider ? (
            <View style={styles.content}>
               <View style={styles.textContainer}>
                  <View style={styles.headerContainer}>
                     <Text variant="titleMedium">{title}</Text>
                     <View style={styles.headerRight}>
                        <Text variant="titleMedium" style={{ color: colors.primary }}>
                           {field.value ? `+ $${field.value.toFixed(2)}` : ''}
                        </Text>
                        <Checkbox
                           status={field.value ? 'checked' : 'unchecked'}
                           color={borderColorChecked}
                           onPress={handleCheckboxPress}
                        />
                     </View>
                  </View>
                  {field.value && (
                     <View style={styles.sliderContainer}>
                        <Slider
                           value={field.value}
                           onValueChange={handleValueChange}
                           min={min}
                           max={max}
                           minimumTrackTintColor={
                              dark ? colors.common.white.main : colors.common.black.main
                           }
                           maximumTrackTintColor={
                              dark ? colors.common.grey.dark : colors.common.grey.medium
                           }
                        />
                     </View>
                  )}
               </View>
            </View>
         ) : (
            <TouchableOpacity onPress={handleCheckboxPress} style={styles.content}>
               <View style={styles.textContainer}>
                  <View style={styles.headerContainer}>
                     <Text variant="titleMedium">{title}</Text>
                  </View>
                  <Text variant="bodySmall" style={[styles.description, { color: colors.primary }]}>
                     {description}
                  </Text>
               </View>
               <Checkbox
                  status={field.value ? 'checked' : 'unchecked'}
                  color={dark ? colors.common.white.main : colors.common.black.main}
                  onPress={handleCheckboxPress}
               />
            </TouchableOpacity>
         )}
      </View>
   );
};

export default StyledCheckbox;
