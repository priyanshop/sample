import { useSiliconUIContext } from '@/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import { Avatar as PaperAvatar } from 'react-native-paper';
import { createStyles, getSize } from './AvatarStyles';

interface AvatarProps {
   source: string | number | null;
   initials?: string;
   size?: 'sm' | 'md' | 'lg' | 'xl';
   border?: boolean;
   showEditButton?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
   source,
   initials,
   size = 'sm',
   border = false,
   showEditButton = false,
}) => {
   const { colors } = useSiliconUIContext();
   const avatarSize = getSize(size);
   const styles = createStyles(avatarSize, border);

   const renderAvatar = (): React.ReactElement => {
      if (source) {
         return (
            <PaperAvatar.Image
               size={border ? avatarSize - 8 : avatarSize}
               source={typeof source === 'string' ? { uri: source } : source}
               style={styles.avatar}
            />
         );
      }
      return (
         <PaperAvatar.Text
            size={border ? avatarSize - 8 : avatarSize}
            label={initials || ''}
            style={[styles.avatar, { backgroundColor: colors.palette.primary.main }]}
            labelStyle={styles.initialsText}
            color={colors.common.white.main}
         />
      );
   };

   return (
      <View style={styles.avatarContainer}>
         {border ? (
            <LinearGradient
               colors={[colors.palette.primary.main, colors.palette.primary.light]}
               start={{ x: 0, y: 0 }}
               end={{ x: 1, y: 1 }}
               style={styles.gradientBorder}
            >
               {renderAvatar()}
            </LinearGradient>
         ) : (
            renderAvatar()
         )}
         {showEditButton && (
            <View style={[styles.editButton, { backgroundColor: colors.primary }]}>
               <FontAwesome5
                  name="pencil-alt"
                  size={14}
                  color={colors.common.white.main}
               />
            </View>
         )}
      </View>
   );
};
