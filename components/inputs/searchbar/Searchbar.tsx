import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { Input } from '../text/Input';

interface SearchBarProps {
   name: string;
   placeholder?: string;
   containerStyle?: ViewStyle;
   onPress?: () => void;
   autoFocus?: boolean;
   ref?: React.RefObject<TextInput | null>;
}

const styles = StyleSheet.create({
   container: {
      height: '100%',
      flex: 1,
   },
   input: {
      height: '100%',
      backgroundColor: 'transparent',
      borderWidth: 0,
      paddingHorizontal: 16,
   },
});

export const SearchBar = ({
   name,
   placeholder,
   containerStyle,
   onPress,
   autoFocus,
   ref,
   ...props
}: SearchBarProps): React.ReactElement => {
   const { colors, dark, fonts } = useSiliconUIContext();
   const backgroundColor = dark ? colors.common.black.light : colors.common.grey.light;

   return (
      <View style={[styles.container, containerStyle]}>
         <Input
            name={name}
            placeholder={placeholder || 'Search'}
            inputType="text"
            icon="search"
            label=""
            iconPosition="left"
            style={[styles.input, { backgroundColor }]}
            iconColor={colors.common.black.main}
            customInputStyle={[fonts.searchBar]}
            onPress={onPress}
            inputProps={{ ...props, ref: ref }}
         />
      </View>
   );
};
