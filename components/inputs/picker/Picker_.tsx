import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { Picker as RootComponent } from '@react-native-picker/picker';

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
   },
   picker: {
      width: '100%',
      color: '#000',
   },
   item: {
      height: 70,
      color: '#000',
   },
});

export function FormPicker({
   name,
   options,
}: {
   name: string;
   options: { label: string; value: string | number }[];
}): React.ReactElement {
   const { control } = useFormContext();
   return (
      <Controller
         control={control}
         name={name}
         render={({ field, fieldState }) => (
            <View style={{ gap: 8 }}>
               <View style={styles.container}>
                  <RootComponent
                     selectedValue={field.value}
                     onValueChange={field.onChange}
                     style={styles.picker}
                     itemStyle={styles.item}
                  >
                     {options.map((item, index) => (
                        <RootComponent.Item label={item.label} value={item.value} key={index} />
                     ))}
                  </RootComponent>
               </View>
            </View>
         )}
      />
   );
}
