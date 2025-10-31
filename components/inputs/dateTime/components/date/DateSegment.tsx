import { useSiliconUIContext } from '@/theme';
import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import { DateValue, DisplayValue } from '../../DateTimeInput';
import { styles } from './dateStyles';

interface DateSegmentProps {
   parts: string[];
   placeholders: string[];
   dateValue: DateValue;
   onChange: (value: DisplayValue) => void;
   value: DisplayValue;
   error?: boolean;
}

const DateSegment: React.FC<DateSegmentProps> = ({
   parts,
   placeholders,
   dateValue,
   onChange,
   value,
   error,
}) => {
   const inputRefs = useRef<TextInput[]>([]);
   const { colors, dark } = useSiliconUIContext();
   const backgroundColor = dark ? colors.common.black.light : colors.common.grey.light;

   const handleTextChange = (text: string, part: string, index: number) => {
      if (!/^\d*$/.test(text)) return;

      const maxLength = part === 'YYYY' ? 4 : 2;

      const newValue: DisplayValue = {
         ...value,
         date: { ...dateValue, [part.toLowerCase()]: text },
      };

      onChange(newValue);

      // Only validate and auto-focus when we have a complete number
      if (text.length === maxLength) {
         const num = parseInt(text);
         const isValid =
            (part === 'DD' && num >= 1 && num <= 31) ||
            (part === 'MM' && num >= 1 && num <= 12) ||
            (part === 'YYYY' && num >= 1900 && num <= 2100);

         if (isValid && index < parts.length - 1) {
            inputRefs.current[index + 1]?.focus();
         }
      }
   };

   return (
      <View
         style={[
            styles.container,
            {
               borderColor: error ? colors.error : colors.common.grey.main,
               backgroundColor,
            },
         ]}
      >
         {parts.map((part, index) => (
            <React.Fragment key={index}>
               <TextInput
                  ref={el => {
                     inputRefs.current[index] = el as TextInput;
                  }}
                  style={[
                     styles.input,
                     {
                        color: colors.common.black.main,
                        fontWeight: '600',
                     },
                  ]}
                  placeholder={placeholders[index]}
                  placeholderTextColor={colors.text.light}
                  value={dateValue[part.toLowerCase() as keyof DateValue]}
                  onChangeText={text => handleTextChange(text, part, index)}
                  keyboardType="numeric"
                  maxLength={part === 'YYYY' ? 4 : 2}
               />
               {index < parts.length - 1 && (
                  <Text style={[styles.separator, { color: colors.text.light }]}>/</Text>
               )}
            </React.Fragment>
         ))}
      </View>
   );
};

export default DateSegment;
