import { useSiliconUIContext } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Controller, FieldError } from "react-hook-form";
import {
   StyleProp,
   StyleSheet,
   TextStyle,
   TouchableOpacity,
   View,
   ViewStyle,
} from "react-native";
import { Text } from "react-native-paper";
import { InputField as InputFieldComponent } from "./components/InputField";
import { InputIcon } from "./components/InputIcon";
import { text } from "./utils";

interface InputField {
  name: string;
  placeholder?: string;
  label?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  inputType?: "text" | "email" | "phone" | "number" | "password";
  inputProps?: any;
  editable?: boolean;
  showEditLabel?: boolean;
  iconPosition?: "left" | "right";
  onPress?: () => void;
}

interface InputProps extends InputField {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  customInputStyle?: StyleProp<TextStyle>;
  iconColor?: string;
  iconSize?: number;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  onChangePress?: () => void;
  autoFocus?: boolean;
  changeButtonText?: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    gap: 2.5,
    marginTop: 7.5,
  },
  changeButton: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: 8,
  },
});

export const Input: React.FC<InputProps> = ({
  name,
  placeholder = "",
  label,
  icon,
  inputType,
  inputProps,
  style,

  editable = true,
  showEditLabel,
  containerStyle,
  iconPosition = "right",
  customInputStyle,
  iconColor,
  iconSize = 24,
  onPress,
  onSubmitEditing,
  onEndEditing,
  onChangePress,
  autoFocus,
  changeButtonText = "Change",
}) => {
  const { colors, fonts } = useSiliconUIContext();
  const isSubmitting = React.useRef(false);
  const [isEditable, setIsEditable] = useState(editable);

  const handleBlur = (onBlur: () => void): (() => void) => {
    return () => {
      onBlur();
      // Only trigger onEndEditing if we're not submitting via enter key
      if (onEndEditing && !isSubmitting.current) {
        onEndEditing();
      }
      // Reset the flag after blur
      isSubmitting.current = false;
    };
  };

  const handleSubmitEditing = (): void => {
    if (onSubmitEditing) {
      isSubmitting.current = true;
      onSubmitEditing();
    }
  };

  const handleChangePress = (): void => {
    if (onChangePress) {
      onChangePress();
    } else {
      setIsEditable(true);
    }
  };

  const renderInputContent = (
    onChange: (value: string) => void,
    onBlur: () => void,
    value: string,
    error: FieldError | undefined
  ): React.ReactNode => (
    <>
      {label && (
        <Text
          variant="labelSmall"
          style={{
            color: error && value ? colors.error : colors.text.light,
          }}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          styles.container,
          {
            borderColor: error && value ? colors.error : colors.surfaceVariant,
          },
          style,
        ]}
      >
        <InputIcon
          icon={icon}
          position="left"
          color={iconColor || colors.text.light}
          iconPosition={iconPosition}
          size={iconSize}
        />
        <InputFieldComponent
          label={label}
          error={error}
          value={value}
          colors={colors}
          fonts={fonts}
          onPress={onPress}
          customInputStyle={customInputStyle}
          editable={isEditable}
          inputProps={{
            placeholder: text.set(placeholder, 30),
            placeholderTextColor: colors.text.light,
            value,
            onChangeText: onChange,
            numberOfLines: 1,
            onBlur: handleBlur(onBlur),
            onSubmitEditing: handleSubmitEditing,
            keyboardType:
              inputType === "email"
                ? "email-address"
                : inputType === "phone"
                ? "phone-pad"
                : inputType === "number"
                ? "numeric"
                : "default",
            secureTextEntry: inputType === "password",
            editable: isEditable,
            autoFocus,
            ...inputProps,
          }}
        />
        {showEditLabel && !isEditable && (
          <TouchableOpacity
            style={styles.changeButton}
            onPress={handleChangePress}
          >
            <Text
              variant="labelSmall"
              style={{ color: colors.palette.primary.main }}
            >
              {changeButtonText}
            </Text>
          </TouchableOpacity>
        )}
        <InputIcon
          icon={icon}
          position="right"
          color={
            iconColor || (error && value ? colors.error : colors.text.light)
          }
          iconPosition={iconPosition}
          size={iconSize}
        />
      </View>
      {error && error.message && value && (
        <View style={{ boxSizing: "border-box", padding: 13 }}>
          {error && value && (
            <Text variant="labelSmall" style={{ color: colors.error }}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    </>
  );

  return (
    <Controller
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={containerStyle}>
          {onPress ? (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
              {renderInputContent(onChange, onBlur, value, error)}
            </TouchableOpacity>
          ) : (
            renderInputContent(onChange, onBlur, value, error)
          )}
        </View>
      )}
    />
  );
};
