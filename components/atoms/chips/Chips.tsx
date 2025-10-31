import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { View } from 'react-native';
import { Chip, IconButton } from 'react-native-paper';
import { createStyles } from './ChipsStyles';

interface ChipData {
   label: string;
   value: string | number;
   clickable?: boolean;
}

interface ChipsProps {
   data: ChipData[];
   onPress?: (value: string | number) => void;
   onDelete?: (value: string | number) => void;
}

export const Chips: React.FC<ChipsProps> = ({ data, onPress, onDelete }) => {
   const context = useSiliconUIContext();
   const { colors } = context;
   const styles = createStyles(colors);

   return (
      <View style={styles.chipsContainer}>
         {data.map((item, index) => (
            <Chip
               key={index}
               onPress={() => onPress?.(item.value)}
               onClose={() => onDelete?.(item.value)}
               style={[
                  styles.chip,
                  item.clickable ? styles.clickableChip : styles.nonClickableChip,
               ]}
               textStyle={[
                  styles.chip,
                  item.clickable ? styles.chipLabel : styles.nonClickableChipLabel,
               ]}
               closeIcon={({ size }) => (
                  <IconButton
                     icon="close"
                     iconColor={colors.common.white.main}
                     size={size}
                     style={styles.closeIcon}
                     onPress={() => onDelete?.(item.value)}
                  />
               )}
            >
               {item.label}
            </Chip>
         ))}
      </View>
   );
};
