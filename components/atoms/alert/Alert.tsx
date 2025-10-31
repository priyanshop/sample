import { useSiliconUIContext } from "@/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "./AlertStyles";

interface AlertProps {
  label: string;
  variant?: "success" | "error" | "warning" | "text";
}

export const Alert: React.FC<AlertProps> = ({ label, variant = "error" }) => {
  const theme = useSiliconUIContext();

  const variantStyles = {
    success: {
      background: theme.colors.common.green.light,
      text: theme.colors.common.white.main,
    },
    error: {
      background: theme.dark
        ? theme.colors.common.red.dark
        : theme.colors.common.red.main,
      text: theme.colors.common.white.light,
    },
    warning: {
      background: theme.colors.common.yellow.light,
      text: theme.colors.common.white.main,
    },
    text: {
      background: theme.colors.common.grey?.[theme.dark ? "dark" : "light"],
      text: theme.dark
        ? theme.colors.common.white.main
        : theme.colors.common.black.main,
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <View
      style={[
        styles.alertContainer,
        { backgroundColor: currentStyles.background },
      ]}
    >
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons
          name="alert"
          size={22}
          color={currentStyles.text}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text variant="bodySmall" style={{ color: currentStyles.text }}>
          {label}
        </Text>
      </View>
    </View>
  );
};
