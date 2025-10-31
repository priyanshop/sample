import { useSiliconUIContext } from '@/theme';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { bannerUtils } from './utils';

const styles = StyleSheet.create({
   banner: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      minHeight: 48,
      width: '100%',
   },
   content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
   },
});

interface BannerProps {
   variant: 'warning' | 'info' | 'success' | 'error';
   text: string;
   onPress?: () => void;
}

export const Banner: React.FC<BannerProps> = ({ variant, text, onPress }) => {
   const insets = useSafeAreaInsets();
   const { colors } = useSiliconUIContext();

   const backgroundColor = bannerUtils.getBackgroundColor(colors, variant);

   // Icon mapping based on variant
   const iconMap = {
      warning: 'alert-triangle',
      info: 'info',
      success: 'check-circle',
      error: 'alert-circle',
   } as const;

   const Content = (
      <View style={[styles.banner, { backgroundColor }]}>
         <View style={styles.content}>
            <View style={{ marginRight: 8 }}>
               <Feather 
                  name={iconMap[variant]} 
                  size={20} 
                  color={colors.common.white.main} 
               />
            </View>
            <Text variant="labelMedium" style={{ color: colors.common.white.main }}>
               {text}
            </Text>
         </View>
      </View>
   );

   return (
      <View style={{ paddingTop: insets.top, backgroundColor: colors.background }}>
         {onPress ? <TouchableOpacity onPress={onPress}>{Content}</TouchableOpacity> : Content}
      </View>
   );
};