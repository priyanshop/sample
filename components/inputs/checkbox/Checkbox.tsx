import { useSiliconUIContext } from '@/theme';
import { useController } from 'react-hook-form';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import CheckboxIOS from 'react-native-paper/src/components/Checkbox/CheckboxIOS';

interface CheckBoxProps {
   name: string;
   label: string | React.ReactNode;
}

export const Checkbox: React.FC<CheckBoxProps> = ({ name, label }) => {
   const { field } = useController({
      name,
      defaultValue: false,
   });

   const { colors, ...rest } = useSiliconUIContext();

   return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <View
            style={{
               borderWidth: 1,
               borderRadius: 2,
               borderColor: !rest.dark ? colors.common.grey.medium : colors.surfaceVariant,
            }}
         >
            <CheckboxIOS
               theme={{
                  colors: { primary: colors.common.black.main },
               }}
               status={field.value ? 'checked' : 'unchecked'}
               onPress={() => field.onChange(!field.value)}
               color={colors.common.black.main}
            />
         </View>
         <View style={{ flex: 1, marginLeft: 10 }}>
            {typeof label === 'string' ? <Text>{label}</Text> : label}
         </View>
      </View>
   );
};
