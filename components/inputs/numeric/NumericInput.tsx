import { useSiliconUIContext } from '@/theme';
import React, { useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Keyboard, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { createStyles } from './NumericInputStyle';

interface NumericInputProps {
   name: string;
   length?: number;
}

export const NumericInput: React.FC<NumericInputProps> = ({ name, length = 4 }) => {
   const inputRefs = useRef<(TextInput | null)[]>([]);
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
   const { colors, fonts } = useSiliconUIContext();
   const styles = createStyles(colors, length);

   const handleInputChange = (
      index: number,
      text: string,
      setValue: (value: string) => void,
   ): void => {
      setValue(text);
      if (text && index < length - 1) {
         inputRefs.current[index + 1]?.focus();
      } else if (text && index === length - 1) {
         // Dismiss keyboard when the last digit is entered
         Keyboard.dismiss();
      }
   };

   const handleKeyPress = (
      index: number,
      { nativeEvent }: { nativeEvent: { key: string } },
   ): void => {
      if (nativeEvent.key === 'Enter' || nativeEvent.key === 'Done') {
         Keyboard.dismiss();
      } else if (nativeEvent.key === 'Backspace' && index > 0) {
         inputRefs.current[index - 1]?.focus();
      }
   };

   return (
      <Controller
         name={name}
         render={({ field: { value, onChange }, fieldState: { error } }) => (
            <View style={[styles.container]}>
               <View style={styles.inputWrapper}>
                  {[...Array(length)].map((_, index) => (
                     <TouchableOpacity
                        key={index}
                        activeOpacity={1}
                        onPress={() => inputRefs.current[index]?.focus()}
                        style={[
                           styles.box,
                           selectedIndex === index && { borderColor: colors.primary },
                        ]}
                     >
                        <TextInput
                           ref={el => {
                              inputRefs.current[index] = el;
                           }}
                           style={[styles.input, { color: colors.common.black.main }, fonts.inputText]}
                           keyboardType="numeric"
                           maxLength={1}
                           value={value?.[index] || ''}
                           onKeyPress={e => handleKeyPress(index, e)}
                           returnKeyType={index === length - 1 ? 'done' : 'next'}
                           blurOnSubmit={index === length - 1}
                           enablesReturnKeyAutomatically={true}
                           onChangeText={text =>
                              handleInputChange(index, text, newText => {
                                 const updatedValue = [...(value || '')];
                                 updatedValue[index] = newText;
                                 onChange(updatedValue.join(''));
                              })
                           }
                           onFocus={() => setSelectedIndex(index)}
                           onBlur={() => setSelectedIndex(null)}
                        />
                     </TouchableOpacity>
                  ))}
               </View>
               {error && error.message && (
                  <View style={styles.errorContainer}>
                     <Text
                        variant="labelMedium"
                        style={[styles.errorText, { color: colors.error }]}
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
