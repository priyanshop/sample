import { useSiliconUIContext } from "@/theme";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

interface SelectOption {
  label: string;
  description?: string;
  value: string | number;
}

export interface DropdownMenuProps {
  visible: boolean;
  options: SelectOption[];
  selectedValue: string;
  onSelect: (value: string | number) => void;
  editable?: boolean;
}

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 8,
    flex: 1,
  },
  option: {
    padding: 16,
  },
  optionText: {
    fontSize: 16,
  },
});

export const DropdownMenu = ({
  visible,
  options,
  selectedValue,
  onSelect,
  editable = true,
}: DropdownMenuProps): React.ReactElement | null => {
  const { colors, dark } = useSiliconUIContext();

  if (!visible) return null;

  return (
    <View
      style={[
        styles.dropdown,
        {
          backgroundColor: dark
            ? colors.common.black.light
            : colors.common.white.main,
        },
      ]}
    >
      <ScrollView
        nestedScrollEnabled={true}
        scrollEventThrottle={16}
      >
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => onSelect(option.value)}
            style={[
              styles.option,
              selectedValue === option.value && {
                backgroundColor: dark
                  ? colors.common.grey.dark
                  : colors.common.grey.light,
              },
            ]}
          >
            <Text
              variant="bodySmall"
              style={[
                styles.optionText,
                {
                  color: editable
                    ? colors.common.black.main
                    : colors.text.light,
                },
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
