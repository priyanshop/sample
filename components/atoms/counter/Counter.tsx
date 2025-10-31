import { useSiliconUIContext } from "@/theme";
import React, { useState } from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { createStyles } from "./CounterStyles";

interface CounterProps {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  onValueChange?: (value: number) => void;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  quantityContainerStyle?: StyleProp<ViewStyle>;
  quantityTextStyle?: StyleProp<TextStyle>;
}

const Counter: React.FC<CounterProps> = ({
  initialValue = 1,
  minValue = 1,
  maxValue = 999,
  onValueChange,
  containerStyle,
  buttonStyle,
  buttonTextStyle,
  quantityContainerStyle,
  quantityTextStyle,
}) => {
  const context = useSiliconUIContext();
  const { colors, dark } = context;
  const styles = createStyles(colors, dark);
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrement = (): void => {
    if (quantity > minValue) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onValueChange?.(newValue);
    }
  };

  const handleIncrement = (): void => {
    if (quantity < maxValue) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onValueChange?.(newValue);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={handleDecrement}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, buttonTextStyle]}>−</Text>
      </TouchableOpacity>

      <View style={[styles.quantityContainer, quantityContainerStyle]}>
        <Text style={[styles.quantityText, quantityTextStyle]}>{quantity}</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={handleIncrement}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, buttonTextStyle]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Counter };
