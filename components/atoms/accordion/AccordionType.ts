import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface AccordionItemProps {
  title: string | ReactNode;
  children?: ReactNode;
  content?: string;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  itemContainerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
  contentStyle?: ViewStyle;
  contentTextStyle?: TextStyle;
  iconColor?: string;
  iconSize?: number;
  openIcon?: keyof typeof Ionicons.glyphMap;
  closeIcon?: keyof typeof Ionicons.glyphMap;
  customIcon?: ReactNode | ((isOpen: boolean) => ReactNode);
  animationEnabled?: boolean;
  animationPreset?: "easeInEaseOut" | "linear" | "spring";
  disabled?: boolean;
}

export interface AccordionProps {
  data?: {
    title: string | ReactNode;
    content?: string;
    children?: ReactNode;
  }[];
  children?: ReactNode;
  allowMultiple?: boolean;
  containerStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  headerTextStyle?: TextStyle;
  contentStyle?: ViewStyle;
  contentTextStyle?: TextStyle;
  iconColor?: string;
  iconSize?: number;
  openIcon?: keyof typeof Ionicons.glyphMap;
  closeIcon?: keyof typeof Ionicons.glyphMap;
  customIcon?: ReactNode | ((isOpen: boolean) => ReactNode);
  animationEnabled?: boolean;
  animationPreset?: "easeInEaseOut" | "linear" | "spring";
}