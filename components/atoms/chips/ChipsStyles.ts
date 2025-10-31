import { StyleSheet } from 'react-native';

// eslint-disable-next-line
export const createStyles = (colors: any) =>
   StyleSheet.create({
      chipsContainer: {
         flexDirection: 'row',
         flexWrap: 'wrap',
         gap: 8,
      },
      chip: {
         borderRadius: 16,
      },
      chipLabel: {
         color: colors.common.white.main,
         fontWeight: '500',
         fontSize: 12,
         marginRight: 5,
      },
      closeIcon: {
         margin: 'auto',
      },
      clickableChip: {
         backgroundColor: colors.palette.primary.main,
      },
      nonClickableChip: {
         backgroundColor: colors.chips.background,
      },
      nonClickableChipLabel: {
         color: colors.chips.label,
         fontWeight: '500',
         fontSize: 12,
      },
   });
