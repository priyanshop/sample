import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   iconLeft: {
      marginRight: 8,
   },
   iconRight: {
      marginLeft: 8,
   },
});

export const InputIcon: React.FC<{
   icon: keyof typeof MaterialIcons.glyphMap | undefined;
   position: 'left' | 'right';
   color: string;
   iconPosition?: 'left' | 'right';
   size?: number;
}> = ({ icon, position, color, iconPosition = 'right', size = 24 }) => {
   if (!icon || position !== iconPosition) return null;

   return (
      <MaterialIcons
         name={icon}
         size={size}
         color={color}
         style={position === 'left' ? styles.iconLeft : styles.iconRight}
      />
   );
};