import { useSiliconUIContext } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface PasswordCheckProps {
   label: string;
   isValid: boolean;
}

const styles = StyleSheet.create({
   checkContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   checkLabel: {
      marginLeft: 8,
   },
});

export function PasswordCheck({ label, isValid }: PasswordCheckProps): React.ReactElement {
   const { colors } = useSiliconUIContext();

   return (
      <View style={styles.checkContainer}>
         <MaterialIcons
            name="verified"
            color={isValid ? colors.common.green.main : colors.common.grey.medium}
            size={20}
         />
         <Text variant="labelSmall" style={[styles.checkLabel, { color: colors.text.light }]}>
            {label}
         </Text>
      </View>
   );
}