import { CustomFonts } from '@/theme/constants/fonts';
import { Colors } from '@/theme/types';
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, View } from 'react-native';


const styles = StyleSheet.create({
   inputWrapper: {
      flex: 1,
      justifyContent: 'center',
      gap: 5,
   },
   input: {
      fontSize: 17.5,
      padding: 0,
   },
});

export const PasswordField: React.FC<{
   label?: string;
   error?: {
      message?: string;
   } | null;
   value: string;
   colors: Colors;
   fonts: CustomFonts;
   inputProps: TextInputProps;
   onPress?: () => void;
   customInputStyle?: StyleProp<TextStyle>;
   editable?: boolean;
}> = ({ label, error, value, colors, inputProps, onPress, editable = true }) => {
   return (
      <View style={[styles.inputWrapper, !label && { justifyContent: 'center' }]}>
         <View pointerEvents={onPress ? 'none' : 'auto'}>
            <TextInput
               {...inputProps}
               style={[styles.input, { color: colors.common.black.main, opacity: editable ? 1 : 0.7 }]}
               numberOfLines={1}
               editable={editable}
            />
         </View>
      </View>
   );
};
