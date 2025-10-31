import { useSiliconUIContext } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { createStyles } from "./AccordionStyle";
import { AccordionItemProps, AccordionProps } from "./AccordionType";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  content,
  isOpen: controlledIsOpen,
  defaultOpen = false,
  onToggle,
  itemContainerStyle,
  headerStyle,
  headerTextStyle,
  contentStyle,
  contentTextStyle,
  iconColor,
  iconSize = 24,
  openIcon = "chevron-up",
  closeIcon = "chevron-down",
  customIcon,
  animationEnabled = true,
  animationPreset = "easeInEaseOut",
  disabled = false,
}) => {
  const { colors, dark } = useSiliconUIContext();
  const styles = createStyles(colors, dark);
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handlePress = () => {
    if (disabled) return;

    if (animationEnabled) {
      const preset =
        animationPreset === "linear"
          ? LayoutAnimation.Presets.linear
          : animationPreset === "spring"
          ? LayoutAnimation.Presets.spring
          : LayoutAnimation.Presets.easeInEaseOut;

      LayoutAnimation.configureNext(preset);
    }

    const newState = !isOpen;

    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newState);
    }

    onToggle?.(newState);
  };

  const renderTitle = () => {
    if (typeof title === "string") {
      return (
        <Text variant="bodyMedium" style={[styles.headerText, headerTextStyle]}>
          {title}
        </Text>
      );
    }
    return title;
  };

  const renderContent = () => {
    if (children) {
      return children;
    }
    if (content) {
      return (
        <Text
          variant="bodyMedium"
          style={[styles.contentText, contentTextStyle]}
        >
          {content}
        </Text>
      );
    }
    return null;
  };

  const renderIcon = () => {
    if (customIcon) {
      return typeof customIcon === "function" ? customIcon(isOpen) : customIcon;
    }
    return (
      <Ionicons
        name={isOpen ? openIcon : closeIcon}
        size={iconSize}
        color={iconColor || colors.text.light}
      />
    );
  };

  return (
    <View style={[styles.itemContainer, itemContainerStyle]}>
      <TouchableOpacity
        style={[styles.header, headerStyle]}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={disabled}
      >
        {renderTitle()}
        {renderIcon()}
      </TouchableOpacity>

      {isOpen && (
        <View style={[styles.content, contentStyle]}>{renderContent()}</View>
      )}
    </View>
  );
};

export const Accordion: React.FC<AccordionProps> = ({
  data,
  children,
  allowMultiple = false,
  containerStyle,
  itemContainerStyle,
  headerStyle,
  headerTextStyle,
  contentStyle,
  contentTextStyle,
  iconColor,
  iconSize,
  openIcon,
  closeIcon,
  customIcon,
  animationEnabled = true,
  animationPreset = "easeInEaseOut",
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const { colors, dark } = useSiliconUIContext();
  const styles = createStyles(colors, dark);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  if (children) {
    return <View style={[styles.container, containerStyle]}>{children}</View>;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {data?.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
          itemContainerStyle={itemContainerStyle}
          headerStyle={headerStyle}
          headerTextStyle={headerTextStyle}
          contentStyle={contentStyle}
          contentTextStyle={contentTextStyle}
          iconColor={iconColor}
          iconSize={iconSize}
          openIcon={openIcon}
          closeIcon={closeIcon}
          customIcon={customIcon}
          animationEnabled={animationEnabled}
          animationPreset={animationPreset}
        >
          {item.children}
        </AccordionItem>
      ))}
    </View>
  );
};
