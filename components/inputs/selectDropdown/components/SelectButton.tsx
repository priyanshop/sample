import { useSiliconUIContext } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

interface SelectOption {
   label: string;
   description?: string;
   value: string | number;
}

interface SelectButtonProps {
   placeholder?: string;
   selectedOption?: SelectOption;
   onPress: () => void;
   isOpen: boolean;
   editable?: boolean;
   showEditLabel?: boolean;
   onChangePress?: () => void;
}

const styles = StyleSheet.create({
   inputContainer: {
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      height: 65,
      flexDirection: 'row',
      alignItems: 'center',
   },
   inputWrapper: {
      flex: 1,
      justifyContent: 'center',
      gap: 5,
   },
   valueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 24,
   },
   valueText: {
      fontSize: 18,
   },
   changeButton: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 8,
   },
});

export const SelectButton = ({
   placeholder,
   selectedOption,
   onPress,
   isOpen,
   editable = true,
   showEditLabel = false,
   onChangePress,
}: SelectButtonProps): React.ReactElement => {
   const { colors, fonts } = useSiliconUIContext();

   return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
         <View style={[styles.inputContainer, { borderColor: colors.surfaceVariant }]}>
            <View style={styles.inputWrapper}>
               <View style={styles.valueContainer}>
                  <Text
                     style={[
                        styles.valueText,
                        {
                           color: selectedOption && editable ? colors.common.black.main : colors.text.light,
                        },
                        editable && fonts.inputText,
                     ]}
                  >
                     {selectedOption?.label || placeholder}
                  </Text>
               </View>
            </View>
            {editable && (
               <MaterialIcons
                  name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={24}
                  color={colors.text.light}
               />
            )}
            {showEditLabel && !editable && (
               <TouchableOpacity style={styles.changeButton} onPress={onChangePress}>
                  <Text
                     variant="labelSmall"
                     style={{
                        color: colors.palette.primary.main,
                     }}
                  >
                     Change
                  </Text>
               </TouchableOpacity>
            )}
         </View>
      </TouchableOpacity>
   );
};