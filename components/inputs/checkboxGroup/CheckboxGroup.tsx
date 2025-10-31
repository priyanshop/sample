import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { useController } from 'react-hook-form';
import { FlatList, Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';
import CheckboxIOS from 'react-native-paper/src/components/Checkbox/CheckboxIOS';

interface SelectOption {
   label: string;
   description?: string;
   value: string | number;
}

interface CheckboxGroupProps {
   name: string;
   options: SelectOption[];
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ name, options }) => {
   const { field } = useController({ name });
   const { colors, dark } = useSiliconUIContext();

   const borderColorChecked = dark ? colors.common.white.main : colors.common.black.main;

   const handleToggle = (value: string): void => {
      const currentValues = field.value || [];
      const newValues = currentValues.includes(value)
         ? currentValues.filter((v: string) => v !== value)
         : [...currentValues, value];
      field.onChange(newValues);
   };

   const renderItem = ({ item }: { item: SelectOption }): React.ReactElement => (
      <Pressable
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
         }}
         onPress={() => handleToggle(item.value.toString())}
      >
         <View
            style={{
               flexDirection: 'row',
               alignItems: 'center',
               flex: 1,
               gap: 15,
            }}
         >
            <View
               style={{
                  backgroundColor: !dark ? colors.common.grey.medium : colors.common.grey.main,
                  borderRadius: 2,
               }}
            >
               <CheckboxIOS
                  status={
                     (field.value || []).includes(item.value.toString()) ? 'checked' : 'unchecked'
                  }
                  onPress={() => handleToggle(item.value.toString())}
                  color={borderColorChecked}
               />
            </View>
            <Text
               variant="bodyMedium"
               style={{
                  color: colors.common.black.main,
                  fontSize: 16,
                  textAlignVertical: 'center',
               }}
            >
               {item.label}
            </Text>
         </View>
      </Pressable>
   );

   return (
      <FlatList
         data={options}
         renderItem={renderItem}
         keyExtractor={item => item.value.toString()}
         showsVerticalScrollIndicator={false}
         style={{ width: '100%' }}
         contentContainerStyle={{ paddingHorizontal: 2 }}
      />
   );
};
