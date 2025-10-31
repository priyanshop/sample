import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

interface SelectOption {
   label: string;
   description?: string;
   value: string | number;
}

interface SelectProps {
   name: string;
   options: SelectOption[];
}

const styles = StyleSheet.create({
   flatList: {
      flexGrow: 1,
   },
   flatListContent: {
      gap: 14,
   },
   option: {
      padding: 16,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: 'transparent',
   },
   optionText: {
      textAlign: 'center',
   },
});

export function Select({ name, options }: SelectProps): React.ReactElement {
   const { colors, dark } = useSiliconUIContext();

   return (
      <Controller
         name={name}
         render={({ field }) => (
            <FlatList
               data={options}
               renderItem={({ item }: { item?: SelectOption }): React.ReactElement => (
                  <TouchableOpacity
                     activeOpacity={1}
                     style={[
                        styles.option,
                        {
                           backgroundColor: dark
                              ? colors.common.black.light
                              : colors.common.white.light,
                        },
                        field?.value === item?.value && {
                           borderColor: colors.common.grey[dark ? 'dark' : 'main'],
                        },
                     ]}
                     onPress={() => field.onChange(item?.value)}
                  >
                     <Text
                        variant="bodyMedium"
                        style={[
                           styles.optionText,
                           field.value === item?.value && { color: colors.palette.primary.main },
                        ]}
                     >
                        {item?.label}
                     </Text>
                  </TouchableOpacity>
               )}
               keyExtractor={(_, index) => index.toString()}
               showsVerticalScrollIndicator={false}
               scrollEnabled={false}
               style={styles.flatList}
               contentContainerStyle={styles.flatListContent}
            />
         )}
      />
   );
}
