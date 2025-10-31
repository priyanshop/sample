import { useSiliconUIContext } from '@/theme';
import React, { useState } from 'react';
import { Controller, FieldError } from 'react-hook-form';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { PasswordField } from '../fieldTypes.type';
import { PasswordField as InputFieldComponent } from './components/PasswordField';
import { PasswordIcon } from './components/PasswordIcon';
import { text } from './utils';

interface InputProps extends PasswordField {
   style?: StyleProp<ViewStyle>;
   containerStyle?: StyleProp<ViewStyle>;
   customInputStyle?: StyleProp<TextStyle>;
   iconColor?: string;
   onSubmitEditing?: () => void;
   onEndEditing?: () => void;
   onChangePress?: () => void;
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      height: 50,
      gap: 2.5,
      marginTop: 7.5,
   },
   changeButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      marginLeft: 8,
   },
});

export const Password: React.FC<InputProps> = ({
   name,
   placeholder = '',
   label,
   inputProps,
   style,
   editable = true,
   showEditLabel,
   containerStyle,
   customInputStyle,
   onPress,
   onSubmitEditing,
   onEndEditing,
   onChangePress,
}) => {
   const { colors, fonts } = useSiliconUIContext();
   const isSubmitting = React.useRef(false);
   const [isEditable, setIsEditable] = useState(editable);

   const [isVisible, setIsVisible] = useState(false);

   const handleBlur = (onBlur: () => void): (() => void) => {
      return () => {
         onBlur();
         // Only trigger onEndEditing if we're not submitting via enter key
         if (onEndEditing && !isSubmitting.current) {
            onEndEditing();
         }
         // Reset the flag after blur
         isSubmitting.current = false;
      };
   };

   const handleSubmitEditing = (): void => {
      if (onSubmitEditing) {
         isSubmitting.current = true;
         onSubmitEditing();
      }
   };

   const handleChangePress = (): void => {
      if (onChangePress) {
         onChangePress();
      } else {
         setIsEditable(true);
      }
   };

   const renderInputContent = (
      onChange: (value: string) => void,
      onBlur: () => void,
      value: string,
      error: FieldError | undefined,
   ): React.ReactNode => (
      <>
       {label && (
        <Text
          variant="labelSmall"
          style={{
            color: error && value ? colors.error : colors.text.light,
          }}
        >
          {label}
        </Text>
      )}
         <View
            style={[
               styles.container,
               {
                  borderColor: error ? colors.error : colors.surfaceVariant,
               },
               style,
            ]}
         >
            <InputFieldComponent
               label={label}
               error={error}
               value={value}
               colors={colors}
               fonts={fonts}
               onPress={onPress}
               customInputStyle={customInputStyle}
               editable={isEditable}
               inputProps={{
                  placeholder: text.set(placeholder, 30),
                  placeholderTextColor: colors.text.light,
                  value,
                  onChangeText: onChange,
                  numberOfLines: 1,
                  onBlur: handleBlur(onBlur),
                  onSubmitEditing: handleSubmitEditing,
                  secureTextEntry: !isVisible,
                  editable: isEditable,
                  ...inputProps,
               }}
            />
            {showEditLabel && !isEditable && (
               <TouchableOpacity style={styles.changeButton} onPress={handleChangePress}>
                  <Text variant="labelSmall" style={{ color: colors.palette.primary.main }}>
                     Change
                  </Text>
               </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
               <PasswordIcon
                  icon={'eye'}
                  position="right"
                  color={isVisible ? colors.palette.primary.main : colors.text.light}
                  style={{ opacity: isVisible ? 1 : 0.8 }}
               />
            </TouchableOpacity>
         </View>
         {error && error.message && (
            <View style={{ boxSizing: 'border-box', padding: 13 }}>
               {error && (
                  <Text variant="labelSmall" style={{ color: colors.error }}>
                     {error.message}
                  </Text>
               )}
            </View>
         )}
      </>
   );

   return (
      <Controller
         name={name}
         render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <View style={containerStyle}>
               {onPress ? (
                  <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                     {renderInputContent(onChange, onBlur, value, error)}
                  </TouchableOpacity>
               ) : (
                  renderInputContent(onChange, onBlur, value, error)
               )}
            </View>
         )}
      />
   );
};
