import React from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';

export interface DateValue {
   dd: string;
   mm: string;
   yyyy: string;
}

export interface DisplayValue {
   date: DateValue;
   time: string;
}

interface DateTimeInputProps {
   name: string;
   label?: string;
}

export const DateTimeInput: React.FC<DateTimeInputProps> = ({ name, label }) => {
   return (
      <Controller
         name={name}
         render={({ field: { value, onChange }, fieldState: { error } }) => {
            return (
               <View style={{ paddingVertical: 40, gap: 70 }}>
                  <DatePickerInput
                     value={value}
                     onChange={value => onChange(value)}
                     inputMode="start"
                     locale="en"
                  />
               </View>
            );
         }}
      />
   );
};
