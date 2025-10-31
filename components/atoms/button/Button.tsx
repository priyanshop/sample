
import { useSiliconUIContext } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { createStyles } from './ButtonStyles';

interface CustomButtonProps {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'text' | 'danger';
  fullWidth?: boolean;
  disabled?: boolean;
  showArrow?: boolean;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  fullWidth = false,
  showArrow = false,
  disabled = false,
  style,
  contentStyle,
  textStyle,
}) => {
  const context = useSiliconUIContext();
  const { colors, dark } = context;
  const styles = createStyles(colors, dark);

  const buttonStyles = [
    styles.button,
    fullWidth && styles.fullWidth,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'text' && styles.textButton,
    variant === 'outlined' && styles.outlineButton,
    variant === 'tertiary' && styles.tertiaryButton,
    variant === 'danger' && styles.dangerButton,
    disabled && (variant === 'text' ? styles.disabledTextButton : styles.disabledButton),
    style,
  ];

  const textStyles = [
    styles.label,
    variant === 'secondary' && styles.secondaryLabel,
    variant === 'text' && styles.textLabel,
    variant === 'outlined' && styles.outlineLabel,
    variant === 'tertiary' && styles.tertiaryLabel,
    variant === 'danger' && styles.dangerLabel,
    disabled && (variant === 'text' ? styles.disabledTextLabel : styles.disabledLabel),
    textStyle,
  ];

  const content = (
    <View style={[styles.content, contentStyle]}>
      <Text style={textStyles}>{label}</Text>
      {showArrow && (
        <Ionicons name="arrow-forward" size={20} color={colors.common.white.main} style={styles.icon} />
      )}
    </View>
  );

  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : onPress}
      activeOpacity={variant === 'primary' ? 0.8 : 0.6}
      style={buttonStyles}
      disabled={disabled}
    >
      {content}
    </TouchableOpacity>
  );
};
