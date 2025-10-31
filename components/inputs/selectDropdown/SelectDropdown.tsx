import { Modal } from "@/components/layout/modal/components/Modal";
import { ModalWrapper } from "@/components/layout/modal/provider/ModalWrapper";
import { useSiliconUIContext } from "@/theme";
import React, { useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { DropdownMenu } from "./components/DropdownMenu";
import { SelectButton } from "./components/SelectButton";

interface SelectOption {
  label: string;
  description?: string;
  value: string | number;
}

interface SelectDropdownProps {
  name: string;
  options: SelectOption[];
  label: string;
  placeholder?: string;
  editable?: boolean;
  showEditLabel?: boolean;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    marginVertical: 10,
  },
  openContainer: {
    paddingBottom: 200,
  },
});

export const SelectDropdown = ({
  name,
  options,
  label,
  placeholder,
  editable = true,
  showEditLabel = false,
}: SelectDropdownProps): React.ReactElement => {
  const [isEditable, setIsEditable] = useState(editable);
  const [visible, setVisible] = useState(false);
  const { control } = useFormContext();
  const { field } = useController({ control, name });
  const { colors } = useSiliconUIContext();

  const selectedOption = options.find((opt) => opt.value === field.value);
  const handleSelect = (value: string | number): void => {
    field.onChange(value);
    setVisible(false);
  };

  const handleChangePress = (): void => {
    setIsEditable(true);
  };

  return (
    <View style={[styles.container, visible && styles.openContainer]}>
      <Text
        variant="labelSmall"
        style={{ color: colors.text.light, marginBottom: 7.5 }}
      >
        {label}
      </Text>
      <SelectButton
        placeholder={placeholder}
        selectedOption={selectedOption}
        onPress={isEditable ? () => setVisible(true) : () => {}} // Use setVisible to open modal
        isOpen={visible} // Keep original visible state for SelectButton visual feedback
        editable={isEditable}
        showEditLabel={showEditLabel}
        onChangePress={handleChangePress}
      />
      <ModalWrapper isVisible={visible} onClose={() => setVisible(false)}>
        <Modal
          style={{
            flex: 1,
          }}
        >
          <DropdownMenu
            visible={visible}
            options={options}
            selectedValue={field.value}
            onSelect={handleSelect}
            editable={isEditable}
          />
        </Modal>
      </ModalWrapper>
    </View>
  );
};
