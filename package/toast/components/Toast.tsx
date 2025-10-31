import { useSiliconUIContext } from "@/theme";
import React from "react";
import { StyleSheet } from "react-native";
import { Snackbar, Text } from "react-native-paper";

interface AlertProps {
  message: string;
  visible: boolean;
  onDismiss: () => void;
  severity?: "success" | "error" | "info" | "warning";
}

const styles = StyleSheet.create({
  snackbar: {
    margin: 16,
  },
});

export default function Toast({
  message,
  visible,
  onDismiss,
  severity = "info",
}: AlertProps): React.ReactElement {
  const theme = useSiliconUIContext();

  const variantStyles = {
    success: {
      background: theme.dark
        ? theme.colors.common.green.dark
        : theme.colors.common.green.light,
      text: theme.colors.common.white.main,
    },
    error: {
      background: theme.dark
        ? theme.colors.common.red.dark
        : theme.colors.common.red.dark,
      text: theme.colors.common.white.main,
    },
    warning: {
      background: theme.colors.common.yellow.dark,
      text: theme.colors.common.white.main,
    },
    info: {
      background: theme.dark
        ? theme.colors.common.grey.dark
        : theme.colors.common.grey.light,
      text: theme.dark
        ? theme.colors.common.white.main
        : theme.colors.common.black.main,
    },
  };

  const currentStyles = variantStyles[severity];

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={3000}
      style={[styles.snackbar, { backgroundColor: currentStyles.background }]}
    >
      <Text style={{ color: currentStyles.text }}>{message}</Text>
    </Snackbar>
  );
}
