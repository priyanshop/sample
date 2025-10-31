import { useSiliconUIContext } from '@/theme';
import { Feather } from '@expo/vector-icons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { ThemedView } from '../layout/themed-view/ThemedView';

const styles = StyleSheet.create({
   outerContainer: {
      width: '100%',
      height: 'auto',
   },
   toggleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 2,
      paddingBottom: 16,
   },
});

export function Collapsible({
   children,
   previewContent,
   style,
   backgroundColor,
   seeMoreText = 'See More',
   seeLessText = 'See Less',
}: PropsWithChildren & {
   previewContent: React.ReactNode;
   style?: ViewStyle;
   backgroundColor?: string;
   seeMoreText?: string;
   seeLessText?: string;
}): React.ReactElement {
   const [isOpen, setIsOpen] = useState(false);
   const { colors } = useSiliconUIContext();

   const toggleButton = (
      <TouchableOpacity
         style={styles.toggleButton}
         onPress={() => setIsOpen(value => !value)}
         activeOpacity={0.8}
      >
         <Feather
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={18}
            color={colors.common.black.main}
            style={{ marginRight: 4 }}
         />
         <Text variant="labelMedium" style={{ fontSize: 14 }}>
            {isOpen ? seeLessText : seeMoreText}
         </Text>
      </TouchableOpacity>
   );

   return (
      <View style={[styles.outerContainer, style]}>
         <ThemedView style={[{ backgroundColor }]}>
            <View>{previewContent}</View>
            {isOpen && children}
            {toggleButton}
         </ThemedView>
      </View>
   );
}