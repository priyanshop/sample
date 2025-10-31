import { useSiliconUIContext } from '@/theme';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

interface LikeButtonProps {
   isLiked: boolean;
   onPress?: () => void;
   size?: number;
   style?: ViewStyle;
   disabled?: boolean;
}

const styles = StyleSheet.create({
   container: {
      padding: 8,
   },
});

export const LikeButton: React.FC<LikeButtonProps> = ({
   isLiked,
   onPress,
   size = 24,
   style,
   disabled = false,
}) => {
   const { colors } = useSiliconUIContext();
   const color = disabled
      ? colors.common.grey.main
      : isLiked
        ? colors.common.red.main
        : colors.common.black.main;

   return (
      <Pressable onPress={onPress} style={[styles.container, style]} disabled={disabled}>
         {isLiked ? (
            <Feather name="heart" color={color} size={size} solid />
         ) : (
            <Feather name="heart" color={color} size={size} />
         )}
      </Pressable>
   );
};
