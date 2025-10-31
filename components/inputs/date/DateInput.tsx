import { useSiliconUIContext } from '@/theme';
import { DateFormat } from '@/types';
import React, { useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { createStyles } from './DateInputSyle';
import { getPartsFromFormat, handleInputChange } from './utils/helper';

interface DateInputProps {
   name: string;
   format: DateFormat;
}

export const DateInput: React.FC<DateInputProps> = ({ name, format }) => {
   const inputRefs = useRef<(TextInput | null)[]>([]);
   const { colors, fonts } = useSiliconUIContext();
   const styles = createStyles(colors);
   const [selectedPart, setSelectedPart] = useState<number | null>(null);

   const { parts, labels, placeholders } = getPartsFromFormat(format);

   return (
      <Controller
         name={name}
         render={({ field: { value, onChange }, fieldState: { error } }) => (
            <View style={styles.container}>
               <View style={styles.inputContainer}>
                  {parts.map((part, index) => (
                     <View key={index} style={styles.inputGroup}>
                        <Text variant="labelMedium" style={[{ color: colors.common.black.main }]}>
                           {labels[index]}
                        </Text>
                        <TouchableOpacity
                           activeOpacity={1}
                           onPress={() => inputRefs.current[index]?.focus()}
                           style={[
                              styles.inputWrapper,
                              selectedPart === index && { borderColor: colors.primary },
                           ]}
                        >
                           <TextInput
                              ref={el => {
                                 inputRefs.current[index] = el;
                              }}
                              style={[styles.input, { color: colors.common.black.main }, fonts.inputText]}
                              keyboardType="numeric"
                              placeholder={placeholders[index]}
                              placeholderTextColor={colors.common.grey.main}
                              value={value?.[part.toLowerCase()] || ''}
                              onChangeText={text => {
                                 handleInputChange(index, text, onChange, value, parts, inputRefs);
                              }}
                              onFocus={() => setSelectedPart(index)}
                              onBlur={() => setSelectedPart(null)}
                              maxLength={part === 'YYYY' ? 4 : 2}
                           />
                        </TouchableOpacity>
                     </View>
                  ))}
               </View>
               {error && (
                  <View style={styles.errorContainer}>
                     <Text
                        variant="labelSmall"
                        style={[styles.errorText, { color: colors.common.red.main }]}
                     >
                        {error.message}
                     </Text>
                  </View>
               )}
            </View>
         )}
      />
   );
};
