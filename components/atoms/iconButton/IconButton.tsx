import { useSiliconUIContext } from '@/theme';
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    FontAwesome6,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial,
} from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import React from 'react';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './IconButtonStyles';

// Define all available icon families
type IconFamily =
   | 'AntDesign'
   | 'Entypo'
   | 'EvilIcons'
   | 'Feather'
   | 'FontAwesome'
   | 'FontAwesome5'
   | 'FontAwesome6'
   | 'Fontisto'
   | 'Foundation'
   | 'Ionicons'
   | 'MaterialCommunityIcons'
   | 'MaterialIcons'
   | 'Octicons'
   | 'SimpleLineIcons'
   | 'Zocial';

interface IconButtonProps {
   iconFamily?: IconFamily;
   iconName: string;
   label?: string;
   onPress?: () => void;
   style?: ViewStyle;
   labelStyle?: TextStyle;
   href?: Href;
   size?: 'small' | 'large';
   backgroundColor?: string;
   iconColor?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
   iconFamily = 'Ionicons',
   iconName,
   label,
   onPress,
   style,
   labelStyle,
   href,
   size = 'large',
   backgroundColor,
   iconColor,
}) => {
   const { colors, dark } = useSiliconUIContext();
   const defaultBackgroundColor = dark ? colors.common.black.light : colors.common.grey.light;
   const defaultIconColor = colors.common.black.main;
   const iconSize = size === 'small' ? 20 : 24;
   
   const handlePress = (): void => (href ? router.push(href) : onPress?.());

   // Select the icon component based on family
   const getIconComponent = () => {
      const iconProps = {
         name: iconName as any,
         size: iconSize,
         color: iconColor || defaultIconColor,
      };

      switch (iconFamily) {
         case 'AntDesign':
            return <AntDesign {...iconProps} />;
         case 'Entypo':
            return <Entypo {...iconProps} />;
         case 'EvilIcons':
            return <EvilIcons {...iconProps} />;
         case 'Feather':
            return <Feather {...iconProps} />;
         case 'FontAwesome':
            return <FontAwesome {...iconProps} />;
         case 'FontAwesome5':
            return <FontAwesome5 {...iconProps} />;
         case 'FontAwesome6':
            return <FontAwesome6 {...iconProps} />;
         case 'Fontisto':
            return <Fontisto {...iconProps} />;
         case 'Foundation':
            return <Foundation {...iconProps} />;
         case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons {...iconProps} />;
         case 'MaterialIcons':
            return <MaterialIcons {...iconProps} />;
         case 'Octicons':
            return <Octicons {...iconProps} />;
         case 'SimpleLineIcons':
            return <SimpleLineIcons {...iconProps} />;
         case 'Zocial':
            return <Zocial {...iconProps} />;
         case 'Ionicons':
         default:
            return <Ionicons {...iconProps} />;
      }
   };

   return (
      <View style={[styles.container, size === 'large' && styles.containerLarge, style]}>
         <TouchableOpacity
            style={[
               styles.button,
               size === 'small' ? styles.buttonSmall : styles.buttonLarge,
               { backgroundColor: backgroundColor || defaultBackgroundColor },
            ]}
            onPress={handlePress}
         >
            {getIconComponent()}
         </TouchableOpacity>
         {label && (
            <Text variant="labelMedium" style={[styles.label, labelStyle]}>
               {label}
            </Text>
         )}
      </View>
   );
};