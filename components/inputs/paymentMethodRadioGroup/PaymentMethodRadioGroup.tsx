import { useSiliconUIContext } from '@/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Controller } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { styles } from './RadioGroupStyle';

interface SelectOption {
   label: string;
   description?: string;
   value: string | number;
}

export interface PaymentMethodOption extends SelectOption {
   icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

interface PaymentMethodRadioGroupProps {
   name: string;
   options: PaymentMethodOption[];
}

export const PaymentMethodRadioGroup: React.FC<PaymentMethodRadioGroupProps> = ({
   name,
   options,
}) => {
   const { colors, dark } = useSiliconUIContext();

   return (
      <Controller
         name={name}
         render={({ field }) => (
            <View style={styles.container}>
               {options.map((option, index) => {
                  const isSelected = field.value === option.value;
                  const isLastItem = index === options.length - 1;

                  return (
                     <TouchableOpacity
                        key={option.value}
                        activeOpacity={0.6}
                        style={[
                           styles.option,
                           {
                              backgroundColor: dark
                                 ? colors.common.black.light
                                 : colors.common.white.main,
                              borderColor: colors.surfaceVariant,
                              borderBottomWidth: isLastItem ? 1 : 0,
                              borderTopRightRadius: isLastItem ? 0 : 12,
                              borderTopLeftRadius: isLastItem ? 0 : 12,
                              borderBottomRightRadius: isLastItem ? 12 : 0,
                              borderBottomLeftRadius: isLastItem ? 12 : 0,
                           },
                        ]}
                        onPress={() => field.onChange(option.value)}
                     >
                        <View style={styles.radioContainer}>
                           {option.icon && (
                              <MaterialCommunityIcons 
                                 name={option.icon} 
                                 size={24} 
                                 color={colors.text.main} 
                              />
                           )}
                           <Text style={[styles.label, { color: colors.text.main }]}>
                              {option.label}
                           </Text>
                        </View>
                        <RadioButton
                           value={option.value.toString()}
                           status={isSelected ? 'checked' : 'unchecked'}
                           onPress={() => field.onChange(option.value)}
                           color={colors.primary}
                        />
                     </TouchableOpacity>
                  );
               })}
            </View>
         )}
      />
   );
};