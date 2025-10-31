import { useSiliconUIContext } from "@/theme";
import React from "react";
import { Controller, ControllerRenderProps } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import CheckboxAndroid from "react-native-paper/src/components/Checkbox/CheckboxAndroid";

interface SelectOption {
  label: string;
  description?: string;
  value: string | number;
}

interface DepositOption {
  label: string;
  value: boolean;
  description: string;
}

type SwitchOptionType = SelectOption | DepositOption;

interface SwitchInputProps {
  name: string;
  options: SwitchOptionType[];
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 12,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

export const SwitchInput: React.FC<SwitchInputProps> = ({ name, options }) => {
  const { colors, dark } = useSiliconUIContext();

  const borderColor = colors.surfaceVariant;
  const borderColorChecked = dark
    ? colors.common.black.main
    : colors.common.black.main;

  const isOptionSelected = (
    optionValue: SwitchOptionType["value"],
    field: ControllerRenderProps
  ): boolean => {

    if (
      typeof optionValue === "object" &&
      optionValue !== null &&
      "type" in optionValue
    ) {
      console.log('====================================');
      console.log(field.value);
      console.log('====================================');
      return field.value?.type === (optionValue as { type: string }).type;
    }
    // SelectOption case
    return field.value === optionValue;
  };

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <View style={styles.container}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={`${option.label}-${index}`}
              style={[
                styles.option,
                {
                  borderColor: isOptionSelected(option.value, field)
                    ? borderColorChecked
                    : borderColor,
                },
              ]}
              onPress={() => field.onChange(option.value)}
            >
              <View style={styles.labelContainer}>
                <Text variant="labelLarge" style={{ fontWeight: 500 }}>
                  {option.label}
                </Text>
                <View style={{ marginTop: -8 }}>
                  <CheckboxAndroid
                    status={
                      isOptionSelected(option.value, field)
                        ? "checked"
                        : "unchecked"
                    }
                    color={borderColorChecked}
                    uncheckedColor={borderColor}
                    
                    onPress={() => {}}
                  />
                </View>
              </View>
              {option.description && (
                <Text
                  variant="bodyMedium"
                  style={[{ color: colors.text.light }]}
                >
                  {option.description}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  );
};
